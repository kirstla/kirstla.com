angular.module('application')
.controller('WorkOutSetsController',[
	'workoutSetService',
	$log,
	$scope,
	function (Service,$log,$scope) {
		service.fetchAll()
		.then(function (sets) {
			$scope.sets = sets;	
		}function (exception) {
			$log.debug(exception);
		})
	}
]);
