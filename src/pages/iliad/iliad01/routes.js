'use strict';

angular.module('pageIliadIliad01')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad01/', {
		templateUrl: 'pages/iliad/iliad01/iliad01.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad01')
		},
	})
}])
