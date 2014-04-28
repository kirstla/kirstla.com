angular.module('application')
.directive('kirstla',[
	function () {
		return {
			link: function ($scope,$element,$attrs,$controllers) {
				$scope.message = 'shawn';
			},
			restrict: 'E',
			replace: true,
			scope: true,
			templateUrl: 'application/templates/kirstla.html'
		};
	}
]);