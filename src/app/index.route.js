(function() {
  'use strict';

  angular
    .module('kit')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('splash', {
        url: '/',
        templateUrl: 'app/splash/splash.html',
        controller: 'SplashController',
        controllerAs: 'splash'
      })
      .state('login', {
        url:'/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('signup', {
        url:'/signup',
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'signup'
      })
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
