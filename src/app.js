import './sass/main.scss';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appComponent from './app.component';
import componentModule from './components/component';
import commonModule from './common/common';
import ngAnimate from 'angular-animate';
import angularTouch from 'angular-touch';
import uiBootstrap from 'angular-ui-bootstrap';

angular.module('app', [uiRouter, componentModule, commonModule, ngAnimate, uiBootstrap])

.component('app', appComponent)

.name;
