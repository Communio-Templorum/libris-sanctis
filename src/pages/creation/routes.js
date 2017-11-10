'use strict';

angular.module('pageCreation')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/creation/', {
		templateUrl: 'pages/creation/creation.html',
		controllerAs: '$ctrl',
		controller() {
		},
	})
}])
