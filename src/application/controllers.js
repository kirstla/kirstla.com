angular.module('application')
.controller('IndexController',[
	'$scope',
	function ($scope) {
		$scope.message = 'hello';
	}
]);