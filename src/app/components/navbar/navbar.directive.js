(function() {
  'use strict';

  angular
    .module('kit')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $auth, general, userInfo) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

      vm.userLoggedIn = general.userLoggedIn();

      vm.logUserOut = function() {
        userInfo.destroy();
        /*
        $auth.signOut()
          .then(function(resp) {
            userInfo.destroy();
            console.log(general.userLoggedIn());
          })
          .catch(function(resp) {
            console.log("Couldn't sign user out");
          });
        */
      }
    }
  }

})();
