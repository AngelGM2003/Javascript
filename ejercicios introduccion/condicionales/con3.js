function edadzona(){
    const edad = prompt("Introduce tu edad");
    let loc = prompt("Introduce tu localidad de nacimiento");
    loc = loc.toLowerCase();
    if(edad == 25 && loc == "madrid"){
        alert("¡Enhorabuena!");
    }
}