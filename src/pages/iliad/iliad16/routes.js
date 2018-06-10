'use strict';

angular.module('pageIliadIliad16')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad16/', {
		templateUrl: 'pages/iliad/iliad16/iliad16.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad16')
		},
	})
}])
