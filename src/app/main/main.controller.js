(function () {
  'use strict'

  angular
    .module('kit')
    .controller('MainController', MainController)

  /** @ngInject */

  function MainController($timeout, $auth, $location, general, userInfo, Community, Artifact) {
    if (!general.userLoggedIn()) {
      // flash message saying user isn't logged in
      $location.path('/')
    }

    var vm = this;
    vm.currentUser = general.currentUser();
    vm.userCommunityId = vm.currentUser.community_id;
    vm.artifacts = [];

    Artifact.allForCommunity(vm.userCommunityId)
      .success(function(data) {
        vm.artifacts = data;
        console.log(vm.artifacts);
      })

    vm.goToArtifact = function(artifactId) {
      $location.path("artifact/" + artifactId);
    }
  }
})()
