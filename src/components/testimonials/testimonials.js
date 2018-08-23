import angular from 'angular';
import testimonialscomponent from './testimonials.component';

let testimonialsModule = angular.module('testimonialsModule', [])

  .component('testimonials', testimonialscomponent)

  .name;

export default testimonialsModule;
