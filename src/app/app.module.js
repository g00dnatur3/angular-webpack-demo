import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import angular from 'angular';

import './app.css';

import student from './student/student.module.js'

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.helloWorld = 'Hello World'
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [student])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)

export default MODULE_NAME;