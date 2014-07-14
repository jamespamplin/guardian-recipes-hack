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
    "angular-route": "github:components/angular-route@^1.2.0"
  }
});

System.config({
  "versions": {
    "github:angular/bower-angular": "1.2.18",
    "github:components/angular-route": "1.2.0"
  }
});

