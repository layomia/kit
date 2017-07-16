angular.module('artifactService', [])
  .factory('Artifact', function($http) {

    // create a new object
    var artifactFactory = {};

    // get a single artifact
    artifactFactory.get = function(id) {
      return $http.get('/api/users/' + id);
    };

    // get all artifacts
    artifactFactory.all = function() {
      return $http.get('/api/artifacts/');
    };

    // create an artifact
    artifactFactory.create = function(artifactData) {
      return $http.post('/api/artifacts/', artifactData);
    };

    // update an artifact
    userFactory.update = function(id, artifactData) {
      return $http.put('/api/artifacts/' + id, artifactData);
    };

    // delete an artifact
    artifactFactory.delete = function(id) {
      return $http.delete('/api/artifacts/' + id);
    };

    return artifactFactory;

  });
