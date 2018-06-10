'use strict';

angular.module('pageIliadIliad11')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad11/', {
		templateUrl: 'pages/iliad/iliad11/iliad11.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad11')
		},
	})
}])
