/*
 * MEDIA LOBBY — DATA API
 * Todas as informações dinâmicas vêm das abas do SheetBest abaixo.
 * Não coloque dados de acesso, equipes ou URLs fixos neste arquivo.
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
  // Regra oficial de validade: qualquer registro marcado como ATIVO = NÃO
  // (ou equivalente) é considerado inativo e não pode aparecer no sistema.
  // Se a coluna ATIVO não existir ou estiver vazia, o registro é tratado como ativo
  // para manter compatibilidade com abas que ainda não possuem essa coluna.
  const truthy = v => ['sim','yes','true','1','ativo','active','on'].includes(low(v));
  const falsy = v => ['não','nao','no','false','0','inativo','inactive','off'].includes(low(v));
  const getAtivo = row => first(row, ['ativo','ATIVO','Ativo','active','ACTIVE','Active','status','STATUS','Status']);
  const active = row => !falsy(getAtivo(row));
  const first = (row, keys) => {
    for (const key of keys) {
      if (row && row[key] !== undefined && row[key] !== null && norm(row[key]) !== '') return row[key];
    }
    return '';
  };

  async function get(url) {
    const response = await fetch(url, { cache: 'no-store', headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`SheetBest ${response.status} em ${url}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error('Resposta inválida da API SheetBest.');
    return data;
  }

  function normalizarUsuario(r) {
    return {
      email: norm(first(r, ['email','EMAIL','e-mail','E-MAIL'])).toLowerCase(),
      senha: norm(first(r, ['senha','SENHA','password','PASSWORD'])),
      scope: norm(first(r, ['scope','SCOPE','escopo','ESCOPO'])) || 'all',
      player_id: norm(first(r, ['player_id','playerId','PLAYER_ID','id_player','ID_PLAYER'])),
      playerId: norm(first(r, ['player_id','playerId','PLAYER_ID','id_player','ID_PLAYER'])),
      user_type: norm(first(r, ['user_type','userType','USER_TYPE','tipo','TIPO'])) || 'standard',
      ativo: norm(getAtivo(r)) || 'SIM'
    };
  }

  function normalizarDominio(r) {
    let dominio = norm(first(r, ['dominio','DOMINIO','domain','DOMAIN']));
    if (dominio && !dominio.startsWith('@')) dominio = '@' + dominio;
    return { dominio, nome: norm(first(r, ['nome','NOME','name','NAME'])) || dominio, ativo: norm(getAtivo(r)) || 'SIM' };
  }

  function normalizarEstilo(r) {
    return {
      nomeEstilo: norm(first(r, ['nome_estilo','nomeEstilo','NOME_ESTILO','nome','NOME'])),
      sigla: norm(first(r, ['sigla','SIGLA','codigo','CODIGO'])).toUpperCase(),
      ativo: norm(getAtivo(r)) || 'SIM'
    };
  }

  function normalizarEquipe(r) {
    return {
      id: norm(first(r, ['id','ID','equipe_id','equipeId','TEAM_ID'])),
      nome: norm(first(r, ['nome','NOME','equipe','EQUIPE','team_name','TEAM_NAME'])),
      logo: norm(first(r, ['logo','LOGO','logo_principal','logoPrincipal','LOGO_PRINCIPAL'])),
      ativo: norm(getAtivo(r)) || 'SIM',
      logos: [],
      brasoes: [],
      membros: []
    };
  }

  function assetUrl(r) { return norm(first(r, ['url','URL','link','LINK','arquivo','ARQUIVO','id','ID','drive','DRIVE'])); }
  function assetName(r) { return norm(first(r, ['nome','NOME','name','NAME','titulo','TITULO','asset','ASSET'])) || 'Asset'; }
  function assetTeam(r) { return norm(first(r, ['equipe_id','equipeId','TEAM_ID','team_id','id_equipe','ID_EQUIPE','equipe','EQUIPE'])); }
  function assetType(r) { return low(first(r, ['tipo','TIPO','categoria','CATEGORIA','categoria_asset','CATEGORIA_ASSET','type','TYPE'])); }

  function normalizarMembro(r) {
    const equipeId = norm(first(r, ['equipe_id','equipeId','TEAM_ID','team_id','id_equipe','ID_EQUIPE','equipe','EQUIPE']));
    const playerId = norm(first(r, ['player_id','playerId','PLAYER_ID','id','ID']));
    return {
      nick: norm(first(r, ['nick','NICK','nickname','NICKNAME','nome','NOME'])) || 'PLAYER',
      playerId,
      funcao: norm(first(r, ['funcao','FUNCAO','função','FUNÇÃO','role','ROLE'])),
      uid: norm(first(r, ['uid','UID','player_uid','PLAYER_UID'])),
      equipeId,
      fotos: {}
    };
  }

  function normalizarFoto(r) {
    const playerId = norm(first(r, ['player_id','playerId','PLAYER_ID','id_player','ID_PLAYER','membro_id','MEMBRO_ID','player','PLAYER']));
    const equipeId = norm(first(r, ['equipe_id','equipeId','TEAM_ID','team_id','id_equipe','ID_EQUIPE','equipe','EQUIPE']));
    const sigla = norm(first(r, ['sigla','SIGLA','estilo_sigla','ESTILO_SIGLA','codigo','CODIGO','estilo','ESTILO'])).toUpperCase();
    const url = assetUrl(r);
    return { playerId, equipeId, sigla, url };
  }

  function extrairFotosDaLinha(r) {
    const base = normalizarFoto(r);
    const saida = [];
    if (base.playerId && base.sigla && base.url) saida.push(base);

    // Também aceita a FOTOS em formato horizontal: uma linha por jogador
    // com colunas FBB, FBC, BCD, BCE, MVP, etc.
    const chavesEstilo = new Set((window.listaEstilos || []).map(x => String(x.sigla || '').toUpperCase()).filter(Boolean));
    Object.keys(r || {}).forEach(chave => {
      const siglaColuna = String(chave || '').trim().toUpperCase();
      if (!chavesEstilo.has(siglaColuna)) return;
      const valor = norm(r[chave]);
      if (!valor) return;
      saida.push({ playerId: base.playerId, equipeId: base.equipeId, sigla: siglaColuna, url: valor });
    });
    return saida;
  }

  async function carregarTudo() {
    const [usuariosRaw, dominiosRaw, estilosRaw, equipesRaw, assetsRaw, membrosRaw, fotosRaw] = await Promise.all([
      get(API.usuarios), get(API.dominios), get(API.estilos), get(API.equipes), get(API.assets), get(API.membros), get(API.fotos)
    ]);

    window.listaUsuarios = usuariosRaw.filter(active).map(normalizarUsuario).filter(x => x.email);
    window.dominiosLogin = dominiosRaw.filter(active).map(normalizarDominio).filter(x => x.dominio);
    window.listaEstilos = estilosRaw.filter(active).map(normalizarEstilo).filter(x => x.sigla);
    window.dadosEquipes = equipesRaw.filter(active).map(normalizarEquipe).filter(x => x.id && x.nome);

    const equipeMap = new Map(window.dadosEquipes.map(e => [low(e.id), e]));
    const equipeNomeMap = new Map(window.dadosEquipes.map(e => [low(e.nome), e]));
    const resolveTeam = value => equipeMap.get(low(value)) || equipeNomeMap.get(low(value));

    // Assets: aceita nomes de tipo como LOGO/BRASAO e variações de acentuação.
    assetsRaw.filter(active).forEach(r => {
      const team = resolveTeam(assetTeam(r));
      if (!team) return;
      const item = { nome: assetName(r), id: assetUrl(r) };
      const type = assetType(r);
      if (type.includes('bras') || type.includes('crest')) team.brasoes.push(item);
      else if (type.includes('logo') || type.includes('emblema') || type.includes('identity')) team.logos.push(item);
    });

    // Membros vêm exclusivamente da aba MEMBROS.
    const memberMap = new Map();
    membrosRaw.filter(active).forEach(r => {
      const m = normalizarMembro(r);
      const team = resolveTeam(m.equipeId);
      if (!team || !m.playerId) return;
      if (!team.membros) team.membros = [];
      team.membros.push(m);
      memberMap.set(low(m.playerId), m);
      if (m.uid) memberMap.set(low(m.uid), m);
    });

    // Fotos vêm exclusivamente da aba FOTOS e são ligadas ao membro pela identificação disponível.
    // Suporta tanto uma linha por foto quanto uma linha por jogador com uma coluna para cada sigla.
    fotosRaw.filter(active).forEach(r => {
      extrairFotosDaLinha(r).forEach(f => {
        if (!f.url || !f.sigla) return;
        const m = memberMap.get(low(f.playerId));
        if (m) m.fotos[f.sigla] = f.url;
      });
    });

    // Compatibilidade com planilhas que tenham a equipe apenas na linha de FOTOS.
    fotosRaw.filter(active).forEach(r => {
      extrairFotosDaLinha(r).forEach(f => {
        if (!f.url || !f.sigla) return;
        const team = resolveTeam(f.equipeId);
        if (!team) return;
        const candidate = (team.membros || []).find(m => low(m.playerId) === low(f.playerId) || low(m.uid) === low(f.playerId));
        if (candidate) candidate.fotos[f.sigla] = f.url;
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
