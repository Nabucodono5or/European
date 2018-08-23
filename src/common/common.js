import angular from 'angular';
import navbarModule from './navbar/navbar';
import heroimageModule from './heroImage/heroimage';
import testimonialsModule from './testimonials/testimonials';

let commonModule = angular.module('commonModule', [navbarModule, heroimageModule, testimonialsModule])

.name;

export default commonModule;
