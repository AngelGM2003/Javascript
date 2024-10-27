function verificarjubilacion(){
    const edad = parseInt(prompt("Introduzca su edad"));

    if(edad>=67){
        alert("Tiene edad suficiente para jubilarse");

    }else{
        alert("No tiene la edad para jubilarse");
    }
}