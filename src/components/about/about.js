import angular from 'angular';
import aboutComponent from './about.component';
import uiRouter from 'angular-ui-router';
import countScrollFactory from './countscrollfactory'; 

let aboutModule = angular.module('aboutModule', [uiRouter, "scrollSpyModule"])

  .component('about', aboutComponent)

  .directive('countUp', countScrollFactory)

  .config(function($stateProvider){

    $stateProvider
      .state('about', {
        url: '/about',
        component: 'about',
        resolve: {
          'title': ['$rootScope', function($rootScope){
            $rootScope.title = "About | Welcome to great quality foods";
          }],
        }
      })
  })

  .name;

export default aboutModule;
