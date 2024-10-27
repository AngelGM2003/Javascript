function obtenerInformacion() {
    const edad = prompt("Introduzca su edad:");
    const nombre = prompt("Introduzca su nombre:");
    const apellidos = prompt("Introduzca sus apellidos:");
    const ciclo = prompt("Introduzca el ciclo que estudia:");

    const mensaje = "Información del Usuario:\n\n" +
                    "Edad: " + edad + "\n" +
                    "Nombre: " + nombre + "\n" +
                    "Apellidos: " + apellidos + "\n" +
                    "Ciclo que estudia: " + ciclo;


    alert(mensaje);
}
