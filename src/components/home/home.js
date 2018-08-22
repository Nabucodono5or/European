import angular from 'angular';
import homeComponent from './home.component';
import uiRouter from 'angular-ui-router';

let homeModule = angular.module('homeModule', [uiRouter])

.component('home', homeComponent)

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve: {
        'title': ['$rootScope', function($rootScope){
          $rootScope.title = "Home | Welcome to great quality foods";
        }],
      }

    });

})

.name;

export default homeModule;
