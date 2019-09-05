angular.module('pageIliadBook7')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book7/', {
			templateUrl: 'pages/iliad/book7/book7.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook7');
			},
		});
	}]);
