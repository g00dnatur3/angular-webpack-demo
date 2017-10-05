// student routes
routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {
  $routeProvider
  .when('/student', {
    template: require('./student.html'),
    css: require('./student.css')
  })
  .when('/student-add', {
    template: require('./student.form.html'),
    css: require('./student.css'),
    controller: 'StudentCtrl',
    controllerAs: 'student'
  })
  .when('/student-list', {
    template: require('./student.list.html'),
    css: require('./student.css'),
    controller: 'StudentCtrl',
    controllerAs: 'student'
  })
}
