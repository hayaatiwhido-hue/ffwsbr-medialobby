PACOTE COMPLETO FFWSBR MEDIA LOBBY

Arquivos principais:
- index.html
- painel.html
- dados.js
- config.js
- worker.js
- wrangler.toml
- vercel.json

SEGURANCA:
As senhas que estavam no dados.js foram removidas. O login agora usa o Cloudflare Worker.

UNICA CONFIGURACAO EXTERNA NECESSARIA:
Em config.js deve entrar a URL PUBLICA REAL do seu Worker Cloudflare.
Nao invente uma URL: use exatamente a URL mostrada no botao Visit do Worker.

No Cloudflare Worker, configure os secrets/variables:
SHEETBEST_URL = URL completa da sua API SheetBest
SESSION_SECRET = sua secret privada

Depois publique o Worker e publique o conteudo deste pacote na Vercel/GitHub.
