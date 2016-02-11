'use strict';

describe('Controller: BusinessFindCtrl', function () {

  // load the controller's module
  beforeEach(module('gpslocatorApp'));

  var BusinessFindCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessFindCtrl = $controller('BusinessFindCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BusinessFindCtrl.awesomeThings.length).toBe(3);
  });
});
