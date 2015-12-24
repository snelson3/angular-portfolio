portfolio.controller('dataController', ['$scope','$http', 'dataService',
  function($scope,$http,dataService) {

    dataService.getProjects().success(function(data) {
      $scope.projects = data;
    });
  }]);
