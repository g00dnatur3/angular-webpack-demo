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
  constructor(StudentService, $location) {
    const self = this;
    self.$location = $location;
    self._service = StudentService;
    self._service.get(function(err, students) {
      if (err) console.log('get students error: ' + err) //maybe show error to user...
      else {
        //console.log(students);
        self.list = students;
      }
    });
  }
  addStudent() {
    const self = this;
    self._service.put({
      email: self.email,
      firstName: self.firstName,
      lastName: self.lastName,
      birthDate: new Date(self.birthDate)
    }, function(err, student) {
      if (err) console.log('add student error: ' + err) //maybe show error to user...
      else {
        self.list.push(student);
        console.log('add student success: ' + JSON.stringify(student));
        self.$location.path('/student'); //redirect
      }
    })
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
