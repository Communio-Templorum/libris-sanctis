'use strict';

angular.module('pageIliadBook1')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/iliad/book1/', {
		templateUrl: 'pages/iliad/book1/book1.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageIliadBook1')
		},
	})
}])
