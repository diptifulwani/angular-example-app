'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorExampleApp.controller:SurveysEditCtrl
 * @description
 * # SurveysEditCtrl
 * Controller of the angularGeneratorExampleApp
 */
angular.module('angularGeneratorExampleApp')
  .controller('SurveysEditCtrl', function ($stateParams) {   
    this.helloText = "This is edit controller : "+$stateParams.id;
  });
