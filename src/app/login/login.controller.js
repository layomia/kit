(function() {
  'use strict';

  angular
    .module('kit')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, $auth, userInfo, $location) {
    var vm = this;
    vm.loginForm = {};

    vm.attemptLogin = function() {
      $auth.submitLogin(vm.loginForm)
        .then(function(resp) {
          // handle success response
          userInfo.set(resp);
          $location.path("/main");
        })
        .catch(function(resp) {
          // handle error response
          alert("Unable to log you in now. Try again later!");
        });
    };

  }
})();
