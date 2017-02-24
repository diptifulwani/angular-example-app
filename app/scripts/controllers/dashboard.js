'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorExampleApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the angularGeneratorExampleApp
 */
angular.module('angularGeneratorExampleApp')
  .controller('DashboardCtrl', function (DashboardService) {
    this.surveys = DashboardService.getSurveys();
  });
