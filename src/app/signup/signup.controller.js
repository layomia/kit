(function() {
  'use strict';

  angular
    .module('kit')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController($timeout, $auth, $scope, Community, userInfo) {
    var vm = this;
    vm.registrationForm = {};
    vm.communities = {};

    Community.all()
      .success(function(data) {
        for (var x in data) {
          vm.communities[data[x]["name"]] = data[x]["id"];
        }
        console.log(vm.communities);
      })

    vm.attemptSignUp = function() {
      $auth.submitRegistration(vm.registrationForm)
        .then(function(resp) {
          // handle success response
          userInfo.set(resp);
          $location.path("/main");
        })
        .catch(function(resp) {
          // handle error response
          console.log(resp);
          alert("Unable to Sign you up now. Try again later!")
        });
    };
  }
})();
