'use strict';

/**
 * @ngdoc overview
 * @name angularGeneratorExampleApp
 * @description
 * # angularGeneratorExampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularGeneratorExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('');   

    $urlRouterProvider.otherwise('/surveys');    

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .state('surveys', {
        url: '/surveys',
        templateUrl: 'views/surveys.html',
        controller: 'SurveysCtrl',
        controllerAs: 'surveys'
      })
      .state('surveys.create', {
        url: '/create',
        templateUrl: 'views/create.html',
        controller: 'SurveysCreateCtrl',
        controllerAs: 'surveysCreate'
      })
      .state('surveys.edit', {
        url: '/:id/edit',
        templateUrl: 'views/edit.html',
        controller: 'SurveysEditCtrl',
        controllerAs: 'surveysEdit'
      })
      .state('surveys.respond', {
        url: '/:id/respond',
        templateUrl: 'views/respond.html',
        controller: 'SurveysRespondCtrl',
        controllerAs: 'surveysRespond'
      });

  });
