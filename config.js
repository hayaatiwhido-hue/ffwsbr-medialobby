// Configuração do frontend
// URL pública do Cloudflare Worker.
const API_URL = 'https://media-lobby-api.hayaati-whido.workers.dev/';

// Todos os assets visuais ficam na pasta info-ffws/.
// O fallback aponta para o mesmo repositório GitHub caso o deploy não tenha
// publicado algum arquivo local.
const ASSET_BASE = './info-ffws/';
const ASSET_FALLBACK_BASE = 'https://raw.githubusercontent.com/hayaatwithido-hue/ffwsbr-medialobby/main/info-ffws/';

function ffwsAsset(nome) {
  return ASSET_BASE + nome;
}

function ffwsAssetFallback(img, nome) {
  if (!img || img.dataset.ffwsFallback === '1') return;
  img.dataset.ffwsFallback = '1';
  img.src = ASSET_FALLBACK_BASE + nome;
}
