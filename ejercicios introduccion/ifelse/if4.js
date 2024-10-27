function numhermanos(){
    const her = parseInt(prompt("Introduzca el numero de hermanos que tiene"));
    let cant = parseInt(prompt("Introduzca la cantidad"));

    if(her <= 3 && her > 0){
        cant = cant*0.95;
        alert("La cantidad con descuento seria: " + cant + "€");

    }else if(her > 3){
        cant = cant*0.85;
        alert("La cantidad con descuento seria: " + cant + "€");
        
    } else if(her < 1){
        alert("Al no tener hermanos la cantidad no tiene descuento por lo que se quedaría en: " + cant + "€");
        
    }
}