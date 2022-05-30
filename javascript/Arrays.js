//Arrays

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);

var masFrutas = frutas.push("Uvas");
console.log(frutas);
console.log(frutas[4]);

var ultimo = frutas.pop("Uvas");
console.log(frutas);

var nuevaLongitud = frutas.unshift("Uvas");
console.log(frutas)

var borrarFruta = frutas.shift("Uvas");
console.log(frutas);

var posicion = frutas.indexOf("Cereza");
console.log(posicion);
