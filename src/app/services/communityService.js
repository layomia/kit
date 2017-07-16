angular.module('communityService', [])
  .factory('Community', function($http) {

    // create a new object
    var communityFactory = {};
    var communityRoute = "https://kitbackend.herokuapp.com/api/community";

    // get a single community
    communityFactory.get = function(id) {
      return $http.get(communityRoute + '/' + id);
    };

    // get all communities
    communityFactory.all = function() {
      return $http.get(communityRoute + '/');
    };

    // create a community
    communityFactory.create = function(communityData) {
      console.log("attempting to create");
      return $http.post(communityRoute + '/', communityData);
    };

    // update a community
    communityFactory.update = function(id, communityData) {
      return $http.put(communityRoute + '/' + id, communityData);
    };

    // delete an community
    communityFactory.delete = function(id) {
      return $http.delete(communityRoute + '/' + id);
    };

    return communityFactory;

  });
