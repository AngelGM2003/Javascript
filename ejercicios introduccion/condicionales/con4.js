function verificardesc(){
    let num = prompt("Introduce el numero para verificar descuento:");
    if(num >= 100){
        num = num*0.85;
        alert("El nuevo precio es " + num + "€");

    }else{
        alert("El precio introducido no es apto para un descuento")
    }
}