angular.module('application')
.config([
	'$routeProvider',
	function ($routeProvider) {
		$routeProvider
		.when('/workout/exercises',{
			controller: 'WorkoutExercisesController',
			templateUrl: 'application/modules/workout/templates/exercise/all.html'
		})
		.when('/workout/exercise/add',{
			controller: 'WorkoutExerciseController',
			resolve: {
				Exercise: [
					'WorkoutExerciseService',
					function (Service) {
						return Service.fetchNew();
					}
				]
			},
			templateUrl: 'application/modules/workout/templates/exercise/add.html'
		})
		.when('/workout/exercise/:id',{
			controller: 'WorkoutExerciseController',
			resolve: {
				Exercise: [
					'WorkoutExerciseService',
					'$route',
					function (Service,$route) {
						return Service.fetchOne($route.current.params.id);
					}
				]
			},
			templateUrl: 'application/modules/workout/templates/exercise/view.html'
		})
		.when('/workout/exercise/:id/edit',{
			controller: 'WorkoutExerciseController',
			resolve: {
				Exercise: [
					'WorkoutExerciseService',
					'$route',
					function (Service,$route) {
						return Service.fetchOne($route.current.params.id);
					}
				]
			},
			templateUrl: 'application/modules/workout/templates/exercise/edit.html'
		});
	}
]);