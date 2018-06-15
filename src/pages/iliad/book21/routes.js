'use strict';

angular.module('pageIliadBook21')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book21/', {
		templateUrl: 'pages/iliad/book21/book21.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook21')
		},
	})
}])
