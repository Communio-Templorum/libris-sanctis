'use strict';

angular.module('pageIliadBook4')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book4/', {
		templateUrl: 'pages/iliad/book4/book4.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook4')
		},
	})
}])
