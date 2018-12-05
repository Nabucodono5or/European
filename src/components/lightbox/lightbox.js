import angular from 'angular';
import lightboxComponent from './lightbox.component';
import imagesLoadedFactory from './imagesloaded.factory';

let lightboxModule = angular.module('lightboxModule', [])

  .component('lightbox', lightboxComponent)

  .directive('emitLastRepeaterElement', imagesLoadedFactory)

  .name;

export default lightboxModule;
