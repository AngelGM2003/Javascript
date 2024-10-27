function multiplo(){
    let num = parseInt(prompt("Introduzca un número"));

    switch (true){
        case (num%2 == 0):
            alert("El número introducido es par");
            break;
        case (num%3 == 0):
            alert("El número introducido es múltiplo de 3");
            break;
        case (num%5 == 0):
            alert("El número introducido es múltiplo de 5");
            break;
        default:
            alert("El número introducido no es par ni múltiplo de 3 ni múltiplo de 5")

    }

}