import angular from 'angular';
import navbarModule from './navbar/navbar';
import heroimageModule from './heroImage/heroimage';

let commonModule = angular.module('commonModule', [navbarModule, heroimageModule])

.name;

export default commonModule;
