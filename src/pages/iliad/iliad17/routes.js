'use strict';

angular.module('pageIliadIliad17')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad17/', {
		templateUrl: 'pages/iliad/iliad17/iliad17.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad17')
		},
	})
}])
