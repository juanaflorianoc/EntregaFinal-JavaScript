
       
       // Llamo a los elementos del HTML
       localStorage.setItem('carrito', JSON.stringify([]))
       let divProductos = document.getElementById("divProductos")
       let botonCarrito = document.getElementById("botonCarrito")
       let modalBody = document.getElementById("modal-body")
       let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
       let parrafoCompra = document.getElementById('precioTotal')
       let acumulador;
       
       fetch('productos.json')
       .then(response => response.json())
       .then(dataProductos => {
          dataProductos.forEach((productoEnArray, indice)=> {
          
              // Muestro los productos de -productos.json- en el HTML
              divProductos.innerHTML += `
               <div class="card border-light mb-3" style="max-width: 20rem; margin:8px; padding-top:25px; padding-bottom:25px;" id="producto${indice}">
                   <img src="./img/ropa/${productoEnArray.img}" class="card-img-top" alt="...">
                   <div class="card-body">
                       <h4 class="card-title">${productoEnArray.nombre}</h4>
                       <p class="card-text">${productoEnArray.marca}</p>
                       <p class="card-text">$${productoEnArray.precio}</p>
                       <p class="card-text">Stock:${productoEnArray.stock}</p>
                       <button id="boton${indice}" class="btn btn-dark"><i class="fas fa-cart-plus fa-1x"></i></button>
                   </div>
               </div>
              `
          });
       

          dataProductos.forEach((productoEnArray, indice) => {
              document.getElementById(`boton${indice}`).addEventListener('click', () => {

                   // configuración de la cantidad
                   if(productos.find(producto => producto.nombre == productoEnArray.nombre)) {
                       let index = productos.findIndex(producto => producto.nombre == productoEnArray.nombre)
                       productos[index].cant++
                       localStorage.setItem('carrito', JSON.stringify(productos))
                   } else {
                       let nuevoProducto = new Producto(productoEnArray.nombre, productoEnArray.marca, 
                       productoEnArray.precio, productoEnArray.stock, productoEnArray.img)
                       productos.push(nuevoProducto)
                       localStorage.setItem('carrito', JSON.stringify(productos))
                   }
                   
              })
          })
       })
       