import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './app.css';
import angular from 'angular';
import home from './home/home.module.js'
import student from './student/student.module.js'

const app = () => {
  return {
    template: require('./app.html')
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [home, student])
  .directive('app', app)

export default MODULE_NAME;