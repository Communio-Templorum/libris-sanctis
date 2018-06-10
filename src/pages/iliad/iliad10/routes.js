'use strict';

angular.module('pageIliadIliad10')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad10/', {
		templateUrl: 'pages/iliad/iliad10/iliad10.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad10')
		},
	})
}])
