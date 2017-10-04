import angular from 'angular';
import ngRoute from 'angular-route';

// student controller
class HomeCtrl {
  constructor() {
    this.status;
    this.welcome = 'Welcome to the Angular Webpack Demo App';
  }
}

// student routes
routes.$inject = ['$routeProvider'];
function routes($routeProvider) {
  $routeProvider
  .when('/', {
    template: require('./home.html'),
    controller: 'HomeCtrl',
    controllerAs: 'home'
  })
}

const MODULE_NAME = 'home';

angular.module(MODULE_NAME, [ngRoute])
  .controller('HomeCtrl', HomeCtrl)
  .config(routes);

export default MODULE_NAME;

