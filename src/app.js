import Utils from './services/Utils';

import Home from './views/pages/Home';
import Err from './views/pages/Err';

let routes = {
  '/':  Home
}

const router = async () => {
  // referenciando o elemento HTML para renderização
   const content = null || document.getElementById('app');

  // Obtendo a URL do meu browser
   let request = Utils.parseRequestURL();

  // Analisar a URL e verificar se a rota é simples ou composta
   let parsedURL = (request.resource ? '/' + request.resource: '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');

   let page = routes[parsedURL] ? routes[parsedURL] : Err;

   content.innerHTML = await page.render();
   await page.after_render();
  
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)