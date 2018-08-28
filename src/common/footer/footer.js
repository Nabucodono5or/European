import angular from 'angular';
import footerComponent from './footer.component';

let footerModule = angular.module('footerModule', [])

.component('footer', footerComponent)

.name;

export default footerModule;
