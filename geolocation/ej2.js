function success(pos){
    let crd = pos.coords;
    var map = L.map('map').setView([crd.latitude, crd.longitude], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var marker = L.marker([crd.latitude, crd.longitude]).addTo(map);

}

navigator.geolocation.getCurrentPosition(success);