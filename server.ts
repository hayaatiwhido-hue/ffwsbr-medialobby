import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import crypto from 'node:crypto';
import bcrypt from 'bcryptjs';
import { neon } from '@neondatabase/serverless';
import nodemailer from 'nodemailer';

const PORT = Number(process.env.PORT || 3000);
const SESSION_HOURS = Number(process.env.SESSION_HOURS || 24);
const ONLINE_TIMEOUT_MINUTES = Number(process.env.ONLINE_TIMEOUT_MINUTES || 5);
const ALERT_COOLDOWN_MINUTES = Number(process.env.ALERT_COOLDOWN_MINUTES || 15);
const SHEETBEST_USUARIOS_URL = process.env.SHEETBEST_USUARIOS_URL || 'https://api.sheetbest.com/sheets/53fd3157-4eac-49eb-b064-7be9f8e795af/tabs/USUARIOS';
const SESSION_SECRET = process.env.SESSION_SECRET || '';
const ADMIN_ALERT_EMAIL = process.env.ADMIN_ALERT_EMAIL || '';
const SMTP_HOST = process.env.SMTP_HOST || '';
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = String(process.env.SMTP_SECURE || 'false') === 'true';
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;

if (!SESSION_SECRET) console.warn('[MEDIA LOBBY] SESSION_SECRET não configurado.');
if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) console.warn('[MEDIA LOBBY] Banco Postgres/Neon não configurado.');

const DATABASE_URL = process.env.POSTGRES_URL || process.env.DATABASE_URL || '';
const sql = DATABASE_URL ? neon(DATABASE_URL) : null;

function json(res:any, status:number, data:any, headers:any={}) {
  res.writeHead(status, {'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'no-store', ...headers});
  res.end(JSON.stringify(data));
}
function html(res:any, status:number, body:string) {
  res.writeHead(status, {'Content-Type':'text/html; charset=utf-8', 'Cache-Control':'no-store'}); res.end(body);
}
function text(res:any, status:number, body:string, type='text/plain; charset=utf-8') { res.writeHead(status, {'Content-Type':type}); res.end(body); }
function cookie(name:string, value:string, maxAge:number) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  return `${name}=${value}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${secure}`;
}
function parseCookies(req:any) {
  const out:any = {}; const raw = req.headers.cookie || '';
  raw.split(';').forEach((part:string)=>{ const i=part.indexOf('='); if(i>0) out[part.slice(0,i).trim()] = decodeURIComponent(part.slice(i+1).trim()); });
  return out;
}
function body(req:any):Promise<any> { return new Promise((resolve,reject)=>{ let b=''; req.on('data',(c:any)=>{b+=c; if(b.length>1e6) req.destroy();}); req.on('end',()=>{ try{resolve(b?JSON.parse(b):{});}catch{resolve({});} }); req.on('error',reject); }); }
function clientIp(req:any) { const x=req.headers['x-forwarded-for']; return String(Array.isArray(x)?x[0]:(x||'')).split(',')[0].trim() || String(req.socket.remoteAddress||'').replace(/^::ffff:/,'') || 'unknown'; }
function deviceHash(req:any, deviceId='') { return crypto.createHash('sha256').update([deviceId, req.headers['user-agent']||'', req.headers['accept-language']||'', req.headers['sec-ch-ua']||'', req.headers['sec-ch-ua-platform']||''].join('|')).digest('hex'); }
function tokenHash(token:string) { return crypto.createHmac('sha256', SESSION_SECRET || 'change-me').update(token).digest('hex'); }
function randomToken() { return crypto.randomBytes(48).toString('base64url'); }
function esc(s:any) { return String(s??'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'} as any)[c]); }
function normalizeStatus(v:any) { const t=String(v??'').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); if(['nao','no','false','0','inativo','inactive','off','desativado','bloqueado','revogado','negado','denied','disabled'].includes(t)) return 'desativado'; if(t.includes('manutencao')||t.includes('maintenance')||t.includes('suspenso')||t.includes('pausado')) return 'manutencao'; return 'autorizado'; }
async function ensureDb(){
  if(!sql) return;
  await sql`CREATE TABLE IF NOT EXISTS ml_users (email text primary key, password_hash text, scope text default 'all', player_id text default '', user_type text default 'standard', status text default 'autorizado', blocked boolean default false, last_login timestamptz, created_at timestamptz default now())`;
  await sql`CREATE TABLE IF NOT EXISTS ml_sessions (id bigserial primary key, email text not null, token_hash text unique not null, user_type text default 'standard', scope text default 'all', player_id text default '', ip text, device_hash text, user_agent text, created_at timestamptz default now(), last_seen timestamptz default now(), expires_at timestamptz not null, revoked boolean default false)`;
  await sql`CREATE TABLE IF NOT EXISTS ml_events (id bigserial primary key, type text, email text, ip text, device_hash text, details text, created_at timestamptz default now())`;
  await sql`CREATE TABLE IF NOT EXISTS ml_alerts (email text primary key, last_alert_at timestamptz)`;
}
async function getSheetUsers(){
  if(!SHEETBEST_USUARIOS_URL) throw new Error('SHEETBEST_USUARIOS_URL não configurada.');
  const r=await fetch(SHEETBEST_USUARIOS_URL,{cache:'no-store'}); if(!r.ok) throw new Error(`SheetBest ${r.status}`); const rows=await r.json(); if(!Array.isArray(rows)) throw new Error('USUARIOS inválido');
  return rows.map((r:any)=>{ const pick=(keys:string[])=>{for(const k of keys) if(r[k]!==undefined && String(r[k]).trim()!=='') return r[k]; return '';}; const email=String(pick(['email','EMAIL','e-mail','E-MAIL'])).trim().toLowerCase(); const senha=String(pick(['senha','SENHA','password','PASSWORD'])); const scope=String(pick(['scope','SCOPE','escopo','ESCOPO'])||'all').trim(); const playerId=String(pick(['player_id','playerId','PLAYER_ID','id_player','ID_PLAYER'])||'').trim(); const userType=String(pick(['user_type','userType','USER_TYPE','tipo','TIPO'])||'standard').trim().toLowerCase(); const ativo=normalizeStatus(pick(['ativo','ATIVO','Ativo','active','ACTIVE','Active','status','STATUS','Status'])); return {email,senha,scope,playerId,userType:userType==='admin'?'admin':'standard',status:ativo}; }).filter((u:any)=>u.email); }
