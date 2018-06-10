'use strict';

angular.module('pageIliadIliad22')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad22/', {
		templateUrl: 'pages/iliad/iliad22/iliad22.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad22')
		},
	})
}])
