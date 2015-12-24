var portfolio = angular.module('portfolio', ['ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {templateUrl: 'ui/portfolio.html', controller: 'dataController'});
  $routeProvider.otherwise({redirectTo: 'portfolio'});
}]);
