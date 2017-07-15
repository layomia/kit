(function() {
  'use strict';

  angular
    .module('kit')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController($timeout, $auth, $scope) {
    var vm = this;
    vm.registrationForm = {};

    vm.attemptSignUp = function() {
      $auth.submitRegistration(vm.registrationForm)
        .then(function(resp) {
          // handle success response
          console.log(resp);
        })
        .catch(function(resp) {
          // handle error response
          alert("Unable to log you in now! Try again later!")
        });
    };
  }
})();
