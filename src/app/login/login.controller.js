(function() {
  'use strict';

  angular
    .module('kit')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, $auth) {
    var vm = this;
    vm.loginForm = {};

    vm.attemptLogin = function() {
      $auth.submitLogin(vm.loginForm)
        .then(function(resp) {
          // handle success response
          console.log(resp);
        })
        .catch(function(resp) {
          // handle error response
          console.log(resp);
          alert("Unable to log you in now! Try again later!")
        });
    };

  }
})();
