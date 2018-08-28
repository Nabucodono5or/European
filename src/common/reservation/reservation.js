import angular from 'angular';
import reservationComponent from './reservation.component';

let reservationModule = angular.module('reservationModule', [])

.component('reservation', reservationComponent)

.name;

export default reservationModule;
