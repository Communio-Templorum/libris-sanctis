'use strict';

angular.module('pageIliadIliad02')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad02/', {
		templateUrl: 'pages/iliad/iliad02/iliad02.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad02')
		},
	})
}])
