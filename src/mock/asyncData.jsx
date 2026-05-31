const productos = [
    { id: 1, 
        name: "Producto 1", 
        description: "Descripción del producto 1", 
        stock: 10 ,
        precio: 2500,
        category: "empanadas",
        img:"https://i.postimg.cc/XYq3Syp6/empanadas-logo.png"},
    { id: 2, 
        name: "Producto 2", 
        description: "Descripción del producto 2", 
        stock: 20,
        precio: 3000,
        category: "empanadas",
        img:"https://i.postimg.cc/vT4LwhFg/empanada-caprese.webp"},
    { id: 3, 
        name: "Producto 3", 
        description: "Descripción del producto 3", 
        stock: 30 ,
        precio: 4000,
        category: "empanadas",
        img:"https://i.postimg.cc/XYq3Syp6/empanadas-logo.png"},
    { id: 4, 
        name: "Producto 4", 
        description: "Descripción del producto 4", 
        stock: 40 ,
        precio: 5000,
        category: "empanadas",
        img:"https://i.postimg.cc/XYq3Syp6/empanadas-logo.png"},
    { id: 5, 
        name: "Producto 5", 
        description: "Descripción del producto 5", 
        stock: 50 ,
        precio: 6000,
        category: "empanadas",
        img:"https://i.postimg.cc/vT4LwhFg/empanada-caprese.webp"},
    { id: 6, 
        name: "Producto 6", 
        description: "Descripción del producto 6", 
        stock: 30 ,
        precio: 4000,
        category: "empanadas",
        img:"https://i.postimg.cc/XYq3Syp6/empanadas-logo.png"}
]

let error = false
export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("No hay datos disponibles");
            } else {
                resolve(productos);
            }
        }, 2000);
    });
};
