'use strict';

angular.module('pageIliadBook19')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book19/', {
		templateUrl: 'pages/iliad/book19/book19.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook19')
		},
	})
}])
