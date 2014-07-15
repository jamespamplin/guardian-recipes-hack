
import angular from 'angular';

angular.module('recipesList', [])
  .controller('RecipesList', ['$scope', 'recipeListService', function($scope, recipeListService) {
    recipeListService.get().success(function(data) {
      $scope.recipesList = data;

    }).error(function(err) {
      console.log('error loading recipe list data', err);
    });
  }])

  .factory('recipeListService', ['$http', function($http) {
    return {
      get: function() {
        return $http({
          method: 'GET',
          url: 'recipe-data/index.json'
        });
      }
    };
  }]);
