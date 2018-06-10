'use strict';

angular.module('pageIliadIliad06')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad06/', {
		templateUrl: 'pages/iliad/iliad06/iliad06.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad06')
		},
	})
}])
