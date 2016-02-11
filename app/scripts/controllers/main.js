'use strict';

/**
 * @ngdoc function
 * @name gpslocatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gpslocatorApp
 */
angular.module('gpslocatorApp')
  .controller('MainCtrl', ['$scope', '$mdSidenav', 'auth', 'store',
    function($scope, $mdSidenav, auth, store) {

      $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };

      $scope.index = 0;

      $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
      };

      $scope.logout = function() {
        auth.signout();
        store.remove('profile');
        store.remove('token');
      }

    }
  ]);
