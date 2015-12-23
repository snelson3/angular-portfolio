portfolio.controller('dataController', ['$scope','$http', 'contactService',
  function($scope,$http,dataService) {
    dataService.getProjects().success(function(data) {
      $scope.projects = data;
    });
  }]);
