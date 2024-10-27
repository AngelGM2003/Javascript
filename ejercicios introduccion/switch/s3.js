function operacion(){
    const num1 = parseInt(prompt("Introduzca un número"));
    const num2 = parseInt(prompt("Introduzca otro número"));
    const signo= prompt("Introduzca el signo de la operacion");

    switch(signo){
        case "+":
            alert("La solución de la operación es: " + (num1 + num2));
            break;
        case "-":
            alert("La solución de la operación es: " + (num1 - num2));
            break;
        case "*":
            alert("La solución de la operación es: " + (num1 * num2));
            break;
        case "/":
            alert("La solución de la operación es: " + (num1 / num2));
            break;

        default:
            alert("No ha introducido un signo correcto");
        
            
    }
}


