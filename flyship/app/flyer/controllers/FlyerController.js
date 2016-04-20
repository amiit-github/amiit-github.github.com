angular.module('Flyship').controller('FlyerCtrl', ['FlyerModel', FlyerCtrl]);

function FlyerCtrl(FlyerModel) {
	this.trip = {};
	 this.trip.user_id = 'samshah1993@gmail.com';
	 this.saveError = false;
	 this.saveSuccess = false;

	this.saveTrip = function() {
		FlyerModel.addTrip(angular.copy(this.trip));
		this.saveSuccess = true;
		this.trip = {}
	}
	// this.getTrips = function() {
	// 	this.trips = TripModel.getTrips();
	// }
	// this.updateTrip = function(id) {
	// 	TripModel.updateTrip(id);
	// }
	// this.removeTrip = function(id) {
	// 	TripModel.removeTrip(id);
	// }
	//
	// this.getTrips();
}
