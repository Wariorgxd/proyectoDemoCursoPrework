var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2019,
    detalleDelAuto: function() {
        return `${this.marca} ${this.modelo} del año ${this.anio}`;
    }
};

console.log(miAuto.marca);

console.log(miAuto.anio);

console.log(miAuto.detalleDelAuto());

