(function() {
  'use strict';

  angular
    .module('kit')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($timeout, $location, $stateParams, Artifact, userInfo, general, Bid) {
    if (!general.userLoggedIn()) {
      // display flash saying user must be logged in
      $location.path("/");
    }
    var vm = this;
    vm.currentUser = general.currentUser();
    vm.pageUserId = $stateParams.id;

    /*if (vm.currentUser.id != vm.pageUserId) {
      $location.path("/");
    }*/

    vm.userArtifacts = [];

    Artifact.getForUser(vm.pageUserId)
      .success(function(data){
        vm.userArtifacts = data;
        console.log(vm.userArtifacts);
      })
      .error(function(data) {
        console.log("Trouble getting page user artifacts");
      })
  }
})();
