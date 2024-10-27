function nombreHost(){
    alert("El host de la pagina es: " + window.location.hostname);
}

function urlPag(){
    alert("La URL de la pagina actual es: " + window.location.href);
}

function direccion(){
    let d = prompt("Introduzca una direccion:");
    window.location.href = d;
}

function protocolo(){
    alert("El protocolo que se está utilizando es: " + window.location.protocol);
}

function recarga(){
    window.location.reload;
}