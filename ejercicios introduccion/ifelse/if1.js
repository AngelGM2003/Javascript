function verificaricardo(){
    const nombre = prompt("Introduce tu nombre");
    const ap1 = prompt("Introduce tu primer apellido");
    const ap2 = prompt("Introduce tu segundo apellido");

    if(nombre == "Ricardo"){
        alert("Sus apellidos son " + ap1 + " " + ap2);
    }else{
        document.body.innerHTML += "Apellidos: " + ap1 + " " + ap2;
    }
}