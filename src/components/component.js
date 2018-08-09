import angular from 'angular';
import homeModule from './home/home';
import eventosModule from './eventos/eventos';

let componentModule = angular.module('componentModule', [homeModule, eventosModule])

.name;

export default componentModule;
