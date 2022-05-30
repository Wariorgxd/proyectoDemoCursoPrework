// 2 TIPOS DE FUNCIONES
    //Funciones declarativas
function miFuncion(){
    return 3;
}
    //Funciones de expresión, tambien conocidas como funciones anónimas
var miFuncion = function(a, b){
    return a + b;
}

console.log(miFuncion(3, 5));

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`)
}

saludarEstudiantes("sebastian");

function sumar(a, b){
    var resultado = a + b;
    return resultado;
}

console.log(sumar(1, 2));