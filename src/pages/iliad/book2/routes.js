angular.module('pageIliadBook2')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/iliad/book2/', {
			templateUrl: 'pages/iliad/book2/book2.html',
			controllerAs: '$ctrl',
			controller() {
				angular.element('[ng-view]').attr('ng-view', 'pageIliadBook2');
			},
		});
	}]);
