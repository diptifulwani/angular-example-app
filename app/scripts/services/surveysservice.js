'use strict';

/**
 * @ngdoc service
 * @name angularGeneratorExampleApp.SurveysService
 * @description
 * # SurveysService
 * Service in the angularGeneratorExampleApp.
 */
angular.module('angularGeneratorExampleApp')
  .service('SurveysService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    var surveyTypes=[
    {	id: 1, 
    	name: 'Real Time'
    }, 
    {	id: 2, 
    	name: 'Continuos Feedback Survey'
    }];
    self.getSurveyTypes = function(){
    	return surveyTypes;
    };
  });
