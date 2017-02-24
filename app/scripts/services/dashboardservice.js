'use strict';

/**
 * @ngdoc service
 * @name angularGeneratorExampleApp.DashboardService
 * @description
 * # DashboardService
 * Service in the angularGeneratorExampleApp.
 */
angular.module('angularGeneratorExampleApp')
  .service('DashboardService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    var surveys=[
    {	id: 1, 
    	name: 'Survey 1'
    }, 
    {	id: 2, 
    	name: 'Survey 2'
    }];
    self.getSurveys = function(){
    	return surveys;
    };
  });
