'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.all',
  'myApp.about',
  'myApp.version',
  'myApp.affirmations'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
