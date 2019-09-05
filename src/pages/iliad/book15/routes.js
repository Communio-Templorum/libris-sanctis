angular.module('pageIliadBook15')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book15/', {
			templateUrl: 'pages/iliad/book15/book15.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook15');
			},
		});
	}]);
