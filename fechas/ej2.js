function operaFechas(){
    let fechaHoy = new Date();
    let fecha85 = new Date();
    let fecha187 = new Date();
    

    //Establecer dias 
    fecha85.setDate(fechaHoy.getDate()+85);
    fecha187.setDate(fechaHoy.getDate()-187);

    //Mostrar las fechas
    document.write(fechaHoy + "</br>");
    document.write(fecha85 + "</br>");
    document.write(fecha187 + "</br>" + "</br>");

    //Sumar 2 años a fecha85
    fecha85.setFullYear(fecha85.getFullYear() + 2);
    document.write(fecha85 + "</br>");

    //Restar 24 horas a fecha187
    fecha187.setHours(fecha187.getHours() - 24);
    document.write(fecha187 + "</br>" + "</br>");

    //fechaResto
    let fechaResto = fecha85-fecha187;
    fechaResto = (fechaResto)/(1000*60*60*24);
    document.write(fechaResto);



    
    
}