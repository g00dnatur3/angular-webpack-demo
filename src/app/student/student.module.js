import angular from 'angular';

import ngRoute from 'angular-route';

class StudentCtrl {
  constructor() {
    this.status;
    this.students = [{firstName: 'John', lastName: 'Doe'}];
  }
}


// student routes
routes.$inject = ['$routeProvider'];
function routes($routeProvider) {
  $routeProvider
  .when('/student', {
    template: require('./student.html'),
    controller: 'StudentCtrl',
    controllerAs: 'student'
  })
}

const MODULE_NAME = 'student';

angular.module(MODULE_NAME, [ngRoute])
  .controller('StudentCtrl', StudentCtrl)
  .config(routes);

export default MODULE_NAME;

