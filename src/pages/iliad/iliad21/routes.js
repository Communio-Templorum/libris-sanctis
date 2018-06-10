'use strict';

angular.module('pageIliadIliad21')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad21/', {
		templateUrl: 'pages/iliad/iliad21/iliad21.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad21')
		},
	})
}])
