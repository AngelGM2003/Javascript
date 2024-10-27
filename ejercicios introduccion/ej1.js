function mostrarInformacion() {
    const nombre = prompt("¿Cuál es tu nombre?");
    const apellidos = prompt("¿Cuáles son tus apellidos?");
    const edad = prompt("¿Cuál es tu edad?");

    document.getElementById("nombre").innerText = "Nombre: " + nombre;
    document.getElementById("apellidos").innerText = "Apellidos: " + apellidos;
    document.getElementById("edad").innerText = "Edad: " + edad;
}
