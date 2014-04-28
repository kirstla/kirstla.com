angular.module('application',[
	'ngAnimate',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch',
	'templates-templates'
])
.config([
	'$locationProvider',
	'$routeProvider',
	function ($locationProvider,$routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
		.when('/',{
			controller: 'IndexController',
			templateUrl: 'application/templates/index.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);