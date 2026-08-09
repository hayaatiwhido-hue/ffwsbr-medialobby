// LISTA DE USUÁRIOS E PERMISSÕES DE ACESSO
const listaUsuarios = [
    { email: "admin@medialobby.com", senha: "suasenhaadmin", scope: "all" },
    { email: "staff@medialobby.com", senha: "suasenhastaff", scope: "all" },
    { email: "organizador@medialobby.com", senha: "suasenhaorg", scope: "all" },
    { email: "medialobby@medialobby.com", senha: "suasenhaglobal", scope: "all" },

    { email: "afrogames@equipe.com", senha: "123", scope: "afrogames" },
    { email: "alpha7@equipe.com", senha: "123", scope: "alpha-7" },
    { email: "cptvox@equipe.com", senha: "123", scope: "cpt-vox" },
    { email: "civis@equipe.com", senha: "123", scope: "civis" },
    { email: "fluxow7m@equipe.com", senha: "123", scope: "fluxo-w7m" },
    { email: "influencerage@equipe.com", senha: "123", scope: "influence-rage" },
    { email: "intz@equipe.com", senha: "123", scope: "intz-esports" },
    { email: "loops@equipe.com", senha: "123", scope: "loops-esports" },
    { email: "los@equipe.com", senha: "123", scope: "los" },
    { email: "loud@equipe.com", senha: "123", scope: "loud-snickers" },
    { email: "risegaming@equipe.com", senha: "123", scope: "rise-gaming" },
    { email: "rushgaming@equipe.com", senha: "123", scope: "rush-gaming" },
    { email: "sxtet@equipe.com", senha: "123", scope: "sx-tet" },
    { email: "teamsolid@equipe.com", senha: "123", scope: "team-solid" }
];

// LISTA DE PASTAS E SUAS RESPECTIVAS SIGLAS
const listaEstilos = [
    { nomeEstilo: "FOTO DE IDENTIFICAÇÃO", sigla: "FCI" },
    { nomeEstilo: "BRAÇO SOLTO - FRENTE", sigla: "FBB" },
    { nomeEstilo: "BRAÇO SOLTO - DIREITA", sigla: "BPD" },
    { nomeEstilo: "BRAÇO SOLTO - ESQUERDA", sigla: "BPE" },
    { nomeEstilo: "BRAÇO CRUZADO - FRENTE", sigla: "FBC" },
    { nomeEstilo: "BRAÇO CRUZADO - DIREITA", sigla: "BCD" },
    { nomeEstilo: "BRAÇO CRUZADO - ESQUERDA", sigla: "BCE" },
    { nomeEstilo: "POSE DE BOOYAH", sigla: "PDB" },
    { nomeEstilo: "POSE DE MVP", sigla: "MVP" },
    { nomeEstilo: "FOTO DIVERTIDA 1", sigla: "FUN1" },
    { nomeEstilo: "FOTO DIVERTIDA 2", sigla: "FUN2" },
    { nomeEstilo: "FOTO GIF 1", sigla: "FPG1" },
    { nomeEstilo: "FOTO GIF 2", sigla: "FPG2" },
    { nomeEstilo: "FOTO GIF 3", sigla: "FPG3" },
    { nomeEstilo: "CLOSE DE PERFIL - DIREITO", sigla: "CPD" },
    { nomeEstilo: "CLOSE DE PERFIL - ESQUERDO", sigla: "CPE" },
    { nomeEstilo: "CLOSE DO ROSTO", sigla: "CDR" }
];

