'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorExampleApp.controller:SurveysCtrl
 * @description
 * # SurveysCtrl
 * Controller of the angularGeneratorExampleApp
 */
angular.module('angularGeneratorExampleApp')
  .controller('SurveysCtrl', function () {
    this.publishedSurveys = [
    {
    	id: 1,
    	name: 'Survey 1'
    },
    {
    	id: 2,
    	name: 'Survey 2'
    },
    {
    	id: 3,
    	name: 'Survey 3'
    }
    ];

    this.openSurveys = [
    {
    	id: 4,
    	name: 'Survey 4'
    },
    {
    	id: 5,
    	name: 'Survey 5'
    },
    {
    	id: 6,
    	name: 'Survey 6'
    }
    ];
  });
