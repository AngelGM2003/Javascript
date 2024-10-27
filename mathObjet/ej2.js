//1,5,7,8

function ecuacion(){
    let a = parseInt(prompt("Introduzca el valor de la variable a"));
    let b = parseInt(prompt("Introduzca el valor de la variable b"));
    let c = parseInt(prompt("Introduzca el valor de la variable c"));
    let raiz = -1;
    let sol1 = -1;
    let sol2 = -1;
    if(isNaN(a)||isNaN(b)||isNaN(c)){
        document.write("No ha introducido 3 números");
    }else if(isNaN(Math.sqrt(((b*b)-(4*a*c))))){
        document.write("La raiz es de un número negativo.");
    }
    else{
        raiz = Math.sqrt(((b*b)-4*a*c));
        sol1 = (-b + (raiz)) / (2*a);
        sol2 = (-b - (raiz)) / (2*a);
        document.write("<p>La solución 1 es: " + sol1 + "</p>");
        document.write("<p>La solución 2 es: " + sol2 + "</p>");
        
    }


}