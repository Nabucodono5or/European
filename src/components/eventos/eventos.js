import angular from 'angular';
import eventosComponent from './eventos.component';
import uiRouter from 'angular-ui-router';

let eventosModule = angular.module('eventosModule', [uiRouter])

.component('eventos', eventosComponent)

.config(function($stateProvider) {

  $stateProvider
    .state('eventos', {
      url: '/eventos',
      component: 'eventos',
    });

})

.name;

export default eventosModule;
