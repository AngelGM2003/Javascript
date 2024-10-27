function verificarestudios(){
    const edad = parseInt(prompt("Introduzca su edad"));

    if(edad <=5){
        alert("Su estudio correspondiente es el jardin de infancia");
    }else if(edad >=6 && edad<=16){
        alert("Su estudio correspondiente es la ESO");
    }else if(edad >=17 && edad<=21){
        alert("Su estudio correspondiente es bachillerato o ciclos");
    }else if(edad >=21){
        alert("Su estudio correspondiente es la Universidad");
    }
}