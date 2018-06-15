'use strict';

angular.module('pageIliadBook22')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book22/', {
		templateUrl: 'pages/iliad/book22/book22.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook22')
		},
	})
}])
