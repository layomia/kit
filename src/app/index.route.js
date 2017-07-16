(function () {
  'use strict'

  angular
    .module('kit')
    .config(routerConfig)

  /** @ngInject */
  function routerConfig ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('splash', {
        url: '/',
        templateUrl: 'app/splash/splash.html',
        controller: 'SplashController',
        controllerAs: 'splash',
        css: 'splash.css'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'signup'
      })
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('sell', {
        url: '/sell',
        templateUrl: 'app/sell/sell.html',
        controller: 'SellController',
        controllerAs: 'sell'
      })
      .state('artifact', {
        url:'/artifact/:id',
        templateUrl: 'app/artifact/artifact.html',
        controller: 'ArtifactController',
        controllerAs: 'artifact'
      });

    $urlRouterProvider.otherwise('/')
  }
})()
