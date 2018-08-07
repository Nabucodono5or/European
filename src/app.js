import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appComponent from './app.component';
import componentModule from './components/component';

angular.module('app', [uiRouter, componentModule])

.component('app', appComponent)

.name;
