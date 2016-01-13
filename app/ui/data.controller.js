portfolio.controller('dataController', ['$scope','$http', 'dataService',
  function($scope,$http,dataService) {

    $scope.getData = function(url) {
      dataService.getProjects(url).success(function(data) {
        $scope.projects = data;
    });};


  }]);
