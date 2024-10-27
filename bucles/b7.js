function adivina(){
  const numa = parseInt(prompt("Introduzca el número a adivinar"));
  let a = -1
  do{
    a = parseInt(prompt("Introduce un número"));
    if(a<numa){
       console.log("EL numero que buscas es mayor");
    }else if(a>numa){
        console.log("EL numero que buscas es menor");
     }
  }while(a!=numa);
  document.write("¡Lo has adivinado!");
}