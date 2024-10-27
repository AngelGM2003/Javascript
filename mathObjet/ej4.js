function foto(){
    let nfoto = parseInt(Math.random()*3+1);

    if(nfoto === 1){
        document.write("<img src=java.jpg alt=java img></img>");
    }else if(nfoto === 2){
        document.write("<img src=jscript.png alt=javascript img></img>");
    }else if(nfoto === 3){
        document.write("<img src=python.png alt= python img></img>")
    }


}