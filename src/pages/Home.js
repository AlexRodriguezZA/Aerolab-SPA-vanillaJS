import getData from "../utils/getData";

const Home = async ( ) => {

    const products = await getData()

    const view = `
            <div class="Products-container">
                ${products.map(product => `
                <a href="#/${product._id}/">
                    <article class="Product-card">
                        <img src="${product.img.url}" alt="${product.name}">
                        <div class="Product-details">
                            <p class="Product-category">${product.category}</p>
                            <p class="Product-name">${product.name}</p>
                        </div>   
                    </article>
                </a>
                `).join('')}
            </div>
        `;
        return view;

}

export default Home;