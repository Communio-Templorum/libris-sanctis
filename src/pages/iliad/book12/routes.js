'use strict';

angular.module('pageIliadBook12')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book12/', {
		templateUrl: 'pages/iliad/book12/book12.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook12')
		},
	})
}])
