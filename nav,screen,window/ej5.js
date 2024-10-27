function reloj() {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minuto = ahora.getMinutes();
    const segundo = ahora.getSeconds();
    window.status = "Hora actual: " + hora + "/" + minuto + "/" + segundo;
}

setInterval(reloj, 1000);

function cerrarVentana() {
    window.close();
}

function moverVentana() {
    window.moveTo(300, 300);
}

function cambiarTamano() {
    window.resizeTo(200, 200);
}

function pasarSegundoPlano() {
    window.blur(); 
}