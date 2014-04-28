angular.module('templates-templates', ['application/modules/workout/templates/exercise/add.html', 'application/modules/workout/templates/exercise/all.html', 'application/modules/workout/templates/exercise/edit.html', 'application/modules/workout/templates/exercise/view.html', 'application/templates/index.html', 'application/templates/kirstla.html']);

angular.module("application/modules/workout/templates/exercise/add.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("application/modules/workout/templates/exercise/add.html",
    "<h1>Add Exercise</h1><form name=\"form\" novalidate=\"true\" ng-submit=\"save()\"><dl><dt><label for=\"name\">Name</label></dt><dd><input type=\"text\" name=\"name\" ng-model=\"exercise.name\" ng-required=\"true\"><ul class=\"errors\" ng-show=\"form.name.$invalid\"><li ng-show=\"form.name.$error.required\">Required</li></ul></dd></dl><dl><dt><label for=\"description\">Description</label></dt><dd><textarea name=\"description\" ng-model=\"exercise.description\"></textarea></dd></dl><dl><dt>&nbsp;</dt><dd><input type=\"submit\" value=\"Add\" ng-disabled=\"form.$invalid || form.$pristine\"></dd></dl></form>");
}]);

angular.module("application/modules/workout/templates/exercise/all.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("application/modules/workout/templates/exercise/all.html",
    "<table><thead><tr><th>Name</th><th>Description</th><th><a href=\"/workout/exercise/add\">Add Exercise</a></th></tr></thead><tbody><tr ng-repeat=\"exercise in exercises | orderBy:'name'\"><td>{{exercise.name}}</td><td>{{exercise.description}}</td><td><ul><li><a ng-href=\"/workout/exercise/{{exercise.id}}\">View</a></li></ul></td></tr></tbody></table>");
}]);

angular.module("application/modules/workout/templates/exercise/edit.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("application/modules/workout/templates/exercise/edit.html",
    "<h1>Edit Exercise: {{exercise.name}}</h1><form name=\"form\" novalidate=\"true\" ng-submit=\"save()\"><dl><dt><label for=\"name\">Name</label></dt><dd><input type=\"text\" name=\"name\" ng-model=\"exercise.name\" ng-required=\"true\"><ul class=\"errors\" ng-show=\"form.name.$invalid\"><li ng-show=\"form.name.$error.required\">Required</li></ul></dd></dl><dl><dt><label for=\"description\">Description</label></dt><dd><textarea name=\"description\" ng-model=\"exercise.description\"></textarea></dd></dl><dl><dt>&nbsp;</dt><dd><input type=\"submit\" value=\"Save\" ng-disabled=\"form.$invalid || form.$pristine\"></dd></dl></form>");
}]);

angular.module("application/modules/workout/templates/exercise/view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("application/modules/workout/templates/exercise/view.html",
    "<h1>Exercise: {{exercise.name}}</h1><ul><li><a ng-click=\"delete()\">Delete</a></li><li><a ng-href=\"/workout/exercise/{{exercise.id}}/edit\">Edit</a></li></ul><p ng-bind-html=\"exercise.description\"></p>");
}]);

angular.module("application/templates/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("application/templates/index.html",
    "{{message}} index<kirstla></kirstla><kirstla></kirstla>");
}]);

angular.module("application/templates/kirstla.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("application/templates/kirstla.html",
    "<p>{{message}}</p>");
}]);
