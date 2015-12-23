portfolio.factory('dataService', ['$http', function($http) {
  var _getProjects = function() {
    return $http.get('data/projects.json');
  };
  return { getProjects : _getProjects };

}]);
