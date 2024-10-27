function salir(){
    let a = "";
   
    do{
        a = prompt("Introduce una palabra");
        if(a != "SALIR"){
            document.write(a);
        }
       


    }while(a != "SALIR");
    
}