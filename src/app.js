'use strict';

angular.module('Libris Sanctis', [
	'ngRoute',
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true)
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
	})
	.otherwise({redirectTo: '/'})
}])
