// ws 3 1,2,7,9 y 3b tarjeta credito
function invierteCadena(cad_arg){
    cadena = prompt("Introduce una frase");
    let cInv = [];
    let c = 0;
    for(i = cadena.length; i >= 0 ; i--){
        cInv[c] = (cadena.charAt(i));
        c++;

    }
    return cInv;

}

function inviertePalabra(){

    let cadena = prompt("Introduce una cadena");
    let arr  = cadena.split(" ");
    for(i = arr.length - 1; i>=0; i--){
        document.write(arr[i] + " ");
    }

    
}

function iPalabra(){

    let cadena = prompt("Introduce una cadena");
    let arr  = cadena.split(" ");
    let c = 0;
    let cInv = [];
    let palabra;

    for(i = 0; i<arr.length; i++){
        palabra = arr[i];
        for(j = palabra.length-1; j >= 0 ; j--){
            cInv[c] = palabra.charAt(j);
            c++;
    
        }
            document.write(cInv);
    }

    
}

function palabraLarga(){
    let cadena = prompt("Introduce una cadena");
    
}
