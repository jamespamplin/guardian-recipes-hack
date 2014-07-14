import angular from 'angular';
import 'angular-route';
import 'bootstrap';

import './recipes-list/recipes-list';
import './recipe-view/recipe-view';

angular.module('recipeHack', ['ngRoute', 'recipeView', 'recipesList'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'recipes-list/view.html', controller: 'RecipesList' })
      .when('/recipe/:recipeId', { templateUrl: 'recipe-view/view.html', controller: 'Recipe' })
      .otherwise({ redirectTo: '/' });
  }]);

angular.bootstrap(document, ['recipeHack']);
