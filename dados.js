// LISTA DE USUÁRIOS E PERMISSÕES DE ACESSO
const listaUsuarios = [
    { email: "jotinha@admin.com", senha: "Stw1402s@", scope: "all" },
    { email: "oaspira@diretoria.com", senha: "SpawnFreeFire26", scope: "all" },
    { email: "yuta@medialobby.com", senha: "YutaEventos2026", scope: "all" },
    { email: "thallys@pixelbroadcast.com", senha: "Thallys2026", scope: "all" },
    { email: "pedrow@medialobby.com", senha: "infmeuamor", scope: "all" },
    
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
            { nick: "AFG.PETER", fotos: { FCI: "https://drive.google.com/file/d/1nOYALGVafC8iM852uqoNQfNotGwBcWTz/view?usp=drivesdk", FBB: "https://drive.google.com/file/d/1LjG3gu39yPH6o2DObxRFrcYtrGRr0sml/view?usp=drivesdk", BPD: "https://drive.google.com/file/d/1l7_1Q3UP88f9WbtwfZf8g4isG6Jbl6d5/view?usp=drivesdk", BPE: "https://drive.google.com/file/d/1NXBSYNF3-EHx-uYdEy9BFf_MI-Qs8gzZ/view?usp=drivesdk", FBC: "https://drive.google.com/file/d/1prX56JpOO3Z8OAHw4RVOHIid9hmB3ADE/view?usp=drivesdk", BCD: "https://drive.google.com/file/d/1RadKFm0sKgqhxvwtWkyOtCNaQ4V_3FlM/view?usp=drivesdk", BCE: "https://drive.google.com/file/d/1pNIrV4C7_wkW0KWEkit3IdKlSqjG1JFR/view?usp=drivesdk", PDB: "https://drive.google.com/file/d/1ihBQqnS0ls8ZNXmpFUWt8ayYOVxmoRAA/view?usp=drivesdk", MVP: "https://drive.google.com/file/d/1460wbpm4_bf9e9HpHLoe_jfx639oJkJU/view?usp=drivesdk", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG.DNSETZZ", fotos: { FCI: "https://drive.google.com/file/d/1BG36BeGw8r1nTV1o9JHXschB_AFSnPAz/view?usp=drivesdk", FBB: "https://drive.google.com/file/d/12GwLBaAvrmU_ehCCWaUNQCmrrbiHprUI/view?usp=drivesdk", BPD: "https://drive.google.com/file/d/1dpZSJRw9oBlvzKJm4xGDSal2-Qe7jM_x/view?usp=drivesdk", BPE: "https://drive.google.com/file/d/1CGkj6gRo_VbHlFgJCwJ3Jtd8T00LSGoi/view?usp=drivesdk", FBC: "https://drive.google.com/file/d/1bu0vWHwme0qjldZeEaA0lt_er7cjbK2e/view?usp=drivesdk", BCD: "https://drive.google.com/file/d/1WSZGg77kcGqLCu1X0jdhIi5zNHVhFvzu/view?usp=drivesdk", BCE: "https://drive.google.com/file/d/1C-cWgy890Hz40k50IwOefBBrHs2xMymY/view?usp=drivesdk", PDB: "https://drive.google.com/file/d/1VaVdvDXCEQ0epbTqhd6d0MFY1Zx2HtzG/view?usp=drivesdk", MVP: "https://drive.google.com/file/d/1ZhiErAW3IGW9URWNWkR8Pfnvo3VfzQxL/view?usp=drivesdk", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG.NIELFFX", fotos: { FCI: "https://drive.google.com/file/d/1FWg2LII5Saqo77SraR97W0x9XJ5bHqbp/view?usp=drivesdk", FBB: "https://drive.google.com/file/d/1ahRsMj_hMlfC8cxrfk5p2TIk5q2lF_U-/view?usp=drivesdk", BPD: "https://drive.google.com/file/d/1-8fHV-1vZzBc6iGE22QCrAUroR-ZxTMh/view?usp=drivesdk", BPE: "https://drive.google.com/file/d/1NxbH8moPR62QeJcvaiRQE6KXpcr49ceW/view?usp=drivesdk", FBC: "https://drive.google.com/file/d/11Orn3bTNSMzUt3egGP7Vm1CJJjZwmdkS/view?usp=drivesdk", BCD: "https://drive.google.com/file/d/1eWZuI9MjlrIIz8Umw_9dHOT2zAZl_XCM/view?usp=drivesdk", BCE: "https://drive.google.com/file/d/12Lr7GaujIFtcm3KPJdKriLCnY3yMeD4V/view?usp=drivesdk", PDB: "https://drive.google.com/file/d/1eOwxOAtthPbVgglIoeBE08Yg0u0SLsLG/view?usp=drivesdk", MVP: "https://drive.google.com/file/d/1I3zQMIok4ZvtNxUr-fMmfe24te7crYcW/view?usp=drivesdk", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG.BRABOXX7", fotos: { FCI: "https://drive.google.com/file/d/1CqrC2CE8eRwjIzktQLfH_IkcZrlxkISH/view?usp=drivesdk", FBB: "https://drive.google.com/file/d/1467KjMfHRD0kxNdrevrhQBKo4K9hXKR7/view?usp=drivesdk", BPD: "https://drive.google.com/file/d/1FEyVzlYFBJcXh0Ey0c1pZkJM6ksdigH-/view?usp=drivesdk", BPE: "https://drive.google.com/file/d/13Frk6S7m5Ao_9U7uBzXj7-l5gEvR-dSt/view?usp=drivesdk", FBC: "https://drive.google.com/file/d/1xFCPD4dkq0gcwZMW6c1uArhpGEJh6P6d/view?usp=drivesdk", BCD: "https://drive.google.com/file/d/1Z4LRNHOD-wbm6SsiGqSX9ZOFgdlDwKhh/view?usp=drivesdk", BCE: "https://drive.google.com/file/d/1GYUHBz4hxlOITaJlUBy5WKip2dmG2Ytz/view?usp=drivesdk", PDB: "https://drive.google.com/file/d/1l9N1PKNKRvAfYT6zZEuKyLXzFfHYBsY8/view?usp=drivesdk", MVP: "https://drive.google.com/file/d/1gcKpOFQGSIBlSbzqmEorsUlzWvyCFAv4/view?usp=drivesdk", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG.SANT10$", fotos: { FCI: "https://drive.google.com/file/d/1vJmUUKz-DZe81w0aYKPdK1XsBxNJmbZb/view?usp=drivesdk", FBB: "https://drive.google.com/file/d/1ZazNlSxps7B1VqbaRUS-bsBK5_VHKuTi/view?usp=drivesdk", BPD: "https://drive.google.com/file/d/1BVefio53IrG3_ZDA5aw7WolTXXzqxgSC/view?usp=drivesdk", BPE: "https://drive.google.com/file/d/1Qw1DzzmjcI0gd56T9oOFB3z2oeNDAs3p/view?usp=drivesdk", FBC: "https://drive.google.com/file/d/1AE3E-k3z5pklfUiqE610xVAvv88m_R1p/view?usp=drivesdk", BCD: "https://drive.google.com/file/d/1MW2HSiXOMgWQW_VnssCAtVY2qZe5T4F3/view?usp=drivesdk", BCE: "https://drive.google.com/file/d/1UK9FyJswg9gIF01TT4xW0-GQ4Pfls7sk/view?usp=drivesdk", PDB: "https://drive.google.com/file/d/1wa53FsRtB5n3Shi8Zdt1mH9YZNkzPkaP/view?usp=drivesdk", MVP: "https://drive.google.com/file/d/1Sv8P3H1WSAk72MBNUW37pHbMEGAOz3gz/view?usp=drivesdk", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG.GBZINN7$", fotos: { FCI: "https://drive.google.com/file/d/1ZfEg9WTzaDnAE3i8oAGbSblngAjKI-pw/view?usp=drivesdk", FBB: "https://drive.google.com/file/d/1njZwrwR0P47uvl6_UjyTEe43EmmHJK9m/view?usp=drivesdk", BPD: "https://drive.google.com/file/d/17LeZdVLO2n6xh1GcrJld3VBlLSz5PB49/view?usp=drivesdk", BPE: "https://drive.google.com/file/d/1pZQeq_3QaHSPAYX3Qbg9Wn7HzjTpXgdu/view?usp=drivesdk", FBC: "https://drive.google.com/file/d/1qRCXwf22eCwnusElA6W0RlhQIatZdbBT/view?usp=drivesdk", BCD: "https://drive.google.com/file/d/1AYxSR5HL0gu57_ZP0FZ6E95vl_M_H6JS/view?usp=drivesdk", BCE: "https://drive.google.com/file/d/1oOUgRzaVppkytkfWwMin6qCFfQyWgTjd/view?usp=drivesdk", PDB: "https://drive.google.com/file/d/19rpylLjtM2awOkUX2s-FCAMyF-XmFSjj/view?usp=drivesdk", MVP: "https://drive.google.com/file/d/1ou1Q1R2wwirXiG1_7NtViFnmUyBuKUby/view?usp=drivesdk", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } },
            { nick: "AFG.AZAY (Coach)", fotos: { FCI: "https://drive.google.com/file/d/1O2a-Zr0AjctOxXsSUCkqc735tqmAsbxb/view?usp=drivesdk", FBB: "https://drive.google.com/file/d/1G2owUgQdGwm-IWyb5PoHRV82M1FPu38F/view?usp=drivesdk", BPD: "https://drive.google.com/file/d/13qyBYGN--DucggprFy8Q3-epKhPoFPR5/view?usp=drivesdk", BPE: "https://drive.google.com/file/d/1LIgZQysfzew6LhrzpsaTmiiX4WLMyEJ9/view?usp=drivesdk", FBC: "", BCD: "", BCE: "", PDB: "", MVP: "", FUN1: "", FUN2: "", FPG1: "", FPG2: "", FPG3: "", CPD: "", CPE: "", CDR: "" } }
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
            { nome: "LOGO 1", id: "https://drive.google.com/file/d/1MQfqoKBUU_qJDK5PVIj7xqbOjpF62I1k/view?usp=drivesdk" }, { nome: "LOGO 2", id: "https://drive.google.com/file/d/12-OgkD0hxZaBMMWwFuItzPz6A6vg_gLg/view?usp=drivesdk" }, { nome: "LOGO 4", id: "https://drive.google.com/file/d/1hWVVI0sXhn-K18NxLWp9MYSymFhwAeTM/view?usp=drivesdk" },
            { nome: "LOGO 4", id: "https://drive.google.com/file/d/1xYQl0J-NbEpikSkjEi6OjGGN4ZtPToaE/view?usp=drivesdk" }, { nome: "LOGO 5", id: "https://drive.google.com/file/d/1FhAahkOrQlH3BPWLq6KY40P90_4elV99/view?usp=drivesdk" }, { nome: "LOGO 6", id: "https://drive.google.com/file/d/1Nx42caTDCEUeLYB4ow4Gc8AGcLImegiE/view?usp=drivesdk" },
            { nome: "LOGO 7", id: "https://drive.google.com/file/d/1qmRQCZb_urQFVV1aEiCziR5VUwwAzSK-/view?usp=drivesdk" }, { nome: "LOGO 8", id: "https://drive.google.com/file/d/1-BT7cCnUzmabBLm2jx8uINai-mTseYdQ/view?usp=drivesdk" }, { nome: "LOGO 9", id: "https://drive.google.com/file/d/1J82k-yygTpodFgRxSCU5pNWVnoHP_na0/view?usp=drivesdk" },
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
            { nome: "LOGO 1", id: "https://drive.google.com/file/d/1RJbbuoUVgqB5m59wAHNE6nYumY-2Ly_P/view?usp=drivesdk" }, { nome: "LOGO 2", id: "https://drive.google.com/file/d/1VcBtfjFxvEbHR0OKtWG5ZXoa_rU5jKa-/view?usp=drivesdk" }, { nome: "LOGO BRANCA", id: "https://drive.google.com/file/d/1HfE2PbCUDvffobIGwIsxKX7YaSMGznyI/view?usp=drivesdk" },
            { nome: "LOGO 1 HORIZONTAL COM ESCRITA BRANCA", id: "https://drive.google.com/file/d/187yAUiz7nGiZ4WbYChWkj8ndaybd-mxa/view?usp=drivesdk" }, { nome: "LOGO COM ESCRITA VERTICAL", id: "https://drive.google.com/file/d/11OIYy5tvps_kuDi4LBtSZyyDg-YXgKtk/view?usp=drivesdk" }, { nome: "LOGO PRETA 1 COM ESCRITA HORIZONTAL", id: "https://drive.google.com/file/d/1C4GKYUAvh9G3jkfiHQ7pL-omjAVJ4mPc/view?usp=drivesdk" },
            { nome: "LOGO PRETA 2 COM ESCRITA HORIZONTAL", id: "https://drive.google.com/file/d/1x1d_UX0UEFSs7FQO0c4pI7Ogsg9VKa5q/view?usp=drivesdk" }, { nome: "LOGO PRETA", id: "https://drive.google.com/file/d/1h5Xl4kfrzd3iOYCUSF1A9t6zcvXyV1Ov/view?usp=drivesdk" }, { nome: "Logo 9", id: "" },
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
            { nome: "LOGO DOURADA", id: "https://drive.google.com/file/d/1gGYqfRuOHbJY2UpnI51gHnzWoWMU0diw/view?usp=drivesdk" }, { nome: "LOGO VERMELHA", id: "https://drive.google.com/file/d/10whVPWXlIlOo92qojLFe25ibXOJ5stDz/view?usp=drivesdk" }, { nome: "Logo 3", id: "" },
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
            { nome: "LOGO PRINCIPAL", id: "https://drive.google.com/file/d/15KAn4zGURlF45V1NYwsjkQ0eAe-7utT7/view?usp=drivesdk" }, { nome: "Logo 2", id: "" }, { nome: "Logo 3", id: "" },
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
            { nome: "LOGO BRANCA", id: "https://drive.google.com/file/d/1OqzqKwiZSAzJtrPgoQx2jRGHIj5VGmrV/view?usp=drivesdk" }, { nome: "LOGO PRETA", id: "https://drive.google.com/file/d/10zi-Sv9mxjORO9WiwI4cgDsslOtydSEp/view?usp=drivesdk" }, { nome: "Logo 3", id: "" },
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
