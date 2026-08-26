FFWS Media Lobby - versão conectada à planilha

Os domínios exibidos na tela de login são obtidos em tempo real pelo endpoint /domains do Cloudflare Worker, que lê a mesma SHEETBEST_URL usada no login.

O Worker precisa ter SHEETBEST_URL e SESSION_SECRET configurados.

O frontend precisa apontar API_URL para a URL pública do Worker em config.js.
