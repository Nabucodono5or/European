import angular from 'angular';
import servicesComponent from './services.component';
import uiRouter from 'angular-ui-router';

let servicesModule = angular.module('servicesModule', [uiRouter])
  
.component('services', servicesComponent)

.config(function($stateProvider) {

  $stateProvider
    .state('services', {
      url: '/services',
      component: 'services',
      resolve: {
        'title': ['$rootScope', function($rootScope){
          $rootScope.title = "Services | Welcome to great quality foods";
        }],
      }

    });

})

.name;

export default servicesModule;