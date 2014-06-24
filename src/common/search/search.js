angular.module( 'tuto.search', [])

.directive("search", function() {
  return {
    restrict: "AE",
    require: "ngModel",
    link: function($scope, elem, attrs, ngModelCtrl) {
      elem = angular.element(elem).find("select")

      elem.select2().on("change",function(event){
        $scope.$apply(function(){
          ngModelCtrl.$setViewValue(event.val);
        });
      });

      ngModelCtrl.$formatters.push(function(value){
        // Called when the value is read from the DOM
        return value;
      });

      ngModelCtrl.$parsers.push(function(value){
        // Call when the value of the ngModel change
        return value;
      });

    }
  };
});

