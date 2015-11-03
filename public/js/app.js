'use strict';

angular.module('app', ['ngRoute', 'ui.bootstrap','ngMessages', 'register', 'login', 'donate']).
	config(function ($routeProvider ,  $sceDelegateProvider ) {


		$routeProvider.when('/Home', { templateUrl: 'view/landing/home.html' });
		$routeProvider.when('/Donate',
			{ templateUrl: 'view/landing/donate.html',
			controller: 'StoreController'
		});

		$routeProvider.when('/Admin', { templateUrl: 'view/landing/admin.html' });
		$routeProvider.when('/Contact', { templateUrl: 'view/landing/contact.html' });
		$routeProvider.when('/AboutUs', { templateUrl: 'view/landing/aboutus.html' });
		$routeProvider.when('/Register', { templateUrl: 'view/landing/register.html' });





		$routeProvider.when('/register/family', {
			templateUrl: 'view/register/family.html',
			controller: 'RegisterFamilyController'
		});

		$routeProvider.when('/register/conformation', {
			templateUrl: 'view/register/conformation.html'
		});


		$routeProvider.when('/register/donar', {
			templateUrl: 'view/register/donar.html',
			controller: 'RegisterDonarController'
		});

		$routeProvider.when('/register/donar/conformation', {
			templateUrl: 'view/register/conformation.html'
		});

		$routeProvider.when('/register/family/conformation', {
			templateUrl: 'view/register/family-conform.html'
		});

		$routeProvider.when('/donate/familydonation', {
			templateUrl: 'view/donate/family-donation.html'
		});

		$routeProvider.when('/donate/conformation', {
			templateUrl: 'view/donate/donate-conformation.html'
		});

		$routeProvider.otherwise({ redirectTo: '/Home' });

		$sceDelegateProvider.resourceUrlWhitelist([
			// Allow same origin resource loads.
			'self',
			// Allow loading from our assets domain.  Notice the difference between * and **.
			'http://!*.youtube.com/!**']);
	});


angular.module('register', []);
angular.module('login', []);
angular.module('donate', []);
