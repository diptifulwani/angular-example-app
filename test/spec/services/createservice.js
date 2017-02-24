'use strict';

describe('Service: CreateService', function () {

  // load the service's module
  beforeEach(module('angularGeneratorExampleApp'));

  // instantiate service
  var CreateService;
  beforeEach(inject(function (_CreateService_) {
    CreateService = _CreateService_;
  }));

  it('should do something', function () {
    expect(!!CreateService).toBe(true);
  });

});
