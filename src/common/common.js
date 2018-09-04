import angular from 'angular';
import navbarModule from './navbar/navbar';
import heroimageModule from './heroImage/heroimage';
import footerModule from './footer/footer';
import reservationModule from './reservation/reservation';
import cartelaMenuModule from './cartelamenu/cartelamenu';



let commonModule = angular.module('commonModule',
[
  navbarModule,
  heroimageModule,
  footerModule,
  reservationModule,
  cartelaMenuModule
])

.name;

export default commonModule;
