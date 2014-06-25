angular.module( 'tuto', ['ngRoute', "tuto.home", "tuto.search", "tuto.about", "tuto.by_brand"])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      otherwise({
        redirectTo: '/home'
      });
  }
])

.run( function run () {
})

.controller( 'AppCtrl', ["$scope", "$location", function AppCtrl ( $scope, $location ) {
    $scope.$on('$routeChangeStart', function(next, current){
      console.log("The route changed from ");
    });
  }]
);
