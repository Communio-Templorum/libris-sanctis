'use strict';

angular.module('pageIliadIliad20')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad20/', {
		templateUrl: 'pages/iliad/iliad20/iliad20.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad20')
		},
	})
}])
