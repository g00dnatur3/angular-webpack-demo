import angular from 'angular';
import ngRoute from 'angular-route';

import 'angularjs-datepicker/src/css/angular-datepicker.css';
import 'angularjs-datepicker'

import submitButton from '../common/directives/submitButton.js'
import validateEmail from '../common/directives/validateEmail.js'
import routes from './student.routes'
import StudentService from './student.service'

// student controller
class StudentCtrl {
  constructor(StudentService) {
    this._service = StudentService;
    this.students = this._service.get();
  }
  addStudent() {
    const student = this._service.put({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate
    })
    this.students.push(student);
  }
}

const MODULE_NAME = 'student';

angular.module(MODULE_NAME, [ngRoute, '720kb.datepicker'])
  .controller('StudentCtrl', StudentCtrl)
  .config(routes)
  .service('StudentService', StudentService)
  .directive('validateEmail', validateEmail)
  .directive('submitButton', submitButton);

export default MODULE_NAME;
