function ajedrez(){

    const ncolumna = 8;
    const nfila = 8;
    const a = parseInt(prompt("Introduzca el ancho y alto de las celdas en pixeles"));
   
    document.write("<table border=" + 0 + " cellspacing=" + 2+ " bgcolor=black>");
    for(let f = 0; f<nfila; f++){
        document.write("<tr>");
        for(let c=0 ; c<ncolumna; c++){
            if(c%2 === 0 && f%2===0){
                document.write("<td width=" + a + " height= " + a + " bgcolor=black>" + "</td>");

            }else if(c%2 === 0 && f%2 !=0){
                document.write("<td width=" + a + " height= " + a + " bgcolor=white>" + "</td>")
            }else if(c%2 != 0 && f%2 != 0){
                document.write("<td width=" + a + " height= " + a + " bgcolor=black>" + "</td>");

            }else if(c%2 != 0 && f%2 ===0){
                document.write("<td width=" + a + " height= " + a + " bgcolor=white>" + "</td>")
            }
            
        }
        document.write("</tr>");
        
    }




    document.write("</table>");
}