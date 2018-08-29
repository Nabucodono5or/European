import angular from 'angular';

class googleMapController {
  constructor(NgMap){
    NgMap.getMap().then(function (map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    })
  }

/*
myMap(){
  let mapOptions = {
    center: new google.maps.LatLng(51.5, -0.12),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID,
  };

  let map = new google.maps.Map(angular.element('#map'), mapOptions);
}

*/
}

export default googleMapController;
