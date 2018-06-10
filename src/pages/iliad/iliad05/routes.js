'use strict';

angular.module('pageIliadIliad05')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad05/', {
		templateUrl: 'pages/iliad/iliad05/iliad05.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad05')
		},
	})
}])
