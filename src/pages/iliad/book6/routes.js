angular.module('pageIliadBook6')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book6/', {
			templateUrl: 'pages/iliad/book6/book6.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook6');
			},
		});
	}]);
