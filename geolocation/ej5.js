

function success(pos){

    const crd = pos.coords;
    const destino = [37.192163, -3.616503];

    var map = L.map('map').setView([crd.latitude, crd.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);



    const ruta = L.Routing.control({
        waypoints:[
            L.latLng(crd.latitude,crd.longitude),
            L.latLng(destino)
        ],
        routeWhileDragging:true

    }).addTo(map);

    var marker = L.marker([crd.latitude, crd.longitude]).addTo(map);
    var marker = L.marker([destino]).addTo(map);
    

}

navigator.geolocation.getCurrentPosition(success);