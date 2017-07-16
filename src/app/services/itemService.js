angular.module('itemService', [])
  .factory('Item', function($http) {

    // create a new object
    var itemFactory = {};

    // get a single item
    itemFactory.get = function(id) {
      return $http.get('/api/users/' + id);
    };

    // get all items
    itemFactory.all = function() {
      return $http.get('/api/items/');
    };

    // create an item
    itemFactory.create = function(itemData) {
      return $http.post('/api/items/', itemData);
    };

    // update an item
    userFactory.update = function(id, itemData) {
      return $http.put('/api/items/' + id, itemData);
    };

    // delete an item
    itemFactory.delete = function(id) {
      return $http.delete('/api/items/' + id);
    };

    return itemFactory;

  });
