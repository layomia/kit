(function() {
  'use strict';

  angular
    .module('kit')
    .controller('SellController', SellController);

  /** @ngInject */
  function SellController($timeout, $location, Artifact, userInfo, general) {
    var vm = this;

    if (!general.userLoggedIn()) {
      // display flash saying user must be logged in
      $location.path("/");
    }

    vm.sellForm = {};

    vm.causes = ["cause1", "cause2", "cause3", "cause4"];

    vm.attemptSale = function() {
      vm.sellForm.user_id = general.currentUser().id;

      console.log(vm.sellForm);

      Artifact.create(vm.sellForm)
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {
          console.log(data);
        });
    }

  }
})();
