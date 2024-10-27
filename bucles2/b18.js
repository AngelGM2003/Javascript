function tabla(){

    const ncolumna = parseInt(prompt("Introduzca el número de columnas"));
    const nfila = parseInt(prompt("Introduzca el número de filas"));
    const ancho = parseInt(prompt("Introduzca el ancho de las celdas en pixeles"));
    const alto = parseInt(prompt("Introduzca el alto de las celdas en pixeles"));

    document.write("<table border=" + 0 + " cellspacing=" + 2+ " bgcolor=black>");
    for(let f = 0; f<nfila; f++){
        document.write("<tr>");
        for(let c=0 ; c<ncolumna; c++){
            document.write("<td width=" + ancho + " height= " + alto + " bgcolor=white>" + "</td>")
        }
        document.write("</tr>");
        
    }




    document.write("</table>");
}