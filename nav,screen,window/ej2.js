function tablaScreen(){
    document.write("<table>");

    document.write("<tr>");
    
    document.write("<td>" + "Ancho: " + "</td>" + "<td>" + screen.width + "</td>" );
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Alto:  " + "</td>" + "<td>" + screen.height + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Ancho disponible: " + "</td>" + "<td>" + screen.availWidth + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Alto disponible: " + "</td>" + "<td>" + screen.availHeight + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Color Depth " + "</td>" + "<td>" + screen.colorDepth + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Pixel Depth: " + "</td>" + "<td>" + screen.pixelDepth + "</td>");
    document.write("</tr>");

    document.write("</table>");
}

tablaScreen();