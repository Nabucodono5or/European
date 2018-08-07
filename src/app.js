import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appComponent from './app.component';

angular.module('app', [uiRouter])

.component('app', appComponent)

.name;
