import Header from '../templates/Header';
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Categorias from '../templates/Categorias';
import Producto from '../pages/Producto';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';



const routes = {
    '/': Home,
    '/:id': Producto,
};

const router = async () => {
    const header = null ||  document.getElementById('header');
    const productos = null || document.getElementById('container');
    const categorias = null || document.getElementById('categorias');
    

    header.innerHTML= await Header();
    categorias.innerHTML = await Categorias();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    productos.innerHTML = await render();

};

export default router;