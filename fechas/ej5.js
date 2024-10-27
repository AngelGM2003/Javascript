function reloj(){
    let clock = new Date();
    let hora = clock.getHours();
    let min = clock.getMinutes();
    let sec = clock.getSeconds();

    console.clear();
    console.log(hora + " " + min + " " + sec);
    setTimeout(reloj, 1000);
}