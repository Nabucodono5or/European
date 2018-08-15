import './../../sass/components/teste_componente.scss';
import angular from 'angular';
import heroimageComponent from './heroimage.component';

let heroimageModule = angular.module('heroimageModule', [])

.component('heroimage', heroimageComponent)

.name;

export default heroimageModule;
