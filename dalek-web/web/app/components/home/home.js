angular.module('app.home.home', [
  'app.core'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('app.home.home', {
      url: '',
      views: {
        '': {
          templateUrl: '/app/components/home/assets/templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    });
  }
])
.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.defaultOptions = {};
  $scope.setDefaultTabStringOptions = {
    defaultTab: 'two'
  };
  $scope.setDefaultTabNumberOptions = {
    defaultTab: 2
  };
}]);
