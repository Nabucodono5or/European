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
      resolve: {
        'title': ['$rootScope', function($rootScope){
          $rootScope.title = "Eventos | Welcome to great quality foods";
        }],
      }

    });

})

.name;

export default eventosModule;
