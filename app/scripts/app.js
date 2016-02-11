'use strict';

/**
 * @ngdoc overview
 * @name gpslocatorApp
 * @description
 * # gpslocatorApp
 *
 * Main module of the application.
 */
angular
  .module('gpslocatorApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMenuSidenav',
    'auth0',
    'angular-storage',
    'angular-jwt'
  ])
  .config(function($routeProvider, authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/business/add', {
        templateUrl: 'views/business_add.html',
        controller: 'BusinessAddCtrl',
        controllerAs: 'businessAdd'
      })
      .when('/client/add', {
        templateUrl: 'views/client_add.html',
        controller: 'ClientAddCtrl',
        controllerAs: 'clientAdd'
      })
      .when('/client/login', {
        templateUrl: 'views/client_login.html',
        controller: 'ClientLoginCtrl',
        controllerAs: 'clientLogin'
      })
      .when('/business/login', {
        templateUrl: 'views/business_login.html',
        controller: 'BusinessLoginCtrl',
        controllerAs: 'businessLogin'
      })
      .when('/business/find', {
        templateUrl: 'views/business_find.html',
        controller: 'BusinessFindCtrl',
        controllerAs: 'businessFind'
      })
      .otherwise({
        redirectTo: '/'
      });

    authProvider.init({
      domain: 'gpslocator.auth0.com',
      clientID: 'UAl0OgwVA67qEEIkfPZm9Nyo1wusopQ1'
    });

  })

.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});
