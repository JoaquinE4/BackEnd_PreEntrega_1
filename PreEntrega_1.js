class ProductManager {
    #products;

    constructor() {
        this.#products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (this.#products.some(product => product.code === code)) {
            throw new Error("El código del producto ya existe");
        }

        const id = "_" + Date.now();

        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            date: new Date().toLocaleDateString()
        }

        this.#products.push(newProduct)

        return newProduct;
    }

    getProducts() {
        return this.#products
        
    }

    getProductById(id) {
        const product =this.#products.find(product => product.id === id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        return product;
    }
}

// Agregar Producto
const manager = new ProductManager();

try {
    const product = manager.addProduct("Frida Maceta", "Maceta con forma de Frida Kalo de 20 cm de alto", 25000, undefined, "b4cd", 2);
    console.log( product );
} catch (error) {
    console.error("Falla en el Método: " + error.message);
}

// Mostrar todos los productos 
console.log("Todos los Productos:", manager.getProducts());

// Intentar agregar otro producto con el mismo código 
try {
    const product = manager.addProduct("Frida Maceta", "Maceta con forma de Frida Kalo de 20 cm de alto", 25000, undefined, "b4cd", 2);
    console.log(  product  );
} catch (error) {
    console.error("El Producto ya fue agregado: " + error.message);
}

//Buscar Producto en el Array
try {
    const productId = manager.getProducts()[0].id; 
    const productById = manager.getProductById(productId);
    console.log("Producto encontrado por ID:", productById);
} catch (error) {
    console.error("Error al obtener producto por ID:", error.message);
}
