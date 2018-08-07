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
    });

})

.name;

export default homeModule;
