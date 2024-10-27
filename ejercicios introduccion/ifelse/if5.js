function comprobaraprobado(){
    const ex1 = parseFloat(prompt("Introduzca la nota del primer examen"));
    const ex2 = parseFloat(prompt("Introduzca la nota del segundo examen"));
    const t1 = parseFloat(prompt("Introduzca la nota del primer trabajo"));
    const t2 = parseFloat(prompt("Introduzca la nota del segundo trabajo"));

    const nexamen = ((ex1 + ex2) / 2) * 0.75;
    const ntrabajo = ((t1 + t2) / 2) * 0.25;

    const nfinal = nexamen + ntrabajo;

    if(nfinal >= 5){
        alert("La nota media es " + nfinal.toFixed(2) + ", por lo que has aprobado.");
    } else {
        alert("La nota media es " + nfinal.toFixed(2) + ", por lo que no has aprobado.");

}
}