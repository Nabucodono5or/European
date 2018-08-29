import angular from 'angular';
import googleMapComponent from './googleMap.component';

let googleMapModule = angular.module('googleMapModule', [])

  .component('googleMap', googleMapComponent)

  .name;

export default googleMapModule;
