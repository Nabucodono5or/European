import angular from 'angular';

class googleMapController {
  constructor(NgMap){
    NgMap.getMap().then(function (map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    })
  }

}

export default googleMapController;
