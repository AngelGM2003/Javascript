let ventanaNueva;

function ventanaConfirmar() {
    ventanaNueva = window.open();
    const conf = ventanaNueva.confirm("¿Desea Confirmar?");
    if(conf){
        ventanaNueva.document.write("Ha confirmado");
    }else{
        ventanaNueva.document.write("Ha cancelado");
    }
}


function ventanaCerrar(){
    ventanaNueva = window.open();
    const intervalo = setInterval(() => {
    if(ventanaNueva.closed){
        clearInterval(intervalo);
        document.write("La ventana se ha cerrado");

    }else{
        document.write("La ventana sigue abierta");
    }}, 1000);
}

function lineaEstado(){
    window.status = "La linea de estado ha cambiado";
    alert("Ha cambiado la linea de estado");
}

function nombreVentana(){
    ventanaNueva = window.open();
    let n = ventanaNueva.prompt("Introduce el nombre de la ventana");
    ventanaNueva.document.title = n;
}

function cerrarActual(){
    window.close();
}
function cerrarNueva(){
    ventanaNueva = window.open();
    ventanaNueva.window.close();
}

function ventanaT(){
    ventanaNueva = window.open("width = 300px height = 100px resizable = yes" );
    ventanaNueva.document.write("Se puede modificar el tamaño de esta ventana.");
    let texto = ventanaNueva.prompt("Introduzca el texto a escribir en la pagina padre");
    document.write(texto);
    
}

function moverVentana(){
    window.moveBy(50,50);
}

function moverVPC(a,b){
    window.moveTo(a,b);
}

function tamanoPos(){
    window.resizeTo(50,50);
    const alto = window.screen.height;
    const ancho = window.screen.width;
    window.moveTo(alto -50, ancho -50);
}

function cambiarTamano(){
    window.resizeTo(450,250);
}

function moverScroll(){
    window.scroll.moveBy(0, 10);
}

function scrollPos(a,b){
    window.scroll.moveTo(a,b);
}

