
import angular from 'angular';

angular.module('recipeView', [])
  .controller('Recipe', ['$scope', '$routeParams', 'recipeService', function($scope, $routeParams, recipeService) {

    recipeService.get($routeParams.recipeId).success(function(data) {
      $scope.recipe = data;

    }).error(function(err) {
      console.log('error loading recipe data', $routeParams.recipeId, err);
    });

  }])

  .factory('recipeService', ['$http', function($http) {
    return {
      get: function(recipeId) {
        return $http({
          method: 'GET',
          url: 'recipe-data/' + recipeId + '.json'
        });
      }
    };
  }]);
