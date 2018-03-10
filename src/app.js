/* app.json */

angular.module('Libris Sanctis', modules)
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/home.html',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageHome')
		},
	})
	.otherwise({redirectTo: '/'})
}])
