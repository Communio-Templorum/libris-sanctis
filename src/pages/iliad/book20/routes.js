'use strict';

angular.module('pageIliadBook20')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book20/', {
		templateUrl: 'pages/iliad/book20/book20.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook20')
		},
	})
}])
