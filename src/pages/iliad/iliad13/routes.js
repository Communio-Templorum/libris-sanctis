'use strict';

angular.module('pageIliadIliad13')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad13/', {
		templateUrl: 'pages/iliad/iliad13/iliad13.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad13')
		},
	})
}])
