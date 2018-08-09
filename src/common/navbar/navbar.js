import angular from 'angular';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbarModule', [])

.component('navbar', navbarComponent)

.name;

export default navbarModule;
