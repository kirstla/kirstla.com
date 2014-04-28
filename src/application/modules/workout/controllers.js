angular.module('application')
.controller('WorkoutExercisesController',[
	'WorkoutExerciseService',
	'$log',
	'$scope',
	function (Service,$log,$scope) {
		Service.fetchAll()
		.then(function (exercises) {
			$scope.exercises = exercises;
		},function (exception) {
			$log.debug(exception);
		});
	}
])
.controller('WorkoutExerciseController',[
	'Exercise',
	'WorkoutExerciseService',
	'$location',
	'$log',
	'$scope',
	function (Exercise,Service,$location,$log,$scope) {
		$scope.exercise = Exercise;
		$log.debug(Exercise);
		$scope.save = function () {
			Service.save($scope.exercise)
			.then(function (exercise) {
				$log.debug('saved');
				$location.path('/workout/exercise/'+exercise.id).replace();
			},function (exception) {
				$log.debug(exception);
			});
		};
		$scope.delete = function () {
			Service.delete($scope.exercise)
			.then(function () {
				$log.debug('deleted');
				$location.path('/workout/exercises').replace();
			}, function (exception) {
				$log.debug(exception);
			});
		};
	}
]);