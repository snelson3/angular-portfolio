portfolio.factory('dataService', ['$http', function($http) {
  var _getProjects = function(url) {
    return $http.get('data/'+url+'.json');
  };
  return { getProjects : _getProjects };

}]);
