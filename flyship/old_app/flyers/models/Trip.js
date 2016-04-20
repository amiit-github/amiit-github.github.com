flyshipModule.factory('TripModel', ['FIREBASE_URI', '$firebaseArray', function (FIREBASE_URI, $firebaseArray) {
		var tripsUri = FIREBASE_URI + '/trips';
		var ref = new Firebase(tripsUri);
		var trips = $firebaseArray(ref);

		var getTrips = function () {
			return trips;
		};

		var addTrip = function (new_trip) {
			trips.$add(new_trip);
		};

		var updateTrip = function (id) {
			trips.$save(id);
		};

		var removeTrip = function (id) {
			trips.$remove(id);
		};

		return {
			getTrips: getTrips,
			addTrip: addTrip,
			updateTrip: updateTrip,
			removeTrip: removeTrip
		}
	}]);
