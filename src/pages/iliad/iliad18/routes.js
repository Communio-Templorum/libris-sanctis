'use strict';

angular.module('pageIliadIliad18')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad18/', {
		templateUrl: 'pages/iliad/iliad18/iliad18.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad18')
		},
	})
}])
