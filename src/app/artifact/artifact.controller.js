(function() {
  'use strict';

  angular
    .module('kit')
    .controller('ArtifactController', ArtifactController);

  /** @ngInject */
  function ArtifactController($timeout, $location, $stateParams, $window, Artifact, userInfo, general, Bid) {
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
    vm.highestBid = 0;
    vm.userBid = 0;
    vm.minBid = 0;
    vm.bids = [];

    Artifact.get(vm.artifactId)
      .success(function(data) {
        vm.artifact = data;
        if (general.currentUser.id === vm.artifact.user_id) {
          vm.userOwnsArtifact = true;
        }
        vm.bids = vm.artifact.bids;
        setBidLevels();
        console.log(vm.bids);
      })
      .error(function(data) {
        console.log("Trouble getting artifact");
      })

    Artifact.allForCommunity(vm.userCommunityId)
      .success(function(data) {
        vm.otherArtifacts = data.splice(0,3);
        console.log(vm.otherArtifacts);
      })

    vm.attemptPlaceBid = function() {
      console.log(vm.userBid, vm.minBid);
      if (vm.userBid < vm.minBid) {
        return;
      }
      var bidInfo = {
        price: vm.userBid,
        user_id: vm.currentUser.id,
        artifact_id: vm.artifactId
      };
      console.log(bidInfo);
      Bid.create(bidInfo)
        .success(function(data) {
          console.log(data);
          //$location.path("artifact/" + vm.artifactId);
          $window.location.reload();
        })
        .error(function(data) {
          console.log(data);
        })
    }

    function setBidLevels() {
      if (vm.bids.length === 0) {
        return;
      }

      for (var bid in vm.bids) {
        if (parseInt(vm.bids[bid].price) > vm.highestBid) {
          vm.highestBid =  parseInt(vm.bids[bid].price);
        }
      }

      vm.minBid = vm.highestBid + 1;
      vm.userBid = vm.minBid;
    }

    vm.goToArtifact = function(artifactId) {
      $location.path("artifact/" + artifactId);
    }

  }
})();
