import Home from './views/pages/Home';
import Err from './views/pages/Err';

import Utils from './services/Utils';


let routes = {
  '/': Home
}

const router = async () => {


  const content = null || document.getElementById('app');

  // Obtenha o URl do navegador
  let request = Utils.parseRequestURL()

  // Analise o URL e se ele tiver uma parte de id, altere-o com a string ": id"
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
  
  // Obtenha a página de nosso hash de rotas com suporte.
  // Se o URL analisado não estiver em nossa lista de rotas compatíveis, selecione a página 404
  let page = routes[parsedURL] ? routes[parsedURL] : Err
  content.innerHTML = await page.render();
  await page.after_render();

}

// Observa a mudança de hash:
window.addEventListener('hashchange', router);

// Observa o carregamento da página:
window.addEventListener('load', router);