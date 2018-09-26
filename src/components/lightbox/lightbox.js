import angular from 'angular';
import lightboxComponent from './lightbox.component';

let lightboxModule = angular.module('lightboxModule', [])

  .component('lightbox', lightboxComponent)

  .name;

export default lightboxModule;
