'use strict';

describe('Service: EditService', function () {

  // load the service's module
  beforeEach(module('angularGeneratorExampleApp'));

  // instantiate service
  var EditService;
  beforeEach(inject(function (_EditService_) {
    EditService = _EditService_;
  }));

  it('should do something', function () {
    expect(!!EditService).toBe(true);
  });

});
