import angular from 'angular';
import homeModule from './home/home';
import eventosModule from './eventos/eventos';
import servicesModule from './services/services';
import aboutModule from './about/about';

let componentModule = angular.module('componentModule', [homeModule, eventosModule, servicesModule, aboutModule])

.name;

export default componentModule;
