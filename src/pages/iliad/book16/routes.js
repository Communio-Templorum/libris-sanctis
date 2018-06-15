'use strict';

angular.module('pageIliadBook16')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book16/', {
		templateUrl: 'pages/iliad/book16/book16.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook16')
		},
	})
}])
