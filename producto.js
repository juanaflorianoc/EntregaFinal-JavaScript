

// creo un objeto de los productos

class Producto {

    constructor(nombre, marca, precio, stock, img) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.cant = 1;
    }
}

let productos = []