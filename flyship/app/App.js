var flyshipModule = angular.module('App', [
	'ngRoute',
	// 'ngMessages',
	// 'auth0',
	// 'angular-jwt',
	// 'angular-storage',
	'firebase'
]);
flyshipModule.constant('FIREBASE_URI', 'https://flyship.firebaseio.com')

flyshipModule.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/flyers/templates/flying.html',
			controller: 'FlyingCtrl',
			controllerAs: 'flying'
		})
		.when('/signup', {
			templateUrl: 'app/signup/templates/signup.html',
			controller: 'SignupCtrl',
			controllerAs: 'signup'
		})
		.when('/signin', {
			templateUrl: 'app/signin/templates/signin.html',
			controller: 'SigninCtrl',
			controllerAs: 'signin'
		})
		.when('/flyer', {
			templateUrl: 'app/flyers/templates/flying.html',
			controller: 'FlyingCtrl',
			controllerAs: 'flying'
		})
		.when('/tripdetails', {
			templateUrl: 'app/flyers/templates/tripdetails.html',
			controller: 'TripDetailsCtrl',
			controllerAs: 'trip_details'
		})
		.when('/nonflyer', {
			templateUrl: 'app/nonflyers/templates/nonflyer.html',
			controller: 'NonflyingCtrl',
			controllerAs: 'nonflying'
		})
		.when('/packagedetails', {
			templateUrl: 'app/nonflyers/templates/packagedetails.html',
			controller: 'NonflyingCtrl',
			controllerAs: 'nonflying'
		})
		.otherwise({
			redirectTo: '/'
		});
});
