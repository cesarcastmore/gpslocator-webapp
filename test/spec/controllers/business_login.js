'use strict';

describe('Controller: BusinessLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('gpslocatorApp'));

  var BusinessLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessLoginCtrl = $controller('BusinessLoginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BusinessLoginCtrl.awesomeThings.length).toBe(3);
  });
});
