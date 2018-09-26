import angular from 'angular';
import galleryComponent from './gallery.component';
import uiRouter from 'angular-ui-router';

let galleryModule = angular.module('galleryModule', [uiRouter])
  
.component('gallery', galleryComponent)

.config(function($stateProvider) {

  $stateProvider
    .state('gallery', {
      url: '/gallery',
      component: 'gallery',
      resolve: {
        'title': ['$rootScope', function($rootScope){
          $rootScope.title = "Gallery | Welcome to great quality foods";
        }],
      }

    });

})

.name;

export default galleryModule;