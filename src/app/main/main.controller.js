(function() {
  'use strict';

  angular
    .module('kit')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $auth, $location, general, userInfo) {
    var vm = this;

    vm.artifacts = [
      {"name":"xbox 360", "imgUrl":"placeholder.png"},
      {"name":"ps4", "imgUrl":"placeholder.png"},
      {"name":"shoes", "imgUrl":"placeholder.png"},
      {"name":"mouse", "imgUrl":"placeholder.png"},
      {"name":"laptop", "imgUrl":"placeholder.png"},
      {"name":"bottle", "imgUrl":"placeholder.png"},
    ];

    if (!general.userLoggedIn()) {
      // flash message saying user isn't logged in
      $location.path("/");
    }

    //console.log(general.currentUser());
  }
})();
