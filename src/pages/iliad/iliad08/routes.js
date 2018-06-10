'use strict';

angular.module('pageIliadIliad08')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/iliad08/', {
		templateUrl: 'pages/iliad/iliad08/iliad08.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadIliad08')
		},
	})
}])
