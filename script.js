
// clase de clientes
class Clientx {

    constructor (nombre, whatsapp, email, informacion) {
        this.nombre = nombre;
        this.whatsapp = whatsapp;
        this.email = email;
        this.informacion = informacion;
    }

    devolverDatos (){
        return (`${this.nombre} - ${this.whatsapp} - ${this.email}  - ${this.informacion}`)
    }

}


let clientxs = []
let divMostrar = document.getElementById('div-mostrar')

// llamo al formulario de clientxs del archivo quiero-vender.html
let formulario = document.getElementById('form-clientxs')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    // tomo la información ingresada y creo un nuevo clientx
    let datForm = new FormData(e.target)
    let clientx = new Clientx (datForm.get("nombre"), datForm.get("whatsapp"), datForm.get("email"), datForm.get("informacion"))
    clientxs.push(clientx)

    // guardo la información ingresada en el formulario
    localStorage.setItem('clientxs', JSON.stringify(clientxs))

    // reseteo el formulario para que un nuevo clientx pueda ingresar sus datos
    formulario.reset()
})



/*
document.getElementById('boton-mostrar').addEventListener('click', () => {
    let clientxsParseados = JSON.parse(localStorage.getItem('clientxs'))

    // muestro en el html lxs clientxs ingresados
    clientxsParseados.forEach((clientx, indice) => {
        divMostrar.innerHTML += `
        <div class="card" id="clientx${indice + 1}" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title> Clientx ${clientx.nombre}</h5>
                <p class="card-text"> Nombre: ${clientx.nombre} </p>
                <p class="card-text"> Whatsapp: ${clientx.whatsapp} </p>
                <p class="card-text"> Email: ${clientx.email} </p>
                <p class="card-text"> Información adicional: ${clientx.informacion} </p>
                <button type="button" class="btn btn-danger" id="boton${indice + 1}"> Eliminar </button>
            </div>
        </div>
        `
    })


    clientxsParseados.forEach((clientx, indice) => {

        // consulto cada botón del array de clientxs
        console.log(`boton${indice + 1}`)

        // cuando hago click en el botón de eliminar, se elimina ese cliente
        document.getElementById(`boton${indice + 1}`).addEventListener('click', () => {
            divMostrar.removeChild(document.getElementById(`clientx${indice + 1}`))

            // lo alimino del array y del local storage
            clientxs.splice(indice, 1)
            localStorage.setItem('clientxs', JSON.stringify(clientxs))
            console.log(`Clientx ${clientx.nombre} eliminada`)
        })
    }) 



})*/





// defino que cosas son obligatorias poner en cada item del formulario
let validateMail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let validateWhatsapp = /^[0,9]{10}$/;



$(() => {
    $("form-clientxs").submit((e) => {
        e.preventDefault()

        let datosFormulario = new FormData(e.target)

         $('.errorMsg').hide();

         // si escribís mal el mail aparece error
         if(!validateMail.test(datosFormulario.get("email"))){
             $('#errorEmail').show()

         } else {

             // si escribís mal el whatsapp aparece error
             if(!validateWhatsapp.test(datosFormulario.get("whatsapp"))){
                $('errorWhatsapp').show();

             } else {
                 alert("Clientx recibidx.")
                 $("form-clientxs").trigger("reset")
             }
         }

    })
})

