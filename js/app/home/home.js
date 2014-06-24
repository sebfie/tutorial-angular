angular.module( 'tuto.home', [
  'ngRoute'
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'js/app/home/home.tpl.html',
        controller: 'HomeCtrl'
      })
  }
])

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', ["$scope", function HomeController( $scope ) {

  }]
)