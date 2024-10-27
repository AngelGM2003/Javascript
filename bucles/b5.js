function suma(){
    let total = 0;
    let num = -1;
    for( let i = 0; i<10; i++){
        num = parseInt(prompt("Introduce un número"));
        total = total+num;
    }
    document.write(total);

}