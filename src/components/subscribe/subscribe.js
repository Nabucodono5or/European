import angular from 'angular';
import subscribeComponent from './subscribe.component';

let subscribeModule = angular.module('subscribeModule', [])

  .component('subscribe', subscribeComponent)

  .name;

export default subscribeModule;
