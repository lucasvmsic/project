window.sr = ScrollReveal();
    sr.reveal('nav, h1, .card, footer, #carousel', {
        duration: 1500,
        origin: 'botton',
        distance: '-1rem'
    });

    function captura(){
        var nombre = "dona1";
        var relleno= document.getElementById("dona1.relleno").value;
        var cantidad= document.getElementById("dona1.cantidad").value;
        location.href ='https://wa.me/56921693746?text=Hola,%20Quiero%20'+cantidad+'%20dona%20'+1+'%20con%20'+relleno;


    }
    function cupcake(){

        var relleno1= document.getElementById("cupcake.relleno").value;
        var cantidad1= document.getElementById("cupcake.cantidad").value;
        location.href ='https://wa.me/56921693746?text=Hola,%20Quiero%20'+cantidad1+'%20cupcake%20con%20'+relleno1;
    }



    var boton = document.getElementById("toggleButton");
    var overlay = document.getElementById("overlay");
    
    boton.addEventListener("click", function() {
      overlay.style.display = overlay.style.display === "none" ? "block" : "none";

    });
    

    function cambiarOpacidad() {
        var elemento = document.querySelector('.all');
        if (elemento.style.opacity === '1') {
            elemento.style.opacity = '0.5'; // Cambiar la opacidad a 0.5
        } else {
            elemento.style.opacity = '1'; // Restaurar la opacidad a 1
        }

        var overlay = document.getElementById("overlay");
        if (overlay.style.opacity === '0.5') {
            overlay.style.opacity = '1'; // Cambiar la opacidad a 0.5
        } else {
            overlay.style.opacity = '0.5'; // Restaurar la opacidad a 1
        }
        }