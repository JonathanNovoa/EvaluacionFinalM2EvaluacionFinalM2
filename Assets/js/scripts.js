// Version 1 Texto escrito en pantalla
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

// Version 2 Texto escrito en pantalla
function escribirEnPantalla(texto) {
    let arr = texto.split("");//Dividir una cadena de texto en arreglo de caracteres individuales
    let i = 0;
    let intervalo = setInterval(function () {
        if (i < arr.length) {
            document.getElementById("titulo").innerHTML += arr[i];
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 150);
}

escribirEnPantalla("<Hola, soy Jonathan Novoa/>");

//
const formEnvioDatos = document.getElementById("formEnvioDatos");

// formEnvioDatos.addEventListener("submit", function (event) {
//     event.preventDefault();

function formularioEnvio() {
    const nombre = document.getElementById("name").value;
    const correo = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;
    const btn = document.getElementById("btnForm");
    const msn = document.getElementById("mensajeForm");

    if (nombre == "" || correo == "" || mensaje == "") {
        msn.innerText = `Por favor, ingrese todos los datos de contacto.`;
        btn.style.backgroundColor = "#FF0000";
    } else {
        msn.innerText = `Gracias por contactarse con nosotros, ${nombre}.`;
        btn.style.backgroundColor = "#11e956";
        formEnvioDatos.reset();
    }

    console.log(nombre, correo, mensaje)

}
// });
