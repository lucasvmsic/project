const stockProductos = [
    {
        id: 1,
        nombre: 'Minidona',
        img: "/img/acompañamiento/dona1.jpg",
        precio: 10000,
    },
    {
        id: 2,
        nombre: 'Minidona',
        img: "/img/acompañamiento/dona2.jpg",
        precio: 20000,
    },
    {
        id: 3,
        nombre: 'Minidona',
        img: "/img/acompañamiento/dona3.jpg",
        precio: 30000,
    },
    {
        id: 4,
        nombre: 'Minidona',
        img: "/img/acompañamiento/dona4.jpg",
        precio: 40000,
    },
    {
        id: 5,
        nombre: 'Minidona',
        img: "/img/acompañamiento/dona5.jpg",
        precio: 50000,
    },
    {
        id: 6,
        nombre: 'Minidona',
        img: "/img/acompañamiento/dona6.jpg",
        precio: 60000,
    },
    {
        id: 7,
        nombre: 'Minidona',
        img: "/img/acompañamiento/dona7.jpg",
        precio: 70000,
    },
    {
        id: 8,
        nombre: 'Cupcake',
        img: "/img/acompañamiento/cupcake1.jpg",
        precio: 5000,
    },
    {
        id: 9,
        nombre: 'Cupcake',
        img: "/img/acompañamiento/cupcake2.jpg",
        precio: 10000,
    },
    {
        id: 10,
        nombre: 'Cupcake',
        img: "/img/acompañamiento/cupcake3.jpg",
        precio: 12000,
    },
    {
        id: 11,
        nombre: 'Cake Pop',
        img: "/img/acompañamiento/cakepos1.jpg",
        precio: 60000,
    },
    {
        id: 12,
        nombre: 'Cake Pop',
        img: "/img/acompañamiento/cakepos2.jpg",
        precio: 30000,
    },
    {
        id: 13,
        nombre: 'Cake Pop',
        img: "/img/acompañamiento/cakepos3.jpg",
        precio: 35000,
    },

];

let carrito = [];





window.sr = ScrollReveal();
sr.reveal('nav, h1, .card, footer, #carousel', {
    duration: 1300,
    origin: 'botton',
    distance: '-1rem'
});

const agregarProducto = (id) => {
    const cantidadSelector = document.querySelector(`.cantidad-${id}`);
    const rellenoSelector = document.querySelector(`.relleno-${id}`);
    const cantidad = parseInt(cantidadSelector.value);
    const relleno = rellenoSelector.value;
  

    if (cantidad && (relleno==='Manjar' || relleno==='Nutella' || relleno==='Pastelera' || relleno==='Frambuesa')) {

      toastr.success("Agregado al carrito");
  
      const item = stockProductos.find((prod) => prod.id === id);
      const newItem = {
        ...item,
        cantidad,
        relleno,
      };
  
      carrito.push(newItem);
  
      mostrarCarrito();
    } else {
    
      toastr.error("Debes seleccionar la cantidad y el relleno");
    }
  };
  var total = 0;
 


  const mostrarCarrito = () => {
    total = 0;
    const contCarrito = document.querySelector(".contcarrito");
    const subTotal = document.querySelector('#subtotal');
    contCarrito.innerHTML = '';
  
    if (carrito.length > 0) {
      carrito.forEach((prod) => {
        const { id, nombre, precio, img, relleno, cantidad } = prod;
        const subtotal = precio * cantidad;
        total = subtotal + total;
        subTotal.innerText = 'Subtotal: '+total;
  
        contCarrito.innerHTML += `
          <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center" style="margin-top: 0.01rem;">
            <div class="col">
              <div class="card h-100 card-carrito m-t-2 card-carrito">
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="title-subtotal"><span class="nombreProducto">${nombre}</span></h5>
                  <h6 class="title-subtotal">Cantidad: <span class="cantidadProducto">${cantidad}</span></h6>
                  <h6 class="title-subtotal">Relleno: <span class="rellenoProducto">${relleno}</span></h6>
                  <h6 class="title-subtotal">Precio: <span class="precioProducto">${subtotal}</span></h6>
                </div>
                <div class="card-footer md-flex justify-content-center">
                  <a style="display: block; margin: 0 auto; width: 80%;" class="btn btn-outline-danger" onclick="eliminarProducto(${id})">Eliminar producto</a>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      
    }
    console.log(carrito)
  };

  const eliminarProducto = (id) => {
    const index = carrito.findIndex((prod) => prod.id === id);
    if (index !== -1) {
      carrito.splice(index, 1);
      mostrarCarrito();
      let subtotal = 0;
      carrito.forEach((prod) => {
        const { precio, cantidad } = prod;
        subtotal += precio * cantidad;
      });
  
      // Actualizar el elemento HTML del subtotal
      const subTotalElement = document.querySelector('#subtotal');
      subTotalElement.innerText = 'Subtotal: '+subtotal;


    }

  };
  const vaciarCarrito = (id) => {
    carrito = [];
    mostrarCarrito();
    let subtotal = 0;
    carrito.forEach((prod) => {
      const { precio, cantidad } = prod;
      subtotal += precio * cantidad;
    });

  
    const subTotalElement = document.querySelector('#subtotal');
    subTotalElement.innerText = 'Subtotal: '+subtotal;
  };
var mensaje = '';
  const comprar = () => {

    const nombreProducto = document.getElementsByClassName('nombreProducto');
    const cantidadProducto = document.getElementsByClassName('cantidadProducto');
    const rellenoProducto = document.getElementsByClassName('rellenoProducto');

    const arrayNombres = Array.from(nombreProducto).map((element) => element.innerHTML);
    const arrayCantidades = Array.from(cantidadProducto).map((element) => element.innerHTML);
    const arrayRellenos = Array.from(rellenoProducto).map((element) => element.innerHTML);
    
    
    
    for(var i = 0; i<arrayNombres.length;i++){
        mensaje = mensaje + arrayCantidades[i] + ' ' + arrayNombres[i]+' '+arrayRellenos[i]+'%0A';
    }

   
    if(carrito.length>0){
    location.href = 'https://wa.me/56993161234?text=Hola,%20buenas%20tardes,%20quiero:%0A' + mensaje;
    }else toastr.error("El carrito está vacío.");
  };





var boton = document.getElementById("toggleButton");
var overlay = document.getElementById("overlay");


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

function cerrarCarrito() {
    var elemento = document.querySelector('.all');
    elemento.style.opacity = '1';

    overlay.style.opacity = '0';
    overlay.style.display = "none";
    i++;
}
