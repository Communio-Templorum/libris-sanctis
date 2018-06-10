'use strict';

angular.module('pageIliadIliad24')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad24/', {
		templateUrl: 'pages/iliad/iliad24/iliad24.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad24')
		},
	})
}])
