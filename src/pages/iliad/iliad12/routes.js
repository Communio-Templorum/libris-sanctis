'use strict';

angular.module('pageIliadIliad12')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad12/', {
		templateUrl: 'pages/iliad/iliad12/iliad12.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad12')
		},
	})
}])
