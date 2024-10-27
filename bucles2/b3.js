//4.15 4.16 no
//tres valores num columnas altura anchura de susceldas.
function tabla(){
    const ncolumnas = parseInt(prompt("Introduzca el número de columnas que quiere para la tabla"));
    const ancho = parseInt(prompt("Introduce el ancho en pixeles de las celdas de la tabla"));
    const alto = parseInt(prompt("Introduce el alto en pixeles de las celdas de la tabla"));
    let i=0;
    document.write("<table border=" + 0 + " cellspacing=" + 2+ " bgcolor=black width=" + 200 + ">");
    document.write("<tr bgcolor= white height=" + alto + ">");
    while(ncolumnas>0){
        document.write("<td width=" + ancho + ">&nbsp</td>");
        ncolumnas--;
    }
    document.write("</tr>");
    document.write("</table>");
}