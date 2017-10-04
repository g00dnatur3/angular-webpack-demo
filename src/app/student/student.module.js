import angular from 'angular';
import ngRoute from 'angular-route';
import ngMessages from 'angular-messages';
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
  return {
    require:'ngModel',
    restrict:'A',
    link: function (scope, el, attrs, ctrl) {
      // angular expert Todd Motto suggests using $validators
      // https://toddmotto.com/moving-from-ng-model-parsers-to-ng-model-validates-ng-messages/
      ctrl.$validators.format = function(modelValue, viewValue) {
        const val = modelValue || viewValue;
        //if (val.length > 0) return true;
        return false;
      }
      ctrl.$validators.unique = function(modelValue, viewValue) {
        const val = modelValue || viewValue;
        //if (val.length > 0) return true;
        return false;
      }
    }
  }
}

const MODULE_NAME = 'student';

angular.module(MODULE_NAME, [ngRoute, ngMessages])
  .controller('StudentCtrl', StudentCtrl)
  .config(routes)
  .service('StudentService', StudentService)
  .directive('validateEmail', validateEmail);

export default MODULE_NAME;