async function upsertUser(u:any){ if(!sql) return; await sql`INSERT INTO ml_users(email,password_hash,scope,player_id,user_type,status) VALUES(${u.email},${await bcrypt.hash(u.senha,12)},${u.scope},${u.playerId},${u.userType},${u.status}) ON CONFLICT(email) DO UPDATE SET password_hash=EXCLUDED.password_hash,scope=EXCLUDED.scope,player_id=EXCLUDED.player_id,user_type=EXCLUDED.user_type,status=EXCLUDED.status`; }
async function findUser(email:string){ if(!sql) return null; const r=await sql`SELECT * FROM ml_users WHERE email=${email} LIMIT 1`; return r[0]||null; }
async function recordEvent(type:string,email:string,ip:string,device:string,details:string){ if(sql) await sql`INSERT INTO ml_events(type,email,ip,device_hash,details) VALUES(${type},${email},${ip},${device},${details})`; }
async function sendAlert(email:string,ip:string,device:string,other:any[]){
  if(!ADMIN_ALERT_EMAIL || !SMTP_HOST || !SMTP_USER || !SMTP_PASS || !sql) return;
  const now=new Date(); const a=await sql`SELECT last_alert_at FROM ml_alerts WHERE email=${email}`; const last=a[0]?.last_alert_at ? new Date(a[0].last_alert_at).getTime() : 0; if(last && now.getTime()-last < ALERT_COOLDOWN_MINUTES*60000) return;
  const transporter=nodemailer.createTransport({host:SMTP_HOST,port:SMTP_PORT,secure:SMTP_SECURE,auth:{user:SMTP_USER,pass:SMTP_PASS}});
  const lines=other.map(x=>`Login: ${x.email}\nIP: ${x.ip}\nDispositivo: ${x.device_hash?.slice(0,12)}\nÚltima atividade: ${x.last_seen}`).join('\n\n');
  const recipients=[ADMIN_ALERT_EMAIL,email].filter(Boolean).filter((v,i,a)=>a.indexOf(v)===i).join(',');
  await transporter.sendMail({from:SMTP_FROM,to:recipients,subject:`Media Lobby — login usado em outro dispositivo: ${email}`,text:`O login ${email} foi detectado em sessões diferentes.\n\nNova sessão:\nIP: ${ip}\nDispositivo: ${device.slice(0,12)}\n\nOutras sessões ativas:\n${lines}\n\nAcesse o painel administrativo para revogar uma sessão.`});
  await sql`INSERT INTO ml_alerts(email,last_alert_at) VALUES(${email},now()) ON CONFLICT(email) DO UPDATE SET last_alert_at=EXCLUDED.last_alert_at`;
}
function statelessSession(token:string){ try{ const [payload,sig]=token.split('.'); if(!payload||!sig) return null; const expected=crypto.createHmac('sha256',SESSION_SECRET||'change-me').update(payload).digest('base64url'); if(!crypto.timingSafeEqual(Buffer.from(sig),Buffer.from(expected))) return null; const s=JSON.parse(Buffer.from(payload,'base64url').toString()); if(!s.exp||Date.now()>s.exp) return null; return s; }catch{return null;} }
async function auth(req:any){
  const token=parseCookies(req).ml_session; if(!token) return null;
  if(!sql){ const s=statelessSession(token); return s ? {...s,ip:clientIp(req),device:deviceHash(req,String(req.headers['x-device-id']||''))} : null; }
  const rows=await sql`SELECT * FROM ml_sessions WHERE token_hash=${tokenHash(token)} AND revoked=false AND expires_at>now() LIMIT 1`; const s=rows[0]; if(!s) return null; const ip=clientIp(req); const device=deviceHash(req,String(req.headers['x-device-id']||'')); await sql`UPDATE ml_sessions SET last_seen=now(),ip=${ip},device_hash=${device},user_agent=${String(req.headers['user-agent']||'')} WHERE id=${s.id}`; return {...s,ip,device}; }
