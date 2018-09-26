import angular from 'angular';
import homeModule from './home/home';
import eventosModule from './eventos/eventos';
import servicesModule from './services/services';
import aboutModule from './about/about';
import testimonialsModule from './testimonials/testimonials';
import subscribeModule from './subscribe/subscribe';
import googleMapModule from './googleMap/googleMap';
import menuModule from './menu/menu';
import galleryModule from './gallery/gallery';

let componentModule = angular.module('componentModule',
[
  homeModule,
  eventosModule,
  servicesModule,
  aboutModule,
  testimonialsModule,
  subscribeModule,
  googleMapModule,
  menuModule,
  galleryModule
])

.name;

export default componentModule;
