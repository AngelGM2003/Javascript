function tablas(){
    for(i=0; i<=9; i++){
        document.write("<p>Tabla del " + i + "</p>");
        for(j=0; j<=9; j++){
            document.write("<p>" + i + "x" + j + "=" + (i*j) + "</p>");
        }
    }
}