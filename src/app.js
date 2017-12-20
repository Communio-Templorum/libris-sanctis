'use strict';

angular.module('Libris Sanctis', [
	'ngRoute',
	'pageCreation',
	'pageRevelations',
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageHome')
		},
	})
	.otherwise({redirectTo: '/'})
}])
