var portfolio = angular.module('portfolio', ['ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {templateUrl: 'ui/portfolio.html', controller: 'dataController', url:'projects'});
  $routeProvider.when('/school', {templateUrl: 'ui/portfolio.html', controller: 'dataController', url:'school'});
  $routeProvider.when('/ml', {templateUrl: 'ui/portfolio.html', controller: 'dataController', url: 'ml'});
  $routeProvider.otherwise({redirectTo: 'portfolio'});
}]);
