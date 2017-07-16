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
          userInfo.set(resp);
          $location.path("/main");
        })
        .catch(function(resp) {
          // handle error response
          alert("Unable to Sign you up now. Try again later!")
        });
    };
  }
})();
