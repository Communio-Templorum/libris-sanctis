'use strict';

angular.module('pageIliadBook14')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book14/', {
		templateUrl: 'pages/iliad/book14/book14.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook14')
		},
	})
}])
