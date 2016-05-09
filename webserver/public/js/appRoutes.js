angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	
	$routeProvider
	.when('/',{
		templateUrl: 'views/student.html',
		controller: 'studentController'
	});
	

	$locationProvider.html5Mode(true);
}]);