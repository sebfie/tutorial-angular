angular.module( 'tuto.about', [
  'ngRoute'
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'src/app/about/about.tpl.html'
      })
  }
])