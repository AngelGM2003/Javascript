function mayor(){
    num1 = prompt("Introduce un número");
    num2 = prompt("Introduce un número");
    num3 = prompt("Introduce un número");
    num4 = prompt("Introduce un número");

    if(num1>num2 && num1>num3 && num1>num4){
        return num1;
    }else if(num2>num1 && num2>num3 && num2>num4){
        return num2;
    }else  if(num3>num1 && num3>num2 && num3>num4){
        return num3;
    }else  if(num4>num1 && num4>num2 && num4>num3){
        return num4;
    }


}

function dado(){
    return Math.floor((Math.random()*6)+1);
}

function tiradas(){
    let resultado = -1;
    let uno = 0;
    let dos = 0;
    let tres = 0;
    let cuatro = 0;
    let cinco = 0;
    let seis = 0;

    for(i=0; i<6000; i++){
        resultado = dado();
        if(resultado == 1){
            uno++;
        }else if(resultado == 2){
            dos++;
        }else if(resultado == 3){
            tres++;
        }else if(resultado == 4){
            cuatro++;
        }else if(resultado == 5){
            cinco++;
        }else if(resultado == 6){
            seis++;
        }

    }
    document.write("Veces 1: " + uno + "</br>");
    document.write("Veces 2: " + dos + "</br>");
    document.write("Veces 3: " + tres + "</br>");
    document.write("Veces 4: " + cuatro + "</br>");
    document.write("Veces 5: " + cinco + "</br>");
    document.write("Veces 6: " + seis + "</br>");

}

function volumen(radio) {
    
    if (radio < 0) {
        document.write("El radio no puede ser negativo.");
    }
    const volumen = (4/3) * Math.PI * (radio*radio*radio);
    return volumen;
}

function area(){
    if(radio<0){
        document.write("El radio no puede ser negativo.");
    }
    const area = Math.PI * (radio*radio);
    return area;
}

function potencia(num, pot){
    if(pot==0){
        return 1;
    }else if(pot>0){
        return num*potencia(num, pot-1);
    }
    
}



