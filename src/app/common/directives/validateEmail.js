// validate email directive
const validateEmail = (StudentService, $q) => {
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
        return (!val || val.length === 0) ? true : validateFormat(val);
      }
      ctrl.$asyncValidators.unique = function(modelValue, viewValue) {
        const val = modelValue || viewValue;
        return $q(function(resolve, reject) {
          StudentService.isEmailUnique(val, function(err, result) {
            if (err || !result.unique) reject('email not unique: ' + val);
            else {
              resolve('email is unique: ' + val);
            }
          })
        });
      }
    }
  }
}

export default validateEmail;