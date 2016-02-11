'use strict';

describe('Controller: ClientLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('gpslocatorApp'));

  var ClientLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientLoginCtrl = $controller('ClientLoginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClientLoginCtrl.awesomeThings.length).toBe(3);
  });
});
