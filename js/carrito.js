
//Guardar datos del formulario
let InputNombre = document.getElementById('nombre');
console.log(InputNombre);

let InputEmail = document.getElementById('email');
console.log(InputEmail);

let InputTelefono = document.getElementById('telefono');
console.log(InputTelefono);

let InputMensaje = document.getElementById('mensaje');
console.log(InputMensaje);

// Creación de un array donde se van a colocar todos los productos elegidos del array "tortas"
productosElegidos = [];

// variable del contador de cantidad de tortas del boton
let span = document.getElementById("contador_carrito")

// Eventos con el click de selección de tortas para agregar al carrito con JQUERY
 $(".boton").on("click",function () {
     console.log($(this).attr('id'));
     id = $(this).attr('id');
     productosElegidos.push(tortas[id-1]);
     $("#contador_carrito").text(productosElegidos.length)
     $(this).parent().children('.elegido').show()
 })


 // Eventos con el click en el carrito para mostrar los productos seleccionados
$("#botonCarrito").click(function () {
    $("#ventana_Carrito").empty();
    for (const producto of productosElegidos) {
        $("#ventana_Carrito").append(`<div >
    <p>     ${producto.sabor}
    <b>   $ ${producto.precio}</b></p></div>`);
    }

    const sumaPrecios = productosElegidos.reduce((ac, p) => ac + p.precio, 0)
    $("#carrito__total").html(`<h4 style="background-color: white">El precio total es de ${sumaPrecios} </h4>`)
})

$("#boton_Vaciar").click(function () {
    productosElegidos = [];
})


//Función para el evento de Vaciar el carrito para vaciar el carrito con los porductos elegidos
$("#boton_Vaciar").on("click",function () {
    productosElegidos = [];
    $("#contador_carrito").text(productosElegidos.length);
    $(".elegido").hide();
    $("#myModal .close").click();
})


//Storage formulario para guardar todos los datos
function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.email = document.getElementById("email").value;
    localStorage.telefono = document.getElementById("telefono").value;
    localStorage.mensaje = document.getElementById("mensaje").value;

 // Utilización de ejemplo de AJAX   
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products/3", true);
    xhr.onload = function() {
        document.getElementById("contact-result").innerHTML =
        JSON.stringify(this.responseText);
      }
    xhr.send();
}



