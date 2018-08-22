import angular from 'angular';
import homeModule from './home/home';
import eventosModule from './eventos/eventos';
import servicesModule from './services/services';

let componentModule = angular.module('componentModule', [homeModule, eventosModule, servicesModule])

.name;

export default componentModule;
