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
    vm.currentUser = general.currentUser();
    vm.userCommunityId = vm.currentUser.community_id;
    vm.artifact = {};
    vm.artifactId = $stateParams.id;
    vm.userOwnsArtifact = false;
    vm.otherArtifacts = [];

    Artifact.get(vm.artifactId)
      .success(function(data) {
        vm.artifact = data;
        console.log(vm.artifact);
        if (general.currentUser.id === vm.artifact.user_id) {
          vm.userOwnsArtifact = true;
        }
      })
      .error(function(data) {
        console.log("Trouble getting artifact");
      })

    Artifact.allForCommunity(vm.userCommunityId)
      .success(function(data) {
        vm.otherArtifacts = data.splice(0,3);
        console.log(vm.otherArtifacts);
      })

  }
})();
