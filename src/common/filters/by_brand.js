angular.module( 'tuto.by_brand', []).
  filter('byBrand', ["$filter", function($filter) {
      return function(items, brands) {
        if (angular.isUndefined(brands) || _.isEmpty(brands)) return items;
        var result = [];
        _.each(brands, function(brand){
          result.push($filter('filter')(items, {brand: brand}));
        });
        return _.flatten(result);
      }
    }]
  );