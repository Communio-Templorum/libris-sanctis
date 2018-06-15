'use strict';

angular.module('pageIliadBook18')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book18/', {
		templateUrl: 'pages/iliad/book18/book18.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook18')
		},
	})
}])
