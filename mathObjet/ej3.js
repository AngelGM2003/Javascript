function seno(){
    let n = parseInt(Math.random()*100);
    
    document.write("<table>");

        for(f = 0; f<10; f++){
            document.write("<tr>");
            document.write("<td>" + n + "</td>");
            document.write("<td>" + (Math.sin(n)) + "</td>");
            n++;



            document.write("</tr>");

        }





    document.write("</table>");
    

}