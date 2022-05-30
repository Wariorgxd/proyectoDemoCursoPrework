
function piedraPapelTijera(eleccion){
    switch (eleccion) {
        case "piedra":
            return "ganaste";
        case "papel":
            return "perdiste";
        case "tijera":
            return "perdiste";
        default:
            return "Tienes que seleccionar piedra, papel o tijera"
    }
}

console.log(piedraPapelTijera("papel"));

if (false === !true) {
     console.log(false == true) 
    } else { 
        console.log(true === !false) 
    }
    