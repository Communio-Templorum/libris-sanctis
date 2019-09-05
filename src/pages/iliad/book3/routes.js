angular.module('pageIliadBook3')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book3/', {
			templateUrl: 'pages/iliad/book3/book3.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook3');
			},
		});
	}]);
