(function() {
  'use strict';

  angular
    .module('kit')
    .controller('ArtifactController', ArtifactController);

  /** @ngInject */
  function ArtifactController($timeout, $location, $stateParams, Artifact, userInfo, general) {
    if (!general.userLoggedIn()) {
      // display flash saying user must be logged in
      $location.path("/");
    }
    var vm = this;
    vm.artifact = {};
    vm.artifactId = $stateParams.id;

    Artifact.get(vm.artifactId)
      .success(function(data) {
        vm.artifact = data;
        console.log(vm.artifact);
      })
      .error(function(data) {
        console.log("Trouble getting artifact");
      })

  }
})();
