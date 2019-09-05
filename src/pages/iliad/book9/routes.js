angular.module('pageIliadBook9')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book9/', {
			templateUrl: 'pages/iliad/book9/book9.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook9');
			},
		});
	}]);
