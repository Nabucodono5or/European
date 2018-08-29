import angular from 'angular';
import ngMap from 'ngmap';
import googleMapComponent from './googleMap.component';

let googleMapModule = angular.module('googleMapModule', [ngMap])

  .component('googleMap', googleMapComponent)

  .name;

export default googleMapModule;
