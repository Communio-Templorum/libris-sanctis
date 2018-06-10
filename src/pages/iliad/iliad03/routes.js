'use strict';

angular.module('pageIliadIliad03')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad03/', {
		templateUrl: 'pages/iliad/iliad03/iliad03.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad03')
		},
	})
}])
