angular.module('pageIliadBook10')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book10/', {
			templateUrl: 'pages/iliad/book10/book10.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook10');
			},
		});
	}]);
