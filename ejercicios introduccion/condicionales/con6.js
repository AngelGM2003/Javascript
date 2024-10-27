function verificacarnet(){
    const loc = prompt("Introduce la ciudad donde vive");
    const edad = parseInt(prompt("Introduce tu edad"));

    if(loc == "Madrid" && edad>=18 && edad<=30){
        alert("Puedes acceder al carnet de empresarios emprendedores")
    }else{
        alert("No puedes acceder al carnet de empresarios emprendedores");
    }
}