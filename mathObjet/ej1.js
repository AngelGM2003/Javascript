function mostrarAleatorio(){
    let num1 = parseInt(prompt("Introduce un número"));
    let num2 = parseInt(prompt("Introduce otro número"));
    let mayor = -1;
    let menor = -1;

    document.write("Número aleatorio entre 0 y 1 = " + Math.random());
    document.write("Numero aleatorio entre 100 y 200 = " + (Math.random()*(200-100)+100));

    if(num1<num2){
        mayor = num2;
        menor = num1;
    }else{
        mayor = num1;
        menor = num2;
    }
    document.write("Número entre num1 y num2 = " + (Math.random()*(mayor-menor)+menor));



}