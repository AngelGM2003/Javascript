function tablaNav(){
    document.write("<table>");

    document.write("<tr>");
    
    document.write("<td>" + "Nombre de la aplicacion: " + "</td>" + "<td>" + window.navigator.appCodeName + "</td>" );
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "AppVersion:  " + "</td>" + "<td>" + window.navigator.appVersion + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Conexion: " + "</td>" + "<td>" + window.navigator.connection + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Coockies permitidas: " + "</td>" + "<td>" + navigator.cookieEnabled + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Idioma: " + "</td>" + "<td>" + navigator.language + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Buscador: " + "</td>" + "<td>" + navigator.vendor + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Usuario: " + "</td>" + "<td>" + navigator.userAgent + "</td>");
    document.write("</tr>");

    


    document.write("</table>");
}

tablaNav();