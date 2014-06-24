angular.module( 'tuto.search', [])

.directive("search", function() {
  return {
    restrict: "AE",
    link: function(scope, elem, attrs) {
      console.log(elem);
    }
  };
});

