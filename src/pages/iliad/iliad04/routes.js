'use strict';

angular.module('pageIliadIliad04')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad04/', {
		templateUrl: 'pages/iliad/iliad04/iliad04.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad04')
		},
	})
}])
