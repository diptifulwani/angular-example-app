'use strict';

describe('Service: RespondService', function () {

  // load the service's module
  beforeEach(module('angularGeneratorExampleApp'));

  // instantiate service
  var RespondService;
  beforeEach(inject(function (_RespondService_) {
    RespondService = _RespondService_;
  }));

  it('should do something', function () {
    expect(!!RespondService).toBe(true);
  });

});
