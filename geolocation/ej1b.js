function radianes(grados){
    let rad = grados*(Math.PI()/180);

    return rad;
}

function posAhora(pos){
    let crd = pos.coords;

}
navigator.geolocation.getCurrentPosition(posAhora, error);



function success(pos){
    const crd = pos.coords;
    let rec = pos.coords;
    



    document.write("Latitud: " + crd.latitude + " ");
    document.write("Longitud: " + crd.longitude);
    document.write("Distancia recorrida: ");
}

function error(err){
    console.warn("ERROR " + err.code + " " + err.message);
}

navigator.geolocation.watchPosition(success, error);