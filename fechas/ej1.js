// worksheet 1: 1, 2, 3, 4, 5
function fecha(){
    let fechaActual = new Date();
    document.write("<p>" + fechaActual.getFullYear() + "</p>");
    document.write("<p>" + (fechaActual.getMonth() + 1) + "</p>");
    document.write("<p>" + fechaActual.getDate() + "</p>");
    document.write("<p>" + fechaActual.getHours() + "</p>");
    document.write("<p>" + fechaActual.getMinutes() + "</p>");
    document.write("<p>" + fechaActual.getSeconds() + "</p>");


}