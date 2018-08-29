import angular from 'angular';
import menuComponent from './menu.component';
import uiRouter from 'angular-ui-router';

let menuModule = angular.module('menuModule', [uiRouter])

.component('menu', menuComponent)

.config(function($stateProvider) {

  $stateProvider
    .state('menu', {
      url: '/menu',
      component: 'menu',
      resolve: {
        'title': ['$rootScope', function($rootScope){
          $rootScope.title = "Menu | Welcome to great quality foods";
        }],
      }

    });

})

.name;

export default menuModule;
