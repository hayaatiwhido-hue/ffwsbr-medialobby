const json = (data, status = 200, extra = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET,POST,OPTIONS",
      "access-control-allow-headers": "Content-Type, Authorization",
      ...extra,
    },
  });

function base64url(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes)))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64url(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s);
  return Uint8Array.from(bin, c => c.charCodeAt(0));
}

async function hmac(text, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  return crypto.subtle.sign("HMAC", key, new TextEncoder().encode(text));
}

async function createSession(user, secret) {
  const payload = {
    email: user.email,
    scope: user.scope || "standard",
    player_id: user.player_id || "",
    user_type: user.user_type || "standard",
    exp: Math.floor(Date.now() / 1000) + 8 * 60 * 60
  };
  const body = base64url(new TextEncoder().encode(JSON.stringify(payload)));
  const sig = base64url(await hmac(body, secret));
  return `${body}.${sig}`;
}

async function verifySession(token, secret) {
  try {
    const [body, sig] = token.split(".");
    if (!body || !sig) return null;

    const expected = base64url(await hmac(body, secret));
    const a = fromBase64url(sig);
    const b = fromBase64url(expected);
    if (a.length !== b.length) return null;

    let diff = 0;
    for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
    if (diff !== 0) return null;

    const payload = JSON.parse(
      new TextDecoder().decode(fromBase64url(body))
    );

    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

async function getUsers(env) {
  if (!env.SHEETBEST_URL) {
    throw new Error("SHEETBEST_URL não configurada no Worker.");
  }

  const r = await fetch(env.SHEETBEST_URL, {
    headers: { "accept": "application/json" }
  });

  if (!r.ok) {
    throw new Error(`SheetBest respondeu HTTP ${r.status}.`);
  }

  const data = await r.json();
  return Array.isArray(data) ? data : [];
}

function normalize(value) {
  return String(value ?? "").trim().toLowerCase();
}

async function handleLogin(request, env) {
  if (!env.SESSION_SECRET) {
    return json({ ok: false, error: "SESSION_SECRET não configurada." }, 500);
  }

  let input;
  try {
    input = await request.json();
  } catch {
    return json({ ok: false, error: "JSON inválido." }, 400);
  }

  const email = normalize(input.email);
  const senha = String(input.senha ?? input.password ?? "");

  if (!email || !senha) {
    return json({ ok: false, error: "E-mail e senha são obrigatórios." }, 400);
  }

  let users;
  try {
    users = await getUsers(env);
  } catch (e) {
    return json({ ok: false, error: e.message }, 502);
  }

  const user = users.find(u =>
    normalize(u.email) === email &&
    String(u.senha ?? "") === senha &&
    normalize(u.ativo || "SIM") === "sim"
  );

  if (!user) {
    return json({ ok: false, error: "E-mail ou senha inválidos." }, 401);
  }

  const session = await createSession(user, env.SESSION_SECRET);

  return json({
    ok: true,
    session,
    user: {
      email: user.email,
      scope: user.scope || "standard",
      player_id: user.player_id || "",
      user_type: user.user_type || "standard",
      ativo: user.ativo || "SIM"
    }
  });
}

async function handleMe(request, env) {
  if (!env.SESSION_SECRET) {
    return json({ ok: false, error: "SESSION_SECRET não configurada." }, 500);
  }

  const auth = request.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";

  const user = await verifySession(token, env.SESSION_SECRET);
  if (!user) return json({ ok: false, error: "Sessão inválida ou expirada." }, 401);

  return json({ ok: true, user });
}

async function handleDomains(request, env) {
  try {
    const users = await getUsers(env);
    const domains = new Map();

    for (const user of users) {
      if (normalize(user.ativo || "SIM") !== "sim") continue;
      const email = normalize(user.email);
      const at = email.lastIndexOf("@");
      if (at < 1 || at === email.length - 1) continue;

      const dominio = email.slice(at + 1).trim();
      if (!dominio || !dominio.includes(".")) continue;

      if (!domains.has(dominio)) {
        domains.set(dominio, { dominio: `@${dominio}`, nome: dominio });
      }
    }

    return json({
      ok: true,
      dominios: Array.from(domains.values()).sort((a, b) =>
        a.nome.localeCompare(b.nome, "pt-BR")
      )
    });
  } catch (e) {
    return json({ ok: false, error: e.message }, 502);
  }
}

async function handleUsers(request, env) {
  if (!env.SESSION_SECRET) {
    return json({ ok: false, error: "SESSION_SECRET não configurada." }, 500);
  }

  const auth = request.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const session = await verifySession(token, env.SESSION_SECRET);

  if (!session) return json({ ok: false, error: "Não autorizado." }, 401);
  if (session.scope !== "all" && session.scope !== "admin") {
    return json({ ok: false, error: "Acesso negado." }, 403);
  }

  try {
    const users = await getUsers(env);
    return json({ ok: true, users });
  } catch (e) {
    return json({ ok: false, error: e.message }, 502);
  }
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { status: 204 });

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    try {
      if (request.method === "GET" && (path === "/" || path === "/health")) {
        return json({
          ok: true,
          service: "media-lobby-api",
          status: "online"
        });
      }

      if (request.method === "POST" &&
          (path === "/login" || path === "/api/login")) {
        return await handleLogin(request, env);
      }

      if (request.method === "GET" &&
          (path === "/session" || path === "/me" || path === "/api/session")) {
        return await handleMe(request, env);
      }

      if (request.method === "GET" &&
          (path === "/domains" || path === "/api/domains")) {
        return await handleDomains(request, env);
      }

      if (request.method === "GET" &&
          (path === "/users" || path === "/api/users")) {
        return await handleUsers(request, env);
      }

      return json({
        ok: false,
        error: "Rota não encontrada.",
        path
      }, 404);
    } catch (e) {
      return json({
        ok: false,
        error: "Erro interno do servidor."
      }, 500);
    }
  }
};
