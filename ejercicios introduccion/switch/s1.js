function diasmes(){

let mes = prompt("Ingresa el nombre de un mes: ");
mes = mes.toLowerCase();

switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        alert("El mes " + mes + " tiene 31 dias");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        alert("El mes " + mes + " tiene 30 dias");
        break;
    case "febrero":
        alert("El mes " + mes + " tiene 28 dias");
        break;
    default:
        alert("El nombre del mes no es válido.");
}

}