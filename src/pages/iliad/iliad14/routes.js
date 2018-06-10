'use strict';

angular.module('pageIliadIliad14')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad14/', {
		templateUrl: 'pages/iliad/iliad14/iliad14.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad14')
		},
	})
}])
