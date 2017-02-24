'use strict';

describe('Controller: SurveysCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGeneratorExampleApp'));

  var SurveysCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SurveysCtrl = $controller('SurveysCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SurveysCtrl.awesomeThings.length).toBe(3);
  });
});
