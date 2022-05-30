var miAuto = {

};

function auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.detalleDelAuto = function() {
        return `${this.marca} ${this.modelo} del año ${this.anio}`;
    }
};

var miAutoNuevo = new auto('Ford', 'Mustang', 1969);

console.log(miAutoNuevo);

var miAutoNuevo2 = new auto('Chevrolet', 'Elcarro', 1969);

for(var i = 0; i<=30; i++){
    console.log(new auto('Chevrolet', 'Elcarro', 19 + i));
}
