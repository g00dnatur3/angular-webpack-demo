import 'angular';
import 'angular-mocks/angular-mocks';

import home from './home.module.js';

describe('home', () => {

  describe('HomeCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(home);

      angular.mock.inject(($controller) => {
        ctrl = $controller('HomeCtrl', {});
      });
    });

    it('should contain welcome message', () => {
      expect(ctrl.welcome).toBe('Welcome to the Angular Webpack Demo App');
    });

  });
})