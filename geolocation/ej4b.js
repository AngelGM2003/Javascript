function success(pos){
    const platform = new H.service.Platform({
        'apikey': 'wA05svhnLAEHuhLYx0y-wuoC4ApfNY3KYcYDNQPOif8'
    });
    var maptypes = platform.createDefaultLayers();
    var service = platform.getSearchService();



    const crd = pos.coords;

    const latitude = String(crd.latitude);
    const longitude= String(crd.longitude);
    const altitude = String(crd.altitude);

    var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
          zoom: 10,
          center: { lat: crd.latitude, lng: crd.longitude }
        });
      

      service.reverseGeocode({
        at: latitude + ',' + longitude
      }, (result) => {
        result.items.forEach((item) => {

            console.log(item);
         /* ui.addBubble(new H.ui.InfoBubble(item.position, {
            content: item.address.label
          }));*/
        });
      }, alert);


}

navigator.geolocation.getCurrentPosition(success);



