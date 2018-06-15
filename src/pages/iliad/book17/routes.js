'use strict';

angular.module('pageIliadBook17')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book17/', {
		templateUrl: 'pages/iliad/book17/book17.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook17')
		},
	})
}])
