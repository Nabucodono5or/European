import angular from 'angular';
import cardMenuComponent from './cardMenu.component';


let cardMenuModule = angular.module('cardMenuModule', [])

  .component('card', cardMenuComponent)

  .name;

export default cardMenuModule;