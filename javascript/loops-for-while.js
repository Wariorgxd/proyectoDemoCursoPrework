var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes) {
    console.log(`Hola, ${estudiantes}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}