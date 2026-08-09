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
    { nomeEstilo: "BRAÇO SOLTO - FRENTE", sigla: "FBB" },
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
            { nome: "BRASÃO 1", id: "https://drive.google.com/file/d/1ix8N-GP8EzqKW04sza9a8YaEvejFdMme/view?usp=drivesdk" }, { nome: "BRASÃO 2", id: "https://drive.google.com/file/d/1n81GDXhVt5VfZ3rlJwjjHQOEhl6QHSYC/view?usp=drivesdk" }, { nome: "BRASÃO 3", id: "https://drive.google.com/file/d/14V3k7s7BZJsmWXPZyKF1lwJq6VNXrWU5/view?usp=drivesdk" },
            { nome: "BRASÃO 4", id: "https://drive.google.com/file/d/1BikeoW_CNIg0XxEViwmFVg_56S2j7-DE/view?usp=drivesdk" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "AFG Peter", fotos: { FCI: "", FBB: "https://drive.google.com/file/d/1LjG3gu39yPH6o2DObxRFrcYtrGRr0sml/view?usp=drivesdk", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG Dnsetzz", fotos: { FCI: "", FBB: "https://drive.google.com/file/d/12GwLBaAvrmU_ehCCWaUNQCmrrbiHprUI/view?usp=drivesdk", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG Nielffx", fotos: { FCI: "", FBB: "https://drive.google.com/file/d/1ahRsMj_hMlfC8cxrfk5p2TIk5q2lF_U-/view?usp=drivesdk", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG BRABOXX7", fotos: { FCI: "", FBB: "https://drive.google.com/file/d/1467KjMfHRD0kxNdrevrhQBKo4K9hXKR7/view?usp=drivesdk", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG Sant10$", fotos: { FCI: "", FBB: "https://drive.google.com/file/d/1ZazNlSxps7B1VqbaRUS-bsBK5_VHKuTi/view?usp=drivesdk", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG gbzinn7$", fotos: { FCI: "", FBB: "https://drive.google.com/file/d/1njZwrwR0P47uvl6_UjyTEe43EmmHJK9m/view?usp=drivesdk", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG Azay (Coach)", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
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
            { nome: "BRASÃO 1", id: "https://drive.google.com/file/d/1nEAYXgNaQ3KLG3xB2Tr0R1vnV3oAyZmR/view?usp=drivesdk" }, { nome: "BRASÃO 2", id: "https://drive.google.com/file/d/1TeqH5qV2H8Tl2K1DcdaH_6IGt5OQ7nNR/view?usp=drivesdk" }, { nome: "BRASÃO 3", id: "https://drive.google.com/file/d/1PwqgmeJNi3YC8Hhwq5Il8fwNSu2VJTUW/view?usp=drivesdk" },
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
            { nome: "BRASÃO 1", id: "https://drive.google.com/file/d/1YxspL6g2ghgRF77G1QKCWhDDX54y0vWA/view?usp=drivesdk" }, { nome: "BRASÃO 2", id: "https://drive.google.com/file/d/1QHwZktHTPbmHaAov2btYFJaSZOUJhd1l/view?usp=drivesdk" }, { nome: "BRASÃO 3", id: "https://drive.google.com/file/d/1znPFs5I9I26GrUWC5t10sH5ZVDKf-Of5/view?usp=drivesdk" },
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
            { nome: "BRASÃO 1", id: "https://drive.google.com/file/d/1eIpUZgfrXoq78HZSNQOjCSYzjx2ksbWf/view?usp=drivesdk" }, { nome: "BRASÃO 2", id: "https://drive.google.com/file/d/1NG-Duuh0eaRqoTmLQ6V7dqQFDDnIzvFf/view?usp=drivesdk" }, { nome: "BRASÃO 3", id: "https://drive.google.com/file/d/1apHvZo5iRiSaKgOiHf2Y6K_jzrxPOR4j/view?usp=drivesdk" },
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
            { nome: "Brasão 1", id: "https://drive.google.com/file/d/1wtOA2rxoCSNmho3zTDCjssePCcE1BPeY/view?usp=drivesdk" }, { nome: "Brasão 2", id: "https://drive.google.com/file/d/13zkiFF20FOJmzA2hPzEdNmSUgOzCnT2H/view?usp=drivesdk" }, { nome: "Brasão 3", id: "https://drive.google.com/file/d/14zZi_4RLG9c52EigUzKNWXCXaniBGev8/view?usp=drivesdk" },
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
            { nome: "Brasão 1", id: "https://drive.google.com/file/d/1dQxDAe3lx0bxXEXFc58Bh_xuwyDQN1cY/view?usp=drivesdk" }, { nome: "Brasão 2", id: "https://drive.google.com/file/d/1Klu0QgbPdwQQqNaa42iW9DOW9UMhbhBn/view?usp=drivesdk" }, { nome: "Brasão 3", id: "https://drive.google.com/file/d/1dZ-mq14SOwza9DbsvW3U1G1AjseY8WdU/view?usp=drivesdk" },
            { nome: "Brasão 4", id: "https://drive.google.com/file/d/1utYn-5_qTUVUtQpG-9U1TupmKG_c-2cN/view?usp=drivesdk" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
            { nome: "Brasão 7", id: "" }, { nome: "Brasão 8", id: "" }, { nome: "Brasão 9", id: "" },
            { nome: "Brasão 10", id: "" }, { nome: "Brasão 11", id: "" }, { nome: "Brasão 12", id: "" },
            { nome: "Brasão 13", id: "" }, { nome: "Brasão 14", id: "" }, { nome: "Brasão 15", id: "" }
        ],
        membros: [
            { nick: "InepoIGN", fotos: { FCI: "", FBB: "", BPD: "", BPE: "", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
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
            { nome: "Brasão 1", id: "https://drive.google.com/file/d/1-CtABjPawzEqh4ZDInaBMMwmJsP44fdn/view?usp=drivesdk" }, { nome: "Brasão 2", id: "https://drive.google.com/file/d/1fe2N3TijDsTvSRP91emK7JdugsW570RI/view?usp=drivesdk" }, { nome: "Brasão 3", id: "https://drive.google.com/file/d/13fhdaUxAVcUCSTXnIepF9R0cw3hPKE5X/view?usp=drivesdk" },
            { nome: "Brasão 4", id: "https://drive.google.com/file/d/1zI-Bguj16Z5QW5wba89i_hQEw1kAwjli/view?usp=drivesdk" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
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
            { nome: "Brasão 1", id: "https://drive.google.com/file/d/1UAVyvNZJ14NVlgAv3zYZHIHE07Qlvstb/view?usp=drivesdk" }, { nome: "Brasão 2", id: "https://drive.google.com/file/d/19UvQylFsKqJTIbh1x--m4CK2tli9XPhT/view?usp=drivesdk" }, { nome: "Brasão 3", id: "https://drive.google.com/file/d/1I8S1cfxIF7AuvufHIA9XwAd2XESYADCG/view?usp=drivesdk" },
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
            { nome: "Brasão 1", id: "https://drive.google.com/file/d/1SSABSeAZhRNEuf2Gqu80I1cZj_ogyD5P/view?usp=drivesdk" }, { nome: "Brasão 2", id: "https://drive.google.com/file/d/19sV65VrqXr_QTuW2ZhiahegG98TjE85B/view?usp=drivesdk" }, { nome: "Brasão 3", id: "https://drive.google.com/file/d/1kXtgLorl9010z-rYTwc4M-gWDqnAVxcV/view?usp=drivesdk" },
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
            { nome: "Logo 1", id: "https://drive.google.com/file/d/1MQfqoKBUU_qJDK5PVIj7xqbOjpF62I1k/view?usp=drivesdk" }, { nome: "Logo 2", id: "" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "https://drive.google.com/file/d/1rj946sn1uTZQDzUIRgr1K8U9ybEAyOfB/view?usp=drivesdk" }, { nome: "Brasão 2", id: "https://drive.google.com/file/d/1euoPsjjHB-4n5K5VfyjxyMDS0JsUocyC/view?usp=drivesdk" }, { nome: "Brasão 3", id: "" },
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
            { nome: "LOGO 1", id: "https://drive.google.com/file/d/1RJbbuoUVgqB5m59wAHNE6nYumY-2Ly_P/view?usp=drivesdk" }, { nome: "LOGO 2", id: "https://drive.google.com/file/d/1VcBtfjFxvEbHR0OKtWG5ZXoa_rU5jKa-/view?usp=drivesdk" }, { nome: "LOGO 3", id: "https://drive.google.com/file/d/187yAUiz7nGiZ4WbYChWkj8ndaybd-mxa/view?usp=drivesdk" },
            { nome: "LOGO 4", id: "https://drive.google.com/file/d/11OIYy5tvps_kuDi4LBtSZyyDg-YXgKtk/view?usp=drivesdk" }, { nome: "LOGO 5", id: "https://drive.google.com/file/d/1HfE2PbCUDvffobIGwIsxKX7YaSMGznyI/view?usp=drivesdk" }, { nome: "LOGO 6", id: "https://drive.google.com/file/d/1x1d_UX0UEFSs7FQO0c4pI7Ogsg9VKa5q/view?usp=drivesdk" },
            { nome: "LOGO 7", id: "https://drive.google.com/file/d/1x1d_UX0UEFSs7FQO0c4pI7Ogsg9VKa5q/view?usp=drivesdk" }, { nome: "LOGO 8", id: "https://drive.google.com/file/d/1C4GKYUAvh9G3jkfiHQ7pL-omjAVJ4mPc/view?usp=drivesdk" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "https://drive.google.com/file/d/1BUV18q8Zis10H_IoF7DSvbDzRK0R0_X5/view?usp=drivesdk" }, { nome: "Brasão 2", id: "https://drive.google.com/file/d/10_1R4mWgCXJXjEO5M9fSzGWlZoOdTsTN/view?usp=drivesdk" }, { nome: "Brasão 3", id: "https://drive.google.com/file/d/1nzjl4-xat2lB_QFLUeK9bKwqkgE1yZxn/view?usp=drivesdk" },
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
        logo: "https://drive.google.com/file/d/10whVPWXlIlOo92qojLFe25ibXOJ5stDz/view?usp=drivesdk",
        logos: [
            { nome: "LOGO DOURADA", id: "https://drive.google.com/file/d/1gGYqfRuOHbJY2UpnI51gHnzWoWMU0diw/view?usp=drivesdk" }, { nome: "LOGO VERMELHA", id: "https://drive.google.com/file/d/10whVPWXlIlOo92qojLFe25ibXOJ5stDz/view?usp=drivesdk" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "https://drive.google.com/file/d/1YVy6ikVqfztzgI_z4nUDxpQncnRUMO3l/view?usp=drivesdk" }, { nome: "Brasão 2", id: "https://drive.google.com/file/d/18jlPxQEKD-TkV-7PmDU5Wkqvo3Qf-wEs/view?usp=drivesdk" }, { nome: "Brasão 3", id: "https://drive.google.com/file/d/1HfyRVDZqZmBbRnt_dFY07eIGtieQApnj/view?usp=drivesdk" },
            { nome: "Brasão 4", id: "https://drive.google.com/file/d/1DnCBQ1ur-4VlvmoaUdXH0Bv15sPnTl-g/view?usp=drivesdk" }, { nome: "Brasão 5", id: "https://drive.google.com/file/d/10LI1VdAr-eHUqWR0yAKycUCjwWyCFv0Y/view?usp=drivesdk" }, { nome: "Brasão 6", id: "" },
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
            { nome: "LOGO PRINCIPAL", id: "https://drive.google.com/file/d/15KAn4zGURlF45V1NYwsjkQ0eAe-7utT7/view?usp=drivesdk" }, { nome: "Logo 2", id: "" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "https://drive.google.com/file/d/1ERYpcDIFWswPB5s71donOrs0rt5Js4vZ/view?usp=drivesdk" }, { nome: "Brasão 2", id: "https://drive.google.com/file/d/1-8jooBLN9qWvKEduM9MrqUX51UuZ0y1q/view?usp=drivesdk" }, { nome: "Brasão 3", id: "https://drive.google.com/file/d/1dHz10TdhdITxYjWJRiTroZw9CUkMALsK/view?usp=drivesdk" },
            { nome: "Brasão 4", id: "https://drive.google.com/file/d/1obbN1dd7vLLXViLcIbLd-_rW3-B5tuJX/view?usp=drivesdk" }, { nome: "Brasão 5", id: "" }, { nome: "Brasão 6", id: "" },
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
            { nome: "LOGO BRANCA", id: "https://drive.google.com/file/d/1OqzqKwiZSAzJtrPgoQx2jRGHIj5VGmrV/view?usp=drivesdk" }, { nome: "LOGO PRETA", id: "https://drive.google.com/file/d/10zi-Sv9mxjORO9WiwI4cgDsslOtydSEp/view?usp=drivesdk" }, { nome: "Logo 3", id: "" },
            { nome: "Logo 4", id: "" }, { nome: "Logo 5", id: "" }, { nome: "Logo 6", id: "" },
            { nome: "Logo 7", id: "" }, { nome: "Logo 8", id: "" }, { nome: "Logo 9", id: "" },
            { nome: "Logo 10", id: "" }, { nome: "Logo 11", id: "" }, { nome: "Logo 12", id: "" },
            { nome: "Logo 13", id: "" }, { nome: "Logo 14", id: "" }, { nome: "Logo 15", id: "" }
        ],
        brasoes: [
            { nome: "Brasão 1", id: "https://drive.google.com/file/d/1Ew8aqylbQoOk8UUjoBnAivg89r0cjmf6/view?usp=drivesdk" }, { nome: "Brasão 2", id: "https://drive.google.com/file/d/1ZGkRLsgNvv0vEtkJ7e_rkKzBtn7zQjQB/view?usp=drivesdk" }, { nome: "Brasão 3", id: "https://drive.google.com/file/d/1xsKhuGOJvENGwegy89DEfCo9A5cZbFSZ/view?usp=drivesdk" },
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
