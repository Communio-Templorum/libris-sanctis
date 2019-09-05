angular.module('pageIliadBook13')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book13/', {
			templateUrl: 'pages/iliad/book13/book13.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook13');
			},
		});
	}]);
