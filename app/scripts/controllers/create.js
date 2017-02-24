'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorExampleApp.controller:SurveysCreateCtrl
 * @description
 * # SurveysCreateCtrl
 * Controller of the angularGeneratorExampleApp
 */
angular.module('angularGeneratorExampleApp')
  .controller('SurveysCreateCtrl', function (SurveysService) {   
  	var self = this;
    self.helloText = "This is create controller";
    self.survey = {};
    self.surveyTypes = SurveysService.getSurveyTypes();
  });
