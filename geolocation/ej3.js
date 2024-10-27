// Initialize the platform object
var platform = new H.service.Platform({
  'apikey': 'CJLPS-KH3GSvwtH4YuunKKGYRWR8nMhtXoZK-GCBnUI'
});

var maptypes = platform.createDefaultLayers();

  function success(pos){
    let crd = pos.coords;

    var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
          zoom: 10,
          center: { lat: crd.latitude, lng: crd.longitude }
        });
    
    var svg = '<svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path fill="#2D6AC4" d="M12 2C8.13 2 5 5.13 5 9c0 4.97 7 13 7 13s7-8.03 7-13c0-3.87-3.13-7-7-7z"/>' +
        '<circle cx="12" cy="9" r="4" fill="#FFFFFF"/>' +
        '</svg>';
    
    var icon = new H.map.Icon(svg, {
        anchor: { x: 24, y: 58 } // x: center horizontally, y: slightly below the bottom tip of the marker
    });
    
    var marker = new H.map.Marker({ lat: crd.latitude, lng: crd.longitude }, { icon: icon });
    
    // Add the marker to the map:
    map.addObject(marker);
  }
 
  navigator.geolocation.getCurrentPosition(success);

 