// LISTA DE USUÁRIOS E PERMISSÕES DE ACESSO
const listaUsuarios = [
    { email: "admin@medialobby.com", senha: "Stw1402s@", scope: "all" },
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

// LISTA DAS EQUIPES COMPLETA COM ATÉ 15 LOGOS E 15 BRASÕES ENUMERADOS
const dadosEquipes = [
    {
        id: "afrogames",
        nome: "AFROGAMES",
        logo: "https://drive.google.com/file/d/1dqj87PlfHcSa7xR8U6e6sG__hLEdI3gJ/view?usp=drivesdk",
        logos: [
            { nome: "LOGO COLORIDA", id: "https://drive.google.com/file/d/1OBuZn4qgOHRmUf9qYMRNd4f8ic2HZsjT/view?usp=drivesdk" }, { nome: "LOGO BRANCA", id: "https://drive.google.com/file/d/1dqj87PlfHcSa7xR8U6e6sG__hLEdI3gJ/view?usp=drivesdk" }, { nome: "LOGO PRETA", id: "https://drive.google.com/file/d/1e_vnq_ifGtqsWcalYoO7DcA86utlL2Ir/view?usp=drivesdk" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "PETER", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "dnsetzz", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Nielffx", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Braboxx7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Sant10$", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "gbzinn7$", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Azay (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "alpha-7",
        nome: "ALPHA 7",
        logo: "https://drive.google.com/file/d/1JywXD34FbZHPhQgEykwEZMorzUA5aUCH/view?usp=drivesdk",
        logos: [
            { nome: "LOGO BRANCA E LARANJA", id: "https://drive.google.com/file/d/1JywXD34FbZHPhQgEykwEZMorzUA5aUCH/view?usp=drivesdk" }, { nome: "LOGO PRETA E LARANJA", id: "https://drive.google.com/file/d/1JG8rWyLfnL6Yie2fh2n-xkW3fpRXfKqt/view?usp=drivesdk" }, { nome: "LOGO BRANCA", id: "https://drive.google.com/file/d/14XDIhJRj2fwvdxCFIfgpVtNC-m8HABIS/view?usp=drivesdk" },
            { nome: "LOGO PRETA", id: "https://drive.google.com/file/d/1Ruuk9T2hs2f7giT31QXil31ZvFDEUF-C/view?usp=drivesdk" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "Lc777", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "JNmvp7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Brisa7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "MitoMvp", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Sam7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Queiroz (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "cpt-vox",
        nome: "CPT VOX E-SPORTS",
        logo: "https://drive.google.com/file/d/1eSD2F5QefnZiv4miClORwnuWS833B6fl/view?usp=drivesdk",
        logos: [
            { nome: "LOGO PRINCIPAL", id: "https://drive.google.com/file/d/1eSD2F5QefnZiv4miClORwnuWS833B6fl/view?usp=drivesdk" }, { nome: "Logo 2", id: "" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "Ângelo7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Gbtrem22", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Bad9", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Trevor9", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Bryan (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "civis",
        nome: "CIVIS",
        logo: "https://drive.google.com/file/d/1fKqlQHQAb3bpKFUM7UsMy1AlamYWbMRS/view?usp=drivesdk",
        logos: [
            { nome: "LOGO COLORIDA", id: "https://drive.google.com/file/d/1fKqlQHQAb3bpKFUM7UsMy1AlamYWbMRS/view?usp=drivesdk" }, { nome: "LOGO PRETA E BRANCA", id: "https://drive.google.com/file/d/1soPkQNenLW-X2F7lk4POv1v5EBYxTGN-/view?usp=drivesdk" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "Henry10", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Soares", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Neywp", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Destroi7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Hugo7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "KYM (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "fluxo-w7m",
        nome: "FLUXO W7M",
        logo: "https://drive.google.com/file/d/1ES8mnVJdFZ_9xKdLA4RwjKcGljTxLxlw/view?usp=drivesdk",
        logos: [
            { nome: "LOGO COLORIDA", id: "https://drive.google.com/file/d/1xF5wIdnrl8gcrCcvMLyQOXaT4-xVhH0w/view?usp=drivesdk" }, { nome: "LOGO BRANCA", id: "https://drive.google.com/file/d/1ES8mnVJdFZ_9xKdLA4RwjKcGljTxLxlw/view?usp=drivesdk" }, { nome: "LOGO PRETA", id: "https://drive.google.com/file/d/1Vv3f5qgB2vIjJcGFNpq0GrDdDkTi35RM/view?usp=drivesdk" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "Bops", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "MT7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "BuTziN", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Giuh", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Proxx7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "influence-rage",
        nome: "INFLUENCE",
        logo: "https://drive.google.com/file/d/1yxp3Gv0uwo89bR76GKNVrJD0bKWzfWby/view?usp=drivesdk",
        logos: [
            { nome: "LOGO PRINCIPAL", id: "https://drive.google.com/file/d/1yxp3Gv0uwo89bR76GKNVrJD0bKWzfWby/view?usp=drivesdk" }, { nome: "Logo 2", id: "" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "nepoIGN", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "IGOR7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "LYON", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "lippe!", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "saskito!", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "WF9 (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "intz-esports",
        nome: "INTZ",
        logo: "https://drive.google.com/file/d/10ZqJIa5HVQ4uCWFmOjpbbLJ1fQEnTLm8/view?usp=drivesdk",
        logos: [
            { nome: "LOGO 1", id: "https://drive.google.com/file/d/10ZqJIa5HVQ4uCWFmOjpbbLJ1fQEnTLm8/view?usp=drivesdk" }, { nome: "LOGO 2", id: "https://drive.google.com/file/d/1mfk9zPgdl-PaEucqr4wF5SBoqkWL-Ru6/view?usp=drivesdk" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "honeyzL", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "PEREIRA", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Gus", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "kauãxp", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "joão7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "CAPGUI (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "loops-esports",
        nome: "LOOPS ESPORTS",
        logo: "https://drive.google.com/file/d/1XF7hjPihKUW-V6P6NryEN0W5q5PIsT3n/view?usp=drivesdk",
        logos: [
            { nome: "LOGO PRINCIPAL", id: "https://drive.google.com/file/d/1XF7hjPihKUW-V6P6NryEN0W5q5PIsT3n/view?usp=drivesdk" }, { nome: "LOGO CONTORNO BRANCO", id: "https://drive.google.com/file/d/11uIQZvSHqoaUsptfAwFySe1AyNSMbsAB/view?usp=drivesdk" }, { nome: "LOGO CONTORNO PRETO", id: "https://drive.google.com/file/d/1p_3di345RwXt8oO9W0-g484V25myyg-L/view?usp=drivesdk" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "Stark10", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Draxx7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Pão7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Vitin9", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Luan7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Ninja (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "los",
        nome: "LOS",
        logo: "https://drive.google.com/file/d/1El1XxICeartrr3zJtKRpv8nGOVCICOBc/view?usp=drivesdk",
        logos: [
            { nome: "LOGO LARANJA", id: "https://drive.google.com/file/d/1fCJ8TEAle_wBEQj1CVSRMCRLCo95D42q/view?usp=drivesdk" }, { nome: "LOGO BRANCA", id: "https://drive.google.com/file/d/1El1XxICeartrr3zJtKRpv8nGOVCICOBc/view?usp=drivesdk" }, { nome: "LOGO PRETA", id: "https://drive.google.com/file/d/1SXI4ziwyjZF-wwjMBcK8ES5N53GMJOvs/view?usp=drivesdk" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "General!", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Yago", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Raone7", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "mtsexy.", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Rigby245", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "JAYA (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Lipão (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "loud-snickers",
        nome: "LOUD SNICKERS",
        logo: "https://drive.google.com/file/d/12-OgkD0hxZaBMMWwFuItzPz6A6vg_gLg/view?usp=drivesdk",
        logos: [
            { nome: "Logo 1", id: "" }, { nome: "Logo 2", id: "" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "GUAXA", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "TRAP", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "BZP", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "HAK", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "NICKZ", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "JOKER (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "rise-gaming",
        nome: "RISE GAMING",
        logo: "https://drive.google.com/file/d/1HfE2PbCUDvffobIGwIsxKX7YaSMGznyI/view?usp=drivesdk",
        logos: [
            { nome: "Logo 1", id: "" }, { nome: "Logo 2", id: "" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "Erick11", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Nandox", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "KaKaZk", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Mala", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Abreu (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "rush-gaming",
        nome: "RUSH GAMING",
        logo: "https://drive.google.com/file/d/1gGYqfRuOHbJY2UpnI51gHnzWoWMU0diw/view?usp=drivesdk",
        logos: [
            { nome: "Logo 1", id: "" }, { nome: "Logo 2", id: "" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "Prozin", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Guimerlq", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "ERICKING", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "MitinX", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "BLACK02", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "RIBAS (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "sx-tet",
        nome: "SX TET",
        logo: "https://drive.google.com/file/d/15KAn4zGURlF45V1NYwsjkQ0eAe-7utT7/view?usp=drivesdk",
        logos: [
            { nome: "Logo 1", id: "" }, { nome: "Logo 2", id: "" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "NikeboyTT", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "IsackSRTT", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Furiazz7TT", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Yato7TT", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "RedxzzzTT", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    },
    {
        id: "team-solid",
        nome: "TEAM SOLID",
        logo: "https://drive.google.com/file/d/1OqzqKwiZSAzJtrPgoQx2jRGHIj5VGmrV/view?usp=drivesdk",
        logos: [
            { nome: "Logo 1", id: "" }, { nome: "Logo 2", id: "" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "" }, { nome: "Brasão 2", id: "" }, { nome: "Brasão 3", id: "" },
            { nome: "Brasão 4", id: "" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "vitinxp", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "BYTE333", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Pitbull", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "Motovea", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
        ]
    }
];

// ================================================================
// PASTAS DE FOTOS NO GOOGLE DRIVE
// ---------------------------------------------------------------
// SOMENTE o sistema de fotos usa estes campos.
// As configurações de LOGOS e BRASÕES acima permanecem exatamente
// como já estavam neste arquivo.
// Cole o link da pasta do Drive correspondente a cada estilo.
// ================================================================
const pastasFotosDrive = {
    FCI: "",
    FBB: "",
    BPD: "",
    BPE: "",
    FBC: "",
    BCD: "",
    BCE: "",
    PDB: "",
    MVP: "",
    FUN1: "",
    FUN2: "",
    FPG1: "",
    FPG2: "",
    FPG3: "",
    CPD: "",
    CPE: "",
    CDR: ""
};

function extrairIdDrive(valor) {
    if (!valor) return "";
    const s = String(valor).trim();
    if (/^[A-Za-z0-9_-]{10,}$/.test(s)) return s;

    let m = s.match(/\/folders\/([A-Za-z0-9_-]+)/);
    if (m) return m[1];

    m = s.match(/\/d\/([A-Za-z0-9_-]+)/);
    if (m) return m[1];

    m = s.match(/[?&]id=([A-Za-z0-9_-]+)/);
    return m ? m[1] : "";
}

function urlImagemDrive(idOuUrl) {
    const id = extrairIdDrive(idOuUrl);
    return id ? `https://drive.google.com/uc?export=view&id=${encodeURIComponent(id)}` : (idOuUrl || "");
}

function urlDownloadDrive(idOuUrl) {
    const id = extrairIdDrive(idOuUrl);
    return id ? `https://drive.google.com/uc?export=download&id=${encodeURIComponent(id)}` : (idOuUrl || "");
}


// CONFIGURAÇÃO DO SISTEMA DE FOTOS NO GOOGLE DRIVE
// Somente o sistema de FOTOS usa estes campos.
// Logos e brasões existentes acima permanecem inalterados.
const GOOGLE_DRIVE_FOTOS = {
    API_KEY: "",
    pastas: (typeof pastasFotosDrive !== "undefined" ? pastasFotosDrive : {})
};

function extrairIdDrive(valor) {
    if (!valor) return "";
    const s = String(valor).trim();
    if (/^[A-Za-z0-9_-]{10,}$/.test(s)) return s;
    let m = s.match(/\/folders\/([A-Za-z0-9_-]+)/);
    if (m) return m[1];
    m = s.match(/\/d\/([A-Za-z0-9_-]+)/);
    if (m) return m[1];
    m = s.match(/[?&]id=([A-Za-z0-9_-]+)/);
    return m ? m[1] : "";
}
