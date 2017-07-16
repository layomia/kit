(function () {
  'use strict'

  angular
    .module('kit')
    .controller('MainController', MainController)

  /** @ngInject */
  function MainController ($timeout, $auth, $location, general, userInfo) {
    var vm = this

    vm.artifacts = [
      {'name': 'xbox 360', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'ps4', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'shoes', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'mouse', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'laptop', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'ps4', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'shoes', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'mouse', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'shoes', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'mouse', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'laptop', 'imgUrl': 'http://via.placeholder.com/150x150'},
      {'name': 'bottle', 'imgUrl': 'http://via.placeholder.com/150x150'}
    ]

    if (!general.userLoggedIn()) {
      // flash message saying user isn't logged in
      $location.path('/')
    }

    // console.log(general.currentUser());
  }
})()
