import angular from 'angular';
import homeModule from './home/home';

let componentModule = angular.module('componentModule', [homeModule])

.name;

export default componentModule;
