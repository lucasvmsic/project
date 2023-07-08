const stockProductos = [
    {
        id: 1,
        nombre: 'minidona',
        img: "/img/acompañamiento/dona1.jpg",
        precio: 10000,
    },
    {
        id: 2,
        nombre: 'minidona',
        img: "/img/acompañamiento/dona2.jpg",
        precio: 20000,
    },
    {
        id: 3,
        nombre: 'minidona',
        img: "/img/acompañamiento/dona3.jpg",
        precio: 30000,
    },
    {
        id: 4,
        nombre: 'minidona',
        img: "/img/acompañamiento/dona4.jpg",
        precio: 40000,
    },
    {
        id: 5,
        nombre: 'minidona',
        img: "/img/acompañamiento/dona5.jpg",
        precio: 50000,
    },
    {
        id: 6,
        nombre: 'minidona',
        img: "/img/acompañamiento/dona6.jpg",
        precio: 60000,
    },
    {
        id: 7,
        nombre: 'minidona',
        img: "/img/acompañamiento/dona7.jpg",
        precio: 70000,
    },

];

let carrito = [];





window.sr = ScrollReveal();
sr.reveal('nav, h1, .card, footer, #carousel', {
    duration: 1300,
    origin: 'botton',
    distance: '-1rem'
});

const agregarProducto = (id) =>{

    toastr.success("Agregado al carrito");

    const item = stockProductos.find((prod) => prod.id === id);
    carrito.push(item);
    console.log(item);
    mostrarCarrito();




};




const mostrarCarrito = () => {
    const contCarrito = document.querySelector(".contcarrito");
    contCarrito.innerHTML = ''

    var cantidades = [];
    var rellenos = [];
    var select = document.getElementsByClassName('cantidad');
    Array.from(select).forEach(function (select) {
        var cantidad = select.value;
        cantidades.push(cantidad);
    })

    var selectrelleno = document.getElementsByClassName('relleno');
    Array.from(selectrelleno).forEach(function (selectrelleno) {
        var relleno = selectrelleno.value;
        rellenos.push(relleno);
    })
    console.log(rellenos);

    /*ACA HAY ALGO MAL KTMMM*/


            prod.cantidad = cantidades[prod.id - 1];
            prod.relleno = rellenos[prod.id - 1];
            console.log(prod.relleno)
            var { id, nombre, precio, img, cantidad, relleno } = prod;
            precio=precio*cantidad;
            console.log(contCarrito);
            contCarrito.innerHTML += `

        
        <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center" style="margin-top: 0.01rem;">
        <div class="col">
            <div class="card h-100 card-carrito m-t-2 card-carrito">
                <img src="${img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="title-subtotal">${nombre}</h5>
                        <h6 class="title-subtotal">Cantidad: ${cantidad}</h6>
                        <h6 class="title-subtotal">Relleno: ${relleno}</h6>
                        <h6 class="title-subtotal">Precio: ${precio}</h6>
                    </div>
                    <div class="card-footer md-flex justify-content-center">
                    <a style="display: block; margin: 0 auto; width: 80%;" class="btn btn-outline-danger">Eliminar producto</a>
                    </div>
            </div>
        </div>
    </div>
    
        `;
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
    let i = 0;
    function abrirCarrito() {
        var elemento = document.querySelector('.all');
        if (i % 2 == 0) {
            elemento.style.opacity = '0.5';
            overlay.style.opacity = '1';
            overlay.style.display = "block";
        }
        else {
            elemento.style.opacity = '1';
            overlay.style.opacity = '0';
            overlay.style.display = "none";
        }
        i++;
    }

    /*
    function agregar() {
    
        var relleno = document.getElementById("dona2.relleno").value;
        var cantidad = document.getElementById("dona2.cantidad").value;
        const listaDeCompras = document.querySelector("#carrito");
        const li = document.createElement("li");
        li.textContent = relleno;
        listaDeCompras.appendChild(li);
    }
    */
    function cerrarCarrito() {
        var elemento = document.querySelector('.all');
        elemento.style.opacity = '1';

        overlay.style.opacity = '0';
        overlay.style.display = "none";
        i++;
    }