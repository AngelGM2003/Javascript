let segundos = 60;
function contador(){
    if(segundos >= 0){
        document.write(segundos + " ");
        segundos--;
        setTimeout(contador, 1000);
        

    }else{
        document.write("¡Tiempo!");
        window.location.href = "https://www.google.com/?hl=es";
    }
}
