angular.module( 'tuto.home', [
  'ngRoute',
  'tuto.phone'
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'src/app/home/home.tpl.html',
        controller: 'HomeCtrl'
      })
  }
])

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', ["$scope", "Phone", function HomeController( $scope, Phone ) {
    $scope.results = Phone.query()

    $scope.events = [];
    $scope.example_of_watch_need_true = [{ test: ""} , {test2: ""}];

    $scope.$watch("brand", function(newValue){
      if (angular.isUndefined(newValue)) return;

      $scope.events.push("We changed brand to " + newValue.join(","))
    });

    $scope.changeExampleOfWatchNeedTrue = function(){
      $scope.example_of_watch_need_true.push({test3: ""});
    };


    $scope.$watch("example_of_watch_need_true", function(newValue){
      if (angular.isUndefined(newValue)) return;

      $scope.events.push("We watch example_of_watch_need_true change without the third param 'true'")
    });

    $scope.$watch("example_of_watch_need_true", function(newValue){
      if (angular.isUndefined(newValue)) return;

      $scope.events.push("We watch example_of_watch_need_true change using the third param 'true'")
    }, true);


  }]
)