angular.module( 'tuto.phone', ['ngResource'])

.factory('Phone', ['$resource',
  function($resource){
    return $resource('data_store/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

