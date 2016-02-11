'use strict';

/**
 * @ngdoc function
 * @name gpslocatorApp.controller:ClientLoginCtrl
 * @description
 * # ClientLoginCtrl
 * Controller of the gpslocatorApp
 */
angular.module('gpslocatorApp')
  .controller('ClientLoginCtrl', ['$scope', '$http', 'auth', 'store', '$location',
      function($scope, $http, auth, store, $location) {
        console.log("antes");

        $scope.login = function() {
          console.log("entro 1");

          auth.signin({}, function(profile, token) {
            // Success callback
            store.set('profile', profile);
            store.set('token', token);
            console.log(token);
            console.log(profile);
            $location.path('/');
          }, function(err) {
            console.log("Error :(", err);
            // Error callback
          });

        }


      }]);
