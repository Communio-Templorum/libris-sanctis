angular.module('pageRituals')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/rituals/', {
		templateUrl: 'pages/rituals/rituals.html',
		controllerAs: '$ctrl',
		controller() {
		},
	})
}])
