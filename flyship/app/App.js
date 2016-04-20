var flyshipModule = angular.module('Flyship', [
		'ngRoute',
		// 'ngMessages',
		// 'auth0',
		// 'angular-jwt',
		// 'angular-storage',
	])
	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}]);

flyshipModule.constant('API_HOST', 'http://flyship.herokuapp.com')

flyshipModule.config(function($routeProvider) {
	$routeProvider
		.when('/flyer', {
			templateUrl: 'app/flyer/templates/flyer.html',
			controller: 'FlyerCtrl',
			controllerAs: 'flyer'
		})
		.when('/packagesearch', {
			templateUrl: 'app/flyer/templates/package_search.html',
			controller: 'FlyerCtrl',
			controllerAs: 'flyer'
		})
		.when('/departure', {
			templateUrl: 'app/flyer/templates/departure_form.html',
			controller: 'FlyerCtrl',
			controllerAs: 'flyer'
		})
		.when('/arrival', {
			templateUrl: 'app/flyer/templates/arrival_form.html',
			controller: 'FlyerCtrl',
			controllerAs: 'flyer'
		})
		.when('/preferences', {
			templateUrl: 'app/flyer/templates/package_preference.html',
			controller: 'FlyerCtrl',
			controllerAs: 'flyer'
		})

	.when('/nonflyer', {
			templateUrl: 'app/nonflyer/templates/nonflyer.html',
			controller: 'NonflyerCtrl',
			controllerAs: 'nonflyer'
		})
		.when('/registerpackage', {
			templateUrl: 'app/nonflyer/templates/register_package.html',
			controller: 'NonflyerCtrl',
			controllerAs: 'nonflyer'
		})

	.otherwise({
		redirectTo: '/flyer'
	});
});
