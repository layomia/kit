angular.module('causeService', [])
  .factory('Cause', function($http) {

    // create a new object
    var causeFactory = {};
    var causeRoute = "https://kitbackend.herokuapp.com/api/causes";

    // get a single cause
    causeFactory.get = function(id) {
      return $http.get(causeRoute + '/' + id);
    };

    // get all causes
    causeFactory.all = function() {
      return $http.get(causeRoute + '/');
    };

    causeFactory.allForCommunity = function(id) {
      return $http.get("https://kitbackend.herokuapp.com/api/community/" + id + "/causes");
    }

    // create a cause
    causeFactory.create = function(causeData) {
      console.log("attempting to create");
      return $http.post(causeRoute + '/', causeData);
    };

    // update a cause
    causeFactory.update = function(id, causeData) {
      return $http.put(causeRoute + '/' + id, causeData);
    };

    // delete a cause
    causeFactory.delete = function(id) {
      return $http.delete(causeRoute + '/' + id);
    };

    return causeFactory;

  });