async function adminAuth(req:any){ const s=await auth(req); return s && s.user_type==='admin' ? s : null; }
async function login(req:any,res:any){
  const b=await body(req); const email=String(b.email||'').trim().toLowerCase(); const senha=String(b.senha||''); const deviceId=String(b.deviceId||''); if(!email||!senha) return json(res,400,{ok:false,error:'Informe email e senha.'});
  const sheet=(await getSheetUsers()).find((u:any)=>u.email===email); if(!sheet || sheet.status==='desativado') return json(res,401,{ok:false,error:'Credenciais de Acesso Incorreta!'});
  let user=sql ? await findUser(email) : null; let valid=false; if(user?.password_hash) valid=await bcrypt.compare(senha,user.password_hash); if(!valid && sheet.senha && senha===sheet.senha){ if(sql){ await upsertUser(sheet); user=await findUser(email); } valid=true; }
  if(!valid || (user && user.blocked)) return json(res,401,{ok:false,error:'Credenciais de Acesso Incorreta!'});
  const token=randomToken(), th=tokenHash(token), ip=clientIp(req), dh=deviceHash(req,deviceId), ua=String(req.headers['user-agent']||''), expires=new Date(Date.now()+SESSION_HOURS*3600000);
  if(sql){
    await sql`INSERT INTO ml_sessions(email,token_hash,user_type,scope,player_id,ip,device_hash,user_agent,expires_at) VALUES(${email},${th},${sheet.userType},${sheet.scope},${sheet.playerId},${ip},${dh},${ua},${expires})`;
    await sql`UPDATE ml_users SET last_login=now(),user_type=${sheet.userType},scope=${sheet.scope},player_id=${sheet.playerId},status=${sheet.status} WHERE email=${email}`;
    const others=await sql`SELECT email,ip,device_hash,last_seen FROM ml_sessions WHERE email=${email} AND revoked=false AND expires_at>now() AND token_hash<>${th} ORDER BY last_seen DESC LIMIT 10`;
    if(others.length && others.some((x:any)=>x.ip!==ip || x.device_hash!==dh)){ await recordEvent('duplicate_login',email,ip,dh,'Mesmo login detectado em IP/dispositivo diferente.'); sendAlert(email,ip,dh,others).catch(e=>console.error(e)); }
  }
  let sessionToken=token; if(!sql){ const payload=Buffer.from(JSON.stringify({email,scope:sheet.scope,player_id:sheet.playerId,user_type:sheet.userType,status:sheet.status,exp:Date.now()+SESSION_HOURS*3600000})).toString('base64url'); const sig=crypto.createHmac('sha256',SESSION_SECRET||'change-me').update(payload).digest('base64url'); sessionToken=payload+'.'+sig; } const maxAge=SESSION_HOURS*3600; return json(res,200,{ok:true,user:{email,scope:sheet.scope,playerId:sheet.playerId,userType:sheet.userType,status:sheet.status}},{'Set-Cookie':cookie('ml_session',sessionToken,maxAge)});
}
async function api(req:any,res:any){
  const u=new URL(req.url||'/',`http://${req.headers.host||'localhost'}`); const p=u.pathname;
  if(req.method==='GET'&&p==='/api/health') return json(res,200,{ok:true,service:'media-lobby',time:new Date().toISOString()});
  if(req.method==='POST'&&p==='/api/login') return login(req,res);
  if(req.method==='POST'&&p==='/api/logout'){ const s=await auth(req); if(s&&sql) await sql`UPDATE ml_sessions SET revoked=true WHERE id=${s.id}`; return json(res,200,{ok:true},{'Set-Cookie':cookie('ml_session','',0)}); }
  if(req.method==='GET'&&p==='/api/me'){ const s=await auth(req); if(!s) return json(res,401,{ok:false}); return json(res,200,{ok:true,user:{email:s.email,scope:s.scope,playerId:s.player_id,userType:s.user_type,status:s.status||'autorizado'}}); }
  if(req.method==='GET'&&p==='/admin'){ const a=await adminAuth(req); if(!a) return json(res,403,{ok:false,error:'Acesso administrativo negado.'}); return html(res,200,ADMIN_HTML); }
  if(p.startsWith('/api/admin')){
    if(!sql) return json(res,503,{ok:false,error:'Painel administrativo requer POSTGRES_URL ou DATABASE_URL na Vercel.'});
    const a=await adminAuth(req); if(!a) return json(res,403,{ok:false,error:'Acesso administrativo negado.'});
    if(req.method==='GET'&&p==='/api/admin/overview'){
      const timeout=`${ONLINE_TIMEOUT_MINUTES} minutes`;
      const [sessions,users,events]=await Promise.all([sql!`SELECT id,email,user_type,scope,ip,device_hash,user_agent,created_at,last_seen,expires_at,revoked FROM ml_sessions WHERE revoked=false AND expires_at>now() ORDER BY last_seen DESC LIMIT 200`,sql!`SELECT email,user_type,scope,player_id,status,blocked,last_login,created_at FROM ml_users ORDER BY email`,sql!`SELECT id,type,email,ip,details,created_at FROM ml_events ORDER BY created_at DESC LIMIT 100`]);
      const online=sessions.filter((x:any)=>Date.now()-new Date(x.last_seen).getTime()<=ONLINE_TIMEOUT_MINUTES*60000); return json(res,200,{ok:true,onlineCount:online.length,sessions,users,events});
    }
    const m=p.match(/^\/api\/admin\/session\/(\d+)\/revoke$/); if(req.method==='POST'&&m){ await sql!`UPDATE ml_sessions SET revoked=true WHERE id=${Number(m[1])}`; return json(res,200,{ok:true}); }
    if(req.method==='POST'&&p==='/api/admin/user/block'){ const b=await body(req); const email=String(b.email||'').trim().toLowerCase(); await sql!`UPDATE ml_users SET blocked=true WHERE email=${email}`; await sql!`UPDATE ml_sessions SET revoked=true WHERE email=${email}`; return json(res,200,{ok:true}); }
    if(req.method==='POST'&&p==='/api/admin/user/unblock'){ const b=await body(req); const email=String(b.email||'').trim().toLowerCase(); await sql!`UPDATE ml_users SET blocked=false WHERE email=${email}`; return json(res,200,{ok:true}); }
  }
  return null;
}
const MIME:any={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.woff':'font/woff','.woff2':'font/woff2'};
async function staticFile(req:any,res:any){
  let pathname=decodeURIComponent(new URL(req.url||'/',`http://${req.headers.host||'localhost'}`).pathname); if(pathname==='/') pathname='/index.html'; if(pathname==='/admin') pathname='/admin.html';
  const clean=normalize(pathname).replace(/^([.][.][/\\])+/, '').replace(/^[/\\]+/,''); const file=join(process.cwd(),clean); if(!existsSync(file)) return text(res,404,'Not Found'); try{ const data=await readFile(file); res.writeHead(200,{'Content-Type':MIME[extname(file)]||'application/octet-stream','Cache-Control':pathname.endsWith('.html')?'no-store':'public, max-age=300'}); res.end(data);}catch{ text(res,404,'Not Found'); }
}
const ADMIN_HTML=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Admin — Media Lobby</title><style>body{margin:0;background:#070711;color:#eee;font-family:Arial,sans-serif;padding:20px}main{max-width:1200px;margin:auto}h1{margin:0}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:20px 0}.card,section{background:#111122;border:1px solid #292940;border-radius:14px;padding:16px}.num{font-size:30px;font-weight:800;color:#f0b83f}table{width:100%;border-collapse:collapse;font-size:13px}th,td{padding:10px;border-bottom:1px solid #292940;text-align:left}button{background:#d33;color:white;border:0;border-radius:8px;padding:8px 10px;font-weight:700}.ok{color:#64e69a}.warn{color:#ffd66b}.muted{color:#8e8ea5}.wrap{overflow:auto}</style></head><body><main><div style="display:flex;justify-content:space-between;gap:12px;align-items:center"><div><div class="muted">MEDIA LOBBY</div><h1>Painel de Administração</h1></div><button onclick="sair()">Sair</button></div><div class="grid"><div class="card"><div class="muted">ONLINE</div><div class="num" id="online">0</div></div><div class="card"><div class="muted">SESSÕES ATIVAS</div><div class="num" id="sessions">0</div></div><div class="card"><div class="muted">USUÁRIOS</div><div class="num" id="users">0</div></div><div class="card"><div class="muted">EVENTOS</div><div class="num" id="events">0</div></div></div><section><h2>Sessões</h2><div class="wrap"><table><thead><tr><th>Login</th><th>Tipo</th><th>IP</th><th>Dispositivo</th><th>Última atividade</th><th></th></tr></thead><tbody id="sessionRows"></tbody></table></div></section><section><h2>Usuários</h2><div class="wrap"><table><thead><tr><th>Login</th><th>Tipo</th><th>Scope</th><th>Status</th><th>Último login</th><th></th></tr></thead><tbody id="userRows"></tbody></table></div></section><section><h2>Eventos recentes</h2><div class="wrap"><table><thead><tr><th>Data</th><th>Tipo</th><th>Login</th><th>IP</th><th>Detalhes</th></tr></thead><tbody id="eventRows"></tbody></table></div></section></main><script>async function api(url,opt){const r=await fetch(url,{credentials:'include',...opt});if(r.status===403||r.status===401){location.href='/';throw new Error('Acesso negado')}return r.json()}function fmt(v){return v?new Date(v).toLocaleString('pt-BR'):'—'}async function carregar(){const d=await api('/api/admin/overview');online.textContent=d.onlineCount;sessions.textContent=d.sessions.length;users.textContent=d.users.length;events.textContent=d.events.length;sessionRows.innerHTML=d.sessions.map(s=>`<tr><td>${esc(s.email)}</td><td>${esc(s.user_type)}</td><td>${esc(s.ip)}</td><td>${esc((s.device_hash||'').slice(0,12))}</td><td>${fmt(s.last_seen)}</td><td><button onclick="revogar(${s.id})">Revogar</button></td></tr>`).join('');userRows.innerHTML=d.users.map(u=>`<tr><td>${esc(u.email)}</td><td>${esc(u.user_type)}</td><td>${esc(u.scope)}</td><td>${u.blocked?'<span class=warn>BLOQUEADO</span>':'<span class=ok>'+esc(u.status)+'</span>'}</td><td>${fmt(u.last_login)}</td><td>${u.blocked?`<button onclick="desbloquear('${esc(u.email)}')">Desbloquear</button>`:`<button onclick="bloquear('${esc(u.email)}')">Bloquear</button>`}</td></tr>`).join('');eventRows.innerHTML=d.events.map(e=>`<tr><td>${fmt(e.created_at)}</td><td>${esc(e.type)}</td><td>${esc(e.email||'')}</td><td>${esc(e.ip||'')}</td><td>${esc(e.details||'')}</td></tr>`).join('')}function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}async function revogar(id){await api('/api/admin/session/'+id+'/revoke',{method:'POST'});carregar()}async function bloquear(email){await api('/api/admin/user/block',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})});carregar()}async function desbloquear(email){await api('/api/admin/user/unblock',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})});carregar()}async function sair(){await fetch('/api/logout',{method:'POST',credentials:'include'});location.href='/'}carregar();setInterval(carregar,15000)</script></body></html>`;

const server=createServer(async(req,res)=>{ try{ const result=await api(req,res); if(result!==null) return; await staticFile(req,res); }catch(e){ console.error(e); json(res,500,{ok:false,error:'Erro interno.'}); }});
ensureDb().then(()=>server.listen(PORT,()=>console.log(`[MEDIA LOBBY] Vercel Node server na porta ${PORT}`))).catch(e=>{console.error(e);server.listen(PORT)});
