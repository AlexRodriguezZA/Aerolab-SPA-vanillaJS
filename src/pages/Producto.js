import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Producto =  async () => {

    const id = getHash(); //Obtenemos el ID de producto que seleccionamos mediante su id que el hash
    const productos = await getData(); //Obtenemos todos los productos 

    const ProductoEncontrado = productos.filter( producto => producto._id === id) //Buscamos el producto seleccionado
    
    const productoMostrar = ProductoEncontrado[0]

    
    console.log(productoMostrar)
    
    
    const view = `
        <div class="Product-main">
            <article class="product-card">
                <img src="${productoMostrar.img.url}" alt="${productoMostrar.name}">
                <h2>${productoMostrar.name}</h2>
            </article>
            <article class="product-card-detail">
                <h3>Costo: <span>$ ${productoMostrar.cost}</span></h3>
                <h3>Categoria:  <span>${productoMostrar.category}</span></h3>
               
            </article>
            
        </div> 
    `
    return view
};
export default Producto;