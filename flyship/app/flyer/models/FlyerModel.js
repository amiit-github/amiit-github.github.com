flyshipModule.factory('FlyerModel', ['API_HOST', '$http', function(API_HOST, $http) {

	var tripsUrl = API_HOST + '/flyship/api/V1/trip';

	var getTrips = function() {
		return trips;
	};

	var addTrip = function(new_trip) {
		//trips.$add(new_trip);

		var trip = {
			'userId': new_trip.user_id,
			'departure.city': new_trip.departure_city,
			'departure.date': new_trip.departure_date,
			'departure.contactNumber': new_trip.departure_contact_number,
			'arrival.city': new_trip.arrival_city,
			'arrival.date': new_trip.arrival_date,
			'arrival.contactNumber': new_trip.arrival_contact_number
		};

		console.log(trip);

		$http({
				url: tripsUrl + '/trip',
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {'userId':'samshah1993@gmail.com'}
			})
			.success(function(data) {
				if (data.errors) {
					$scope.errorName = data.errors.name;
					$scope.errorUserName = data.errors.username;
					$scope.errorEmail = data.errors.email;
				} else {
					console.log(data);
					//$scope.message = data.message;
				}
			});
	};

	var updateTrip = function(id) {
		trips.$save(id);
	};

	var removeTrip = function(id) {
		trips.$remove(id);
	};

	return {
		getTrips: getTrips,
		addTrip: addTrip,
		updateTrip: updateTrip,
		removeTrip: removeTrip
	}
}]);
