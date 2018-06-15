'use strict';

angular.module('pageIliadBook23')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book23/', {
		templateUrl: 'pages/iliad/book23/book23.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook23')
		},
	})
}])
