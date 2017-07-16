(function() {
  'use strict';

  angular
    .module('kit')
    .controller('SplashController', SplashController);

  /** @ngInject */
  function SplashController($timeout, $location, general) {
    var vm = this;

    if (general.userLoggedIn()) {
      $location.path("main");
    }

  }
})();
