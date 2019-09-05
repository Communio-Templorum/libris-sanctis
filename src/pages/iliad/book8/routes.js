angular.module('pageIliadBook8')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book8/', {
			templateUrl: 'pages/iliad/book8/book8.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook8');
			},
		});
	}]);
