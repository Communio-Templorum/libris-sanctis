angular.module('pageIliadBook11')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book11/', {
			templateUrl: 'pages/iliad/book11/book11.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook11');
			},
		});
	}]);
