
import angular from 'angular';

angular.module('recipeView', [])
  .controller('Recipe', ['$scope', '$routeParams', 'recipeService', function($scope, $routeParams, recipeService) {

    recipeService.get($routeParams.recipeId).success(function(data) {
      $scope.recipe = data;

    }).error(function(err) {
      console.log('error loading recipe data', $routeParams.recipeId, err);
    });

  }])

  .directive('recipeTechnique', [function() {

    return {
      restrict: 'E',
      templateUrl: 'recipe-view/recipe-technique.html',
      scope: {
        instruction: '='
      },
      link: function(scope, elem, attrs) {

      }
    };
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
