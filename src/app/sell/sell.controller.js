(function() {
  'use strict';

  angular
    .module('kit')
    .controller('SellController', SellController);

  /** @ngInject */
  function SellController($timeout, $location, Artifact, userInfo, general, Cause) {
    var vm = this;

    vm.currentUser = general.currentUser();
    vm.userCommunityId = vm.currentUser.community_id;

    if (!general.userLoggedIn()) {
      // display flash saying user must be logged in
      $location.path("/");
    }

    vm.sellForm = {};
    vm.causes = {};

    Cause.allForCommunity(vm.userCommunityId)
      .success(function(data) {
        for (var x in data) {
          vm.causes[data[x]["name"]] = data[x]["id"];
        }
        console.log(vm.causes);
      })

    vm.attemptSale = function() {
      vm.sellForm.user_id = general.currentUser().id;

      Artifact.create(vm.sellForm)
        .success(function(data) {
          var artifactId = data.obj.id
          $location.path("artifact/" + artifactId);
          console.log(data);
        })
        .error(function(data) {
          console.log(data);
        });
    }

  }
})();
