'use strict';

angular.module('pageIliadIliad23')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad23/', {
		templateUrl: 'pages/iliad/iliad23/iliad23.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad23')
		},
	})
}])
