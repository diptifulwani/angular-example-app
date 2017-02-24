'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorExampleApp.controller:SurveysRespondCtrl
 * @description
 * # SurveysRespondCtrl
 * Controller of the angularGeneratorExampleApp
 */
angular.module('angularGeneratorExampleApp')
  .controller('SurveysRespondCtrl', function ($stateParams) {   
    this.helloText = "This is respond controller : "+$stateParams.id;
  });
