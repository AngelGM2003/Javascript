let alerts = ["Hey, you are awesome", "You are so wonderful"];

let showAlert = (n => {
    alert(alerts[(Math.floor(Math.random()*alerts.length))])
});

showAlert("you ball of fluff");