// scripts.js

// Añadir un desplazamiento suave a los enlaces de la barra de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // var toggleButton = document.getElementById("toggleButton1");
    // var collapseContent = document.getElementById("collapseContent1");
    // console.log(toggleButton.textContent);
    // if(toggleButton.textContent === "Ver más"){
    //     console.log("Son iguales");
    // }
         // Espera a que el DOM esté completamente cargado

            // Selecciona todos los botones
            var botones = document.querySelectorAll('button');
            
            // Añade un manejador de eventos a cada botón
            botones.forEach(function(boton) {
                boton.addEventListener('click', function(event) {
                    // Obtén el ID del botón clicado
                    // var botonId = event.target.botonId;
                    var toggleButton = document.getElementById(event.target.botonId);
                    // Muestra el ID en la consola
                    console.log("ID del botón clicado:", toggleButton);
                });
                //Añade un evento de escucha al evento de colapso
        $(collapseContent).on('show.bs.collapse', function () {
            toggleButton.setAttribute('aria-expanded', 'true');
            toggleButton.textContent = 'Ver menos';
        });
        
        $(collapseContent).on('hide.bs.collapse', function () {
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.textContent = 'Ver más';
        });
            });
     
    });

    // Version 1
    // function escribirEnPantalla(texto){
    //     let arr=texto.split("");
    //     i=0;
    //    let intervalo= setInterval(function(){
    //       if(i==arr.length-1){ 
    //         document.getElementById("titulo").innerHTML+=arr[i];
    //         clearInterval(intervalo);} 
    //       else {
    //       if(arr[i]==" "){
    //        document.getElementById("titulo").innerHTML+=arr[i];
    //        document.getElementById("titulo").innerHTML+=arr[i+1];
    //         i+=2;
    //       }else{
    //       document.getElementById("titulo").innerHTML+=arr[i];
    //       i++;
    //         }
    //       }
    //     },150); 
    //   }
      
    //   escribirEnPantalla("< Hola, soy Jonathan Novoa />");

    // Version 2
    function escribirEnPantalla(texto) {
        let arr = texto.split("");
        let i = 0;
        let intervalo = setInterval(function() {
            if (i < arr.length) {
                document.getElementById("titulo").innerHTML += arr[i];
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, 150);
    }

    escribirEnPantalla("<Hola, soy Jonathan Novoa/>");