angular.module('application')
.factory('WorkoutExerciseService',[
	'db',
	'$q',
	function (db,$q) {
		var table = 'workout_exercise';
		return {
			delete: function (exercise) {
				return db.delete(table,parseInt(exercise.id));
			},
			fetchAll: function () {
				return db.fetchAll(table);
			},
			fetchNew: function () {
				return {};
			},
			fetchOne: function (id) {
				id = parseInt(id);
				return db.fetchOne(table,id);
			},
			save: function (exercise) {
				return db.save(table,exercise);
			}
		};
	}
]);