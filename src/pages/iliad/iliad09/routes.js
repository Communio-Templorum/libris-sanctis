'use strict';

angular.module('pageIliadIliad09')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad09/', {
		templateUrl: 'pages/iliad/iliad09/iliad09.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad09')
		},
	})
}])
