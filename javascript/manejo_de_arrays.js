var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 30000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

console.log(articulosFiltrados);

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

console.log(nombreArticulos);

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo);

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);

console.log(6 == "6");