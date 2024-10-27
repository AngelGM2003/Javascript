function tablaMultiplicar(){
    let num = parseInt(prompt("Introduzca un numero para mostrar su tabla de multiplicar"));

    for(let i = 0; i<10; i++){
        document.write(num + "x" + i + "=" + (num*i) + "  "); 
    }
}