
if(false){
    console.log("hola");
} else{
    console.log("soy falso");
}

var numero = 1;
var resultado = numero === 1 ? "Soy el numero 1" : "No soy el numero 1";

console.log(resultado);

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function piedraPapelTijera(opcion){
    var resultado;
    if(opcion === "piedra"){
        resultado = "ganaste"
    } else if(opcion === "papel"){
        resultado = "perdiste"
    } else if(opcion === "tijera"){
        resultado = "perdiste"
    }
    return resultado;
}

console.log(piedraPapelTijera(papel));
