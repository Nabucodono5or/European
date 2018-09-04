import angular from 'angular';
import cartelaMenuComponent from './cartelamenu.component';

let cartelaMenuModule = angular.module('cartelaMenuModule', [])

.component('cartelamenu', cartelaMenuComponent)

.name;

export default cartelaMenuModule;
