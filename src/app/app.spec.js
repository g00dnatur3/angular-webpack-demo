import 'angular';
import 'angular-mocks/angular-mocks';

import app from './app.module.js';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.helloWorld).toBe('Hello World');
    });

  });
})