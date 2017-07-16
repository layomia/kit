angular.module('artifactService', [])
  .factory('Artifact', function($http) {

    // create a new object
    var artifactFactory = {};
    var artifactRoute = "https://kitbackend.herokuapp.com/api/artifacts";

    // get a single artifact
    artifactFactory.get = function(id) {
      return $http.get(artifactRoute + '/' + id);
    };

    // get all artifacts
    artifactFactory.all = function() {
      return $http.get(artifactRoute + '/');
    };

    // create an artifact
    artifactFactory.create = function(artifactData) {
      console.log("attempting to create");
      return $http.post(artifactRoute + '/', artifactData);
    };

    // update an artifact
    artifactFactory.update = function(id, artifactData) {
      return $http.put(artifactRoute + '/' + id, artifactData);
    };

    // delete an artifact
    artifactFactory.delete = function(id) {
      return $http.delete(artifactRoute + '/' + id);
    };

    return artifactFactory;

  });
