var portfolio = angular.module('portfolio', ['ngRoute', 'hc.marked']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/open-source', {templateUrl: 'ui/portfolio.html', controller: 'dataController', url:'open-source'});
  $routeProvider.when('/school', {templateUrl: 'ui/portfolio.html', controller: 'dataController', url:'school'});
  $routeProvider.when('/projects', {templateUrl: 'ui/portfolio.html', controller: 'dataController', url: 'projects'});
  $routeProvider.when('/ml', {templateUrl: 'ui/portfolio.html', controller: 'dataController', url: 'ml'});
  $routeProvider.when('/resume', {templateUrl: 'ui/resume.html', controller: 'dataController', url: 'resume'});
  $routeProvider.otherwise({redirectTo: 'resume'});
}]);