// LISTA DAS EQUIPES COM JOGADORES E COACHS ATUALIZADOS
const dadosEquipes = [
    {
        id: "afrogames",
        nome: "AFROGAMES",
        logo: "logos/afrogames.png",
        jogadores: [
            { uid: "10000068", nick: "PETER" },
            { uid: "10000071", nick: "dnsetzz" },
            { uid: "10000072", nick: "Nielffx" },
            { uid: "10000075", nick: "Braboxx7" },
            { uid: "10000076", nick: "Sant10$" },
            { uid: "10000168", nick: "gbzinn7$" },
            { nick: "Azay", tipo: "coach" }
        ]
    },
    {
        id: "alpha-7",
        nome: "ALPHA 7",
        logo: "logos/alpha7.png",
        jogadores: [
            { uid: "10000016", nick: "Lc777" },
            { uid: "10000037", nick: "JNmvp7" },
            { uid: "10000038", nick: "Brisa7" },
            { uid: "10000114", nick: "MitoMvp" },
            { uid: "10000118", nick: "Sam7" },
            { nick: "Queiroz", tipo: "coach" }
        ]
    },
    {
        id: "cpt-vox",
        nome: "CPT VOX",
        logo: "imagens/logos/cptvox.png",
        jogadores: [
            { uid: "10000115", nick: "Ângelo7" },
            { uid: "10000179", nick: "Gbtrem22" },
            { uid: "10000199", nick: "Bad9" },
            { uid: "10000232", nick: "Trevor9" },
            { nick: "Bryan", tipo: "coach" }
        ]
    },
    {
        id: "civis",
        nome: "CIVIS",
        logo: "imagens/logos/civis.png",
        jogadores: [
            { uid: "10000084", nick: "Henry10" },
            { uid: "10000100", nick: "Soares" },
            { uid: "10000107", nick: "Neywp" },
            { uid: "10000195", nick: "Destroi7" },
            { uid: "10000196", nick: "Hugo7" },
            { nick: "KYM", tipo: "coach" }
        ]
    },
    {
        id: "fluxo-w7m",
        nome: "FLUXO W7M",
        logo: "imagens/logos/fluxow7m.png",
        jogadores: [
            { uid: "10000012", nick: "Bops" },
            { uid: "10000048", nick: "MT7" },
            { uid: "10000059", nick: "BuTziN" },
            { uid: "10000082", nick: "Giuh" },
            { uid: "10000085", nick: "Proxx7" }
        ]
    },
    {
        id: "influence-rage",
        nome: "INFLUENCE RAGE",
        logo: "imagens/logos/influencerage.png",
        jogadores: [
            { uid: "10000065", nick: "InepoIGN", arquivo: "InepoIGN" },
            { uid: "10000087", nick: "IGOR7" },
            { uid: "10000096", nick: "LYON" },
            { uid: "10000202", nick: "lippe!" },
            { uid: "10000230", nick: "saskito!" },
            { nick: "WF9", tipo: "coach" }
        ]
    },
    {
        id: "intz-esports",
        nome: "INTZ ESPORTS",
        logo: "imagens/logos/intz.png",
        jogadores: [
            { uid: "10000029", nick: "honeyzL" },
            { uid: "10000086", nick: "PEREIRA" },
            { uid: "10000112", nick: "Gus" },
            { uid: "10000121", nick: "kauãxp" },
            { uid: "10000180", nick: "joão7" },
            { nick: "CAPGUI", tipo: "coach" }
        ]
    },
    {
        id: "loops-esports",
        nome: "LOOPS ESPORTS",
        logo: "imagens/logos/loops.png",
        jogadores: [
            { uid: "10000070", nick: "Stark10" },
            { uid: "10000073", nick: "Draxx7" },
            { uid: "10000097", nick: "Pão7" },
            { uid: "10000105", nick: "Vitin9" },
            { uid: "10000184", nick: "Luan7" },
            { nick: "Ninja", tipo: "coach" }
        ]
    },
    {
        id: "los",
        nome: "LOS",
        logo: "imagens/logos/los.png",
        jogadores: [
            { uid: "10000033", nick: "General!" },
            { uid: "10000040", nick: "Yago" },
            { uid: "10000055", nick: "Raone7" },
            { uid: "10000120", nick: "mtsexy." },
            { uid: "10000185", nick: "Rigby245" },
            { nick: "JAYA", tipo: "coach" },
            { nick: "Lipão", tipo: "coach" }
        ]
    },
    {
        id: "loud-snickers",
        nome: "LOUD SNICKERS",
        logo: "imagens/logos/loudsnickers.png",
        jogadores: [
            { uid: "10000043", nick: "GUAXA" },
            { uid: "10000044", nick: "TRAP" },
            { uid: "10000046", nick: "BZP" },
            { uid: "10000116", nick: "HAK" },
            { uid: "10000119", nick: "NICKZ" },
            { nick: "JOKER", tipo: "coach" }
        ]
    },
    {
        id: "rise-gaming",
        nome: "RISE GAMING",
        logo: "imagens/logos/risegaming.png",
        jogadores: [
            { uid: "10000036", nick: "Erick11" },
            { uid: "10000039", nick: "Nandox" },
            { uid: "10000106", nick: "KaKaZk" },
            { uid: "10000194", nick: "Mala" },
            { nick: "Abreu", tipo: "coach" }
        ]
    },
    {
        id: "rush-gaming",
        nome: "RUSH GAMING",
        logo: "imagens/logos/rushgaming.png",
        jogadores: [
            { uid: "10000014", nick: "Prozin" },
            { uid: "10000052", nick: "Guimerlq" },
            { uid: "10000053", nick: "ERICKING" },
            { uid: "10000061", nick: "MitinX" },
            { uid: "10000064", nick: "BLACK02" },
            { nick: "RIBAS", tipo: "coach" }
        ]
    },
    {
        id: "sx-tet",
        nome: "SX TET",
        logo: "imagens/logos/sxtet.png",
        jogadores: [
            { uid: "10000031", nick: "NikeboyTT" },
            { uid: "10000089", nick: "IsackSRTT" },
            { uid: "10000099", nick: "Furiazz7TT" },
            { uid: "10000103", nick: "Yato7TT" },
            { uid: "10000104", nick: "RedxzzzTT" }
        ]
    },
    {
        id: "team-solid",
        nome: "TEAM SOLID",
        logo: "imagens/logos/teamsolid.png",
        jogadores: [
            { uid: "10000067", nick: "vitinxp" },
            { uid: "10000069", nick: "BYTE333" },
            { uid: "10000074", nick: "Pitbull" },
            { uid: "10000090", nick: "Motovea" }
        ]
    }
];
