System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "https://npm.jspm.io/*.js",
    "github:*": "https://github.jspm.io/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.2.18",
    "angular-route": "github:components/angular-route@^1.2.0",
    "angular-easy-pie-chart": "github:rendro/easy-pie-chart@2.1.4/dist/angular.easypiechart.min",
    "bootstrap": "github:twbs/bootstrap@3.2.0",
    "css": "github:systemjs/plugin-css@^0.1.0",
    "jquery": "github:components/jquery@^2.1.1"
  }
});

System.config({
  "versions": {
    "github:angular/bower-angular": "1.2.18",
    "github:components/angular-route": "1.2.0",
    "github:twbs/bootstrap@3.2.0": "3.2.0",
    "github:systemjs/plugin-css": "0.1.0",
    "github:components/jquery": "2.1.1"
  }
});

