import angular from 'angular';
import navbarModule from './navbar/navbar';
import heroimageModule from './heroImage/heroimage';
import footerModule from './footer/footer';


let commonModule = angular.module('commonModule', [navbarModule, heroimageModule, footerModule])

.name;

export default commonModule;
