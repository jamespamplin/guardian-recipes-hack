import angular from 'angular';
import 'angular-route';
import 'bootstrap';

import './recipes-list/recipes-list';
import './recipe-view/recipe-view';

import 'github:components/font-awesome@4.1.0/css/font-awesome.css!';
import 'app.css!';

angular.module('recipeHack', ['ngRoute', 'recipeView', 'recipesList'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'recipes-list/view.html', controller: 'RecipesList' })
      .when('/recipe/:recipeId', { templateUrl: 'recipe-view/view.html', controller: 'Recipe' })
      .otherwise({ redirectTo: '/' });
  }]);

if (window.location.host.indexOf('github')) {
  angular.element('head').append('<base href="/guardian-recipes-hack/public/">');
}

angular.bootstrap(document, ['recipeHack']);
