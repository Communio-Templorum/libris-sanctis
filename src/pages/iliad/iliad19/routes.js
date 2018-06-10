'use strict';

angular.module('pageIliadIliad19')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad19/', {
		templateUrl: 'pages/iliad/iliad19/iliad19.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad19')
		},
	})
}])
