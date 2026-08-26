/*
 * MEDIA LOBBY — DATA API
 * Fonte única: abas do SheetBest.
 */
(() => {
  const API = {
    usuarios: 'https://api.sheetbest.com/sheets/53fd3157-4eac-49eb-b064-7be9f8e795af/tabs/USUARIOS',
    dominios: 'https://api.sheetbest.com/sheets/53fd3157-4eac-49eb-b064-7be9f8e795af/tabs/DOMINIOS',
    estilos: 'https://api.sheetbest.com/sheets/53fd3157-4eac-49eb-b064-7be9f8e795af/tabs/ESTILOS',
    equipes: 'https://api.sheetbest.com/sheets/53fd3157-4eac-49eb-b064-7be9f8e795af/tabs/EQUIPES',
    assets: 'https://api.sheetbest.com/sheets/53fd3157-4eac-49eb-b064-7be9f8e795af/tabs/ASSETS',
    membros: 'https://api.sheetbest.com/sheets/53fd3157-4eac-49eb-b064-7be9f8e795af/tabs/MEMBROS',
    fotos: 'https://api.sheetbest.com/sheets/53fd3157-4eac-49eb-b064-7be9f8e795af/tabs/FOTOS'
  };

  const norm = v => String(v ?? '').trim();
  const low = v => norm(v).toLowerCase();
  const strip = v => low(v).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const first = (row, keys) => {
    for (const key of keys) {
      if (row && row[key] !== undefined && row[key] !== null && norm(row[key]) !== '') return row[key];
    }
    return '';
  };
  const getAtivo = row => first(row, ['ativo','ATIVO','Ativo','active','ACTIVE','status','STATUS','Status']);
  const isInactive = v => ['nao','não','no','false','0','inativo','inactive','off','desativado','bloqueado','revogado','cancelado','negado','denied','disabled'].includes(strip(v));
  const active = row => !isInactive(getAtivo(row));

  function classificarStatusUsuario(valor) {
    const s = strip(valor).replace(/[^a-z0-9]+/g, ' ').trim();
    if (!s) return 'autorizado';
    const manut = ['manutencao','em manutencao','maintenance','temporariamente indisponivel','pausado','em pausa','suspenso temporariamente'];
    const des = ['nao','nao autorizado','desativado','inativo','bloqueado','revogado','cancelado','negado','denied','disabled','sem acesso','acesso negado','encerrado','expirado','proibido'];
    const ok = ['sim','autorizado','login autorizado','ativo','liberado','aprovado','permitido','enabled','active','ok','acesso autorizado'];
    if (manut.some(x => s === x || s.includes(x)) || s.includes('manutenc')) return 'manutencao';
    if (des.some(x => s === x || s.includes(x))) return 'desativado';
    if (ok.some(x => s === x || s.includes(x))) return 'autorizado';
    return 'autorizado';
  }

  async function get(url) {
    const response = await fetch(url, { cache: 'no-store', headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`SheetBest ${response.status}`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  }

  function normalizarUsuario(r) {
    const ativo = norm(getAtivo(r)) || 'SIM';
    return {
      email: norm(first(r, ['email','EMAIL','e-mail','E-MAIL'])).toLowerCase(),
      senha: norm(first(r, ['senha','SENHA','password','PASSWORD'])),
      scope: norm(first(r, ['scope','SCOPE','escopo','ESCOPO'])) || 'all',
      player_id: norm(first(r, ['player_id','playerId','PLAYER_ID','id_player','ID_PLAYER'])),
      playerId: norm(first(r, ['player_id','playerId','PLAYER_ID','id_player','ID_PLAYER'])),
      user_type: norm(first(r, ['user_type','userType','USER_TYPE','tipo','TIPO'])) || 'standard',
      ativo,
      statusTipo: classificarStatusUsuario(ativo)
    };
  }

  function normalizarDominio(r) {
    let dominio = norm(first(r, ['dominio','DOMINIO','domain','DOMAIN']));
    if (dominio && !dominio.startsWith('@')) dominio = '@' + dominio;
    return { dominio, nome: norm(first(r, ['nome','NOME','name','NAME'])) || dominio, ativo: norm(getAtivo(r)) || 'SIM' };
  }
  function normalizarEstilo(r) {
    return { nomeEstilo: norm(first(r,['nome_estilo','nomeEstilo','NOME_ESTILO','nome','NOME'])), sigla: norm(first(r,['sigla','SIGLA','codigo','CODIGO'])).toUpperCase(), ativo: norm(getAtivo(r)) || 'SIM' };
  }
  function normalizarEquipe(r) {
    return {
      id: norm(first(r,['id','ID','equipe_id','equipeId','TEAM_ID'])),
      nome: norm(first(r,['nome','NOME','equipe','EQUIPE','team_name','TEAM_NAME'])),
      logo: norm(first(r,['logo','LOGO','logo_principal','logoPrincipal','LOGO_PRINCIPAL'])),
      ativo: norm(getAtivo(r)) || 'SIM',
      logos: [], brasoes: [], membros: []
    };
  }
  function assetUrl(r) { return norm(first(r,['url','URL','link','LINK','arquivo','ARQUIVO','id','ID','drive','DRIVE'])); }
  function assetName(r) { return norm(first(r,['nome','NOME','name','NAME','titulo','TITULO','asset','ASSET'])) || 'Asset'; }
  function assetTeam(r) { return norm(first(r,['equipe_id','equipeId','TEAM_ID','team_id','id_equipe','ID_EQUIPE','equipe','EQUIPE'])); }
  function assetType(r) { return strip(first(r,['tipo','TIPO','categoria','CATEGORIA','categoria_asset','CATEGORIA_ASSET','type','TYPE'])); }
  function normalizarMembro(r) {
    const equipeId = norm(first(r,['equipe_id','equipeId','TEAM_ID','team_id','id_equipe','ID_EQUIPE','equipe','EQUIPE']));
    const playerId = norm(first(r,['player_id','playerId','PLAYER_ID','id','ID']));
    return {
      nick: norm(first(r,['nick','NICK','nickname','NICKNAME','nome','NOME'])) || 'PLAYER',
      playerId, funcao: norm(first(r,['funcao','FUNCAO','função','FUNÇÃO','role','ROLE'])),
      uid: norm(first(r,['uid','UID','player_uid','PLAYER_UID'])), equipeId, fotos: {}
    };
  }
  function normalizarFoto(r) {
    return {
      playerId: norm(first(r,['player_id','playerId','PLAYER_ID','id_player','ID_PLAYER','membro_id','MEMBRO_ID','player','PLAYER'])),
      equipeId: norm(first(r,['equipe_id','equipeId','TEAM_ID','team_id','id_equipe','ID_EQUIPE','equipe','EQUIPE'])),
      sigla: norm(first(r,['sigla','SIGLA','estilo_sigla','ESTILO_SIGLA','codigo','CODIGO','estilo','ESTILO'])).toUpperCase(),
      url: assetUrl(r)
    };
  }

  async function carregarTudo() {
    const [usuariosRaw, dominiosRaw, estilosRaw, equipesRaw, assetsRaw, membrosRaw, fotosRaw] = await Promise.all([
      get(API.usuarios), get(API.dominios), get(API.estilos), get(API.equipes), get(API.assets), get(API.membros), get(API.fotos)
    ]);

    // USUARIOS: não filtramos status aqui; precisamos diferenciar manutenção de desativado.
    window.listaUsuarios = usuariosRaw.map(normalizarUsuario).filter(x => x.email);
    window.dominiosLogin = dominiosRaw.filter(active).map(normalizarDominio).filter(x => x.dominio);
    window.listaEstilos = estilosRaw.filter(active).map(normalizarEstilo).filter(x => x.sigla);
    window.dadosEquipes = equipesRaw.filter(active).map(normalizarEquipe).filter(x => x.id && x.nome);

    const equipeMap = new Map(window.dadosEquipes.map(e => [strip(e.id), e]));
    const equipeNomeMap = new Map(window.dadosEquipes.map(e => [strip(e.nome), e]));
    const resolveTeam = value => equipeMap.get(strip(value)) || equipeNomeMap.get(strip(value));

    assetsRaw.filter(active).forEach(r => {
      const team = resolveTeam(assetTeam(r));
      if (!team) return;
      const item = { nome: assetName(r), id: assetUrl(r) };
      const type = assetType(r);
      if (type.includes('bras') || type.includes('crest')) team.brasoes.push(item);
      else if (type.includes('logo') || type.includes('emblema') || type.includes('identity')) team.logos.push(item);
    });

    const memberMap = new Map();
    membrosRaw.filter(active).forEach(r => {
      const m = normalizarMembro(r);
      const team = resolveTeam(m.equipeId);
      if (!team || !m.playerId) return;
      team.membros.push(m);
      memberMap.set(strip(m.playerId), m);
      if (m.uid) memberMap.set(strip(m.uid), m);
    });

    const styleKeys = new Set(window.listaEstilos.map(x => x.sigla));
    fotosRaw.filter(active).forEach(r => {
      const base = normalizarFoto(r);
      const rows = [];
      if (base.playerId && base.sigla && base.url) rows.push(base);
      Object.keys(r || {}).forEach(k => {
        const sigla = norm(k).toUpperCase();
        if (styleKeys.has(sigla) && norm(r[k])) rows.push({ playerId: base.playerId, equipeId: base.equipeId, sigla, url: norm(r[k]) });
      });
      rows.forEach(f => {
        const m = memberMap.get(strip(f.playerId));
        if (m && f.url) m.fotos[f.sigla] = f.url;
      });
    });

    window.MEDIA_LOBBY_API = API;
    window.MEDIA_LOBBY_DADOS_PRONTOS = true;
    window.dispatchEvent(new CustomEvent('media-lobby-dados-prontos'));
    return true;
  }

  window.MEDIA_LOBBY_API = API;
  window.MEDIA_LOBBY_READY = carregarTudo().catch(error => {
    console.error('[MEDIA LOBBY] Falha ao carregar dados:', error);
    window.MEDIA_LOBBY_ERRO = error;
    window.dispatchEvent(new CustomEvent('media-lobby-dados-erro', { detail: error }));
    throw error;
  });
})();
