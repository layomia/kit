(function() {
  'use strict';

  angular
    .module('kit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $auth, $location, userInfo, general) {
    var vm = this;

    if (!general.userLoggedIn()) {
      // flash message saying user isn't logged in
      $location.path("/");
    }

    vm.currentUser = userInfo.get();






  }
})();
