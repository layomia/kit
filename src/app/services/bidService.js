angular.module('bidService', [])
  .factory('bid', function($http) {

    // create a new object
    var bidFactory = {};
    var bidRoute = "https://kitbackend.herokuapp.com/api/bids";

    // get a single bid
    bidFactory.get = function(id) {
      return $http.get(bidRoute + '/' + id);
    };

    // get all bids
    bidFactory.all = function() {
      return $http.get(bidRoute + '/');
    };

    // create a bid
    bidFactory.create = function(bidData) {
      console.log("attempting to create");
      return $http.post(bidRoute + '/', bidData);
    };

    // update a bid
    bidFactory.update = function(id, bidData) {
      return $http.put(bidRoute + '/' + id, bidData);
    };

    // delete a bid
    bidFactory.delete = function(id) {
      return $http.delete(bidRoute + '/' + id);
    };

    return bidFactory;

  });
