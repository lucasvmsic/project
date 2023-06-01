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
        alert(nombre);
        alert(relleno);
        alert(cantidad);


    }


    var boton = document.getElementById("toggleButton");
    var overlay = document.getElementById("overlay");
    
    boton.addEventListener("click", function() {
      overlay.style.display = overlay.style.display === "none" ? "block" : "none";
    });
    