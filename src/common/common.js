import angular from 'angular';
import navbarModule from './navbar/navbar';

let commonModule = angular.module('commonModule', [navbarModule])

.name;

export default commonModule;
