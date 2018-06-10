'use strict';

angular.module('pageIliadIliad15')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad15/', {
		templateUrl: 'pages/iliad/iliad15/iliad15.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad15')
		},
	})
}])
