//tres valores num columnas altura anchura de susceldas.
function tabla(){
    const ncolumnas = parseInt(prompt("Introduzca el número de columnas que quiere para la tabla"));
    const ancho = parseInt(prompt("Introduce el ancho en pixeles de las celdas de la tabla"));
    const alto = parseInt(prompt("Introduce el alto en pixeles de las celdas de la tabla"));

    document.write("<table border=" + 0 + " cellspacing=" + 2+ " bgcolor=black width=" + 200 + ">");
    document.write("<tr bgcolor= white height=" + alto + ">");
    for(let i=0; i<ncolumnas; i++ ){
        document.write("<td width=" + ancho + ">&nbsp</td>");
    }
    document.write("</tr>");
    document.write("</table>");
}