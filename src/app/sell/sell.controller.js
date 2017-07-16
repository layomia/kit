(function() {
  'use strict';

  angular
    .module('kit')
    .controller('SellController', SellController);

  /** @ngInject */
  function SellController($timeout) {
    var vm = this;
    vm.sellForm = {}

    vm.causes = ["cause1", "cause2", "cause3", "cause4"];

    vm.attemptSale = function() {
      
    }

  }
})();
