
import angular from 'angular';
import 'angular-easy-pie-chart';

angular.module('recipeView', ['easypiechart'])
  .controller('Recipe', ['$scope', '$interval', '$routeParams', 'recipeService', function($scope, $interval, $routeParams, recipeService) {

    recipeService.get($routeParams.recipeId).success(function(data) {
      $scope.recipe = data;

    }).error(function(err) {
      console.log('error loading recipe data', $routeParams.recipeId, err);
    });


    $scope.timerOptions = {
      lineWidth: 6,
      barColor: '#951c55'
    };

    $scope.timerValue = 100;
    $scope.timerValueSeconds = 300;
    $scope.timerStarted = false;

    var timer,
    timerMax = 300;

    $scope.resetTimer = function() {
      if (timer) {
        $interval.cancel(timer);
      }
      $scope.timerValue = 100;
      $scope.timerValueSeconds = timerMax;
      $scope.timerStarted = false;
    };

    $scope.toggleTimer = function() {

      if (timer) {
        $interval.cancel(timer);
      }

      $scope.timerStarted = !$scope.timerStarted;

      if ($scope.timerStarted) {
        // $scope.timerValue = 100;
        // $scope.timerValueSeconds = timerMax;

        timer = $interval(function() {
          $scope.timerValueSeconds--;
          $scope.timerValue = $scope.timerValueSeconds / timerMax * 100;

          if (!$scope.timerValue) {
            $interval.cancel(timer);
            $scope.timerStarted = false;
          }
        }, 1000);
      }
    };

  }])

  .filter('formatTimer', function() {
    return function(input) {
      var minutes = Math.floor(input / 60),
      seconds = input - minutes * 60;

      return minutes + 'min ' + seconds + 's';
    };
  })

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
