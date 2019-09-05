angular.module('pageIliadBook24')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book24/', {
			templateUrl: 'pages/iliad/book24/book24.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook24');
			},
		});
	}]);
