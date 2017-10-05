const submitButton = () => {
  return {
    require:'^form',
    restrict:'E',
    link: function (scope, el, attrs, form) {
      const button = angular.element('<button type="submit" class="margin-top-10 btn btn-primary">Submit</button>');
      el.append(button);

      const keys = Object.keys(form).reduce(function(result, key){
        if (!key.startsWith('$')) result.push(key);
        return result;
      }, []);

      const isValidMap = {}
      const isPristineMap = {}

      function hasRequired() {
        return keys.every(function(key) {
            if (form[key].$error.required) {
              return form[key].$viewValue && form[key].$viewValue.length > 0;
            }
            return true;
        })
      }

      function isValid() {
        return hasRequired() && Object.values(isValidMap).every(function(val) {
          return val;
        })
      }

      function isPristine() {
        return Object.values(isPristineMap).every(function(val) {
          return val;
        })
      }

      function update() {
        // if form is complete & valid, enable button
        if (keys.length === Object.keys(isPristineMap).length 
          && keys.length === Object.keys(isValidMap).length) {
          if (isValid() && !isPristine()) button.removeAttr('disabled');
          else button.attr('disabled','');
        }
      }

      // watch for form changes
      keys.forEach(function(key) {
        scope.$watch('studentForm.' + key + '.$valid', function(valid) {
          isValidMap[key] = valid;
          update()
        }, true)
        scope.$watch('studentForm.' + key + '.$pristine', function(pristine) {
          isPristineMap[key] = pristine;
          update();
        }, true)
      });
    }
  }
}

export default submitButton;