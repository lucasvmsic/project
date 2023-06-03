window.sr = ScrollReveal();
sr.reveal('nav, h1, .card, footer, #carousel', {
    duration: 1500,
    origin: 'botton',
    distance: '-1rem'
});

function captura() {
    var nombre = "dona1";
    var relleno = document.getElementById("dona1.relleno").value;
    var cantidad = document.getElementById("dona1.cantidad").value;
    toastr.success("Agregado al carrito");


}
function cupcake() {

    var relleno1 = document.getElementById("cupcake.relleno").value;
    var cantidad1 = document.getElementById("cupcake.cantidad").value;
    location.href = 'https://wa.me/56921693746?text=Hola,%20Quiero%20' + cantidad1 + '%20cupcake%20con%20' + relleno1;
}



var boton = document.getElementById("toggleButton");
var overlay = document.getElementById("overlay");

/* boton.addEventListener("mousedown", function() {
   overlay.style.display = overlay.style.display === "none" ? "block" : "none";
   console.log("Botón clickeado");
   console.log("Valor actual de display:", overlay.style.display);

 });
 */
let i=0;
function abrirCarrito() {
    var elemento = document.querySelector('.all');
    if(i%2==0){
    elemento.style.opacity = '0.5';
    overlay.style.opacity = '1';
    overlay.style.display = "block";
    }
    else{
        elemento.style.opacity = '1';
        overlay.style.opacity = '0';
        overlay.style.display = "none";
    }
    i++;
}
  

function agregar() {

    var relleno = document.getElementById("dona2.relleno").value;
    var cantidad = document.getElementById("dona2.cantidad").value;
    const listaDeCompras = document.querySelector("#carrito");
    const li = document.createElement("li");
    li.textContent = relleno;
    listaDeCompras.appendChild(li);
}
function cerrarCarrito(){
    var elemento = document.querySelector('.all');
    elemento.style.opacity = '1';

    overlay.style.opacity = '0';
    overlay.style.display = "none";
    i++;
}