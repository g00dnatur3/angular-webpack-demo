import angular from 'angular';
import ngRoute from 'angular-route';
import ngMessages from 'angular-messages';

import 'angularjs-datepicker/src/css/angular-datepicker.css';
import 'angularjs-datepicker'

import routes from './student.routes'
import StudentService from './student.service'


// student controller
class StudentCtrl {
  constructor(StudentService) {
    this.status;
    this.students = [];
  }
  addStudent() {

  }
}

// validate email directive
const validateEmail = (StudentService) => {
  function validateFormat(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
  return {
    require:'ngModel',
    restrict:'A',
    link: function (scope, el, attrs, ctrl) {
      // angular expert Todd Motto suggests using $validators
      // https://toddmotto.com/moving-from-ng-model-parsers-to-ng-model-validates-ng-messages/
      ctrl.$validators.format = function(modelValue, viewValue) {
        const val = modelValue || viewValue;
        return (!val) ? false : validateFormat(val);
      }
      ctrl.$validators.unique = function(modelValue, viewValue) {
        const val = modelValue || viewValue;
        return true;
      }
    }
  }
}

const MODULE_NAME = 'student';

angular.module(MODULE_NAME, [ngRoute, ngMessages, '720kb.datepicker'])
  .controller('StudentCtrl', StudentCtrl)
  .config(routes)
  .service('StudentService', StudentService)
  .directive('validateEmail', validateEmail);

export default MODULE_NAME;

