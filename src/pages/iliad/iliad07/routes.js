'use strict';

angular.module('pageIliadIliad07')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad07/', {
		templateUrl: 'pages/iliad/iliad07/iliad07.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad07')
		},
	})
}])
