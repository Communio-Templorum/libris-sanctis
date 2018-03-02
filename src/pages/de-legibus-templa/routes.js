'use strict';

angular.module('pageDeLegibusTempla')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/de-legibus-templa/', {
		templateUrl: 'pages/de-legibus-templa/de-legibus-templa.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageDeLegibusTempla')
		},
	})
}])
