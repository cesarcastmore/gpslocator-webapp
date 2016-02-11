'use strict';

describe('Controller: BusinessAddCtrl', function () {

  // load the controller's module
  beforeEach(module('gpslocatorApp'));

  var BusinessAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessAddCtrl = $controller('BusinessAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BusinessAddCtrl.awesomeThings.length).toBe(3);
  });
});
