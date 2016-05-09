
angular.module('studCtrl', [])
.controller("studentController",function($scope,$http,$window,$location){
	
	var refresh = function(){
		/*
		$http.get("http://172.27.59.110:8000/students").success(function(response){
			console.log('refresh success');
			$scope.students = response;
			console.log($scope.students);
		});
		*/
		console.log('refresh success');
		$scope.students = [{"id":1,"name":"Pratiksha"},{"id":2,"name":"Sudhanshu"},{"id":3,"name":"Pallavi"},{"id":4,"name":"Abhishek"},{"id":5,"name":"Himanshu"}];
		$scope.students = $scope.students.sort(function(student1,student2){
			return student1.name>student2.name;
		});
	};
	
	
		$scope.show = function(id){
		/*
		$http.get('http://172.27.59.139:8002/list' + $routeParams.id).success(function(response){
             $scope.student=response;
		}
		*/
		
		console.log(id);
		$scope.student_info = $scope.students.filter(function(student){
			return student.id == id;
		});
	};
	
	refresh();
});
