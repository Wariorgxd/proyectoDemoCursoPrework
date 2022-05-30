

function presentacion(name, lastname, nickname){
    var completeName = name + " " +lastname;
    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
    }

const tipo = "hola";

console.log(tipo === "hola");

var i = 0;
while(i < 5){
	console.log("El valor de i es: " + i);
	i++;
}

var i = 10;
while( i >= 2){
	console.log("El valor de i es: " + i);
i--;
}

// console.log("Hola, porfa ingresa el resultado de sumar 2 + 2");
// var resultado = prompt("Ingresa el resultado");
// if(resultado === 4){
//     console.log("Correcto");
// }else{
//     console.log("Incorrecto");
// }

function printElements(array = []) {
    return array.forEach(function(element){
        console.log(element);
    });
}

printElements([1,2,3,4,5]);

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 30000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

// function printElements(articulos) {
//     return objetcts.forEach(function(articulos){
//         console.log(element.nombre + " " + element.costo + ".");
//     });
// }

console.log(1 === "1");