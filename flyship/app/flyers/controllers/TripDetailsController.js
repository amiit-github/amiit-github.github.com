flyshipModule.controller('TripDetailsCtrl', ["TripModel", TripDetailsCtrl]);

function TripDetailsCtrl(TripModel) {
	// var Trip = function(){
	// 	origin_city: '',
	// 	origin_contact: '',
	// 	origin_departure: '',
	// 	destination_city: '',
	// 	destination_contact: '',
	// 	destination_arrival: ''
	// }
	this.trip = {};
	this.saveError = false;
	this.saveSuccess = false;

	this.saveTrip =function() {
		TripModel.addTrip(angular.copy(this.trip));
		this.saveSuccess = true;
		this.trip = {}
	}
	this.getTrips = function() {
		this.trips = TripModel.getTrips();
	}
	this.updateTrip = function(id) {
		TripModel.updateTrip(id);
	}
	this.removeTrip = function(id) {
		TripModel.removeTrip(id);
	}

	this.getTrips();
}
