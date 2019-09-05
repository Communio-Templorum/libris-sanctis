angular.module('pageIliadBook5')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book5/', {
			templateUrl: 'pages/iliad/book5/book5.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook5');
			},
		});
	}]);
