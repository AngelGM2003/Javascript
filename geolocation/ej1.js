function success(pos){
    const crd = pos.coords;
    
    if(pos){
        document.write("Latitud: " + crd.latitude  + " ");
        document.write("Longitud: "  + crd.longitude);

    }
 
}

function error(err){
    console.warn("Error " + err.code + " " + err.message)
}
navigator.geolocation.getCurrentPosition(success, error);