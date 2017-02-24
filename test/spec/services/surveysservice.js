'use strict';

describe('Service: SurveysService', function () {

  // load the service's module
  beforeEach(module('angularGeneratorExampleApp'));

  // instantiate service
  var SurveysService;
  beforeEach(inject(function (_SurveysService_) {
    SurveysService = _SurveysService_;
  }));

  it('should do something', function () {
    expect(!!SurveysService).toBe(true);
  });

});
