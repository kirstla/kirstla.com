angular.module('application')
.factory('db',[
	'$log',
	'$q',
	function ($log,$q) {
		var db = $q.defer(),
			openreq = window.indexedDB.open('kirstla',1);
		openreq.onerror = function (event) {
			$log.debug('open database error',event);
		};
		openreq.onsuccess = function (event) {
			db.resolve(event.target.result);
		};
		openreq.onupgradeneeded = function (event) {
			var exerciseStore,
				dbU = event.target.result;
			exerciseStore = dbU.createObjectStore('workout_exercise',{
				keyPath:'id',
				autoIncrement: true
			});
		};
		return {
			delete: function (table,key) {
				var deferred = $q.defer(),
					transaction,
					request;
				db.promise.then(function (db) {
					transaction = db.transaction([table],'readwrite');
					request = transaction.objectStore(table).delete(key);
					request.onerror = function (event) {
						$log.debug('db.delete error',table,key,event);
						deferred.reject(event);
					};
					request.onsuccess = function (event) {
						deferred.resolve();
					};
				});
				return deferred.promise;
			},
			fetchAll: function (table) {
				var deferred = $q.defer(),
					transaction,
					request,
					objects = [];
				db.promise.then(function (db) {
					transaction = db.transaction([table],'readonly');
					request = transaction.objectStore(table).openCursor();
					request.onerror = function (event) {
						$log.debug('db.fetchAll error',table,event);
						deferred.reject(event);
					};
					request.onsuccess = function (event) {
						var cursor = event.target.result;
						if (cursor) {
							objects.push(cursor.value);
							cursor.continue();
						} else {
							deferred.resolve(objects);
						}
					};
				});
				return deferred.promise;
			},
			fetchOne: function (table,key) {
				var deferred = $q.defer(),
					transaction,
					request;
				db.promise.then(function (db) {
					transaction = db.transaction([table],'readonly');
					request = transaction.objectStore(table).get(key);
					request.onerror = function (event) {
						$log.debug('db.fetchOne error',table,key,event);
						deferred.reject(event);
					};
					request.onsuccess = function (event) {
						deferred.resolve(event.target.result);
					};
				});
				return deferred.promise;
			},
			save: function (table,object) {
				var deferred = $q.defer(),
					transaction,
					request;
				if (object.hasOwnProperty('$$hashKey')) {
					delete object.$$hashKey;
				}
				db.promise.then(function (db) {
					transaction = db.transaction([table],'readwrite');
					if (object.id) {
						request = transaction.objectStore(table).put(object);
					} else {
						request = transaction.objectStore(table).add(object);
					}
					request.onerror = function (event) {
						$log.debug('db.save error',table,object,event);
						deferred.reject(event);
					};
					request.onsuccess = function (event) {
						object.id = event.target.result;
						deferred.resolve(object);
					};
				});
				return deferred.promise;
			}
		};
	}
]);