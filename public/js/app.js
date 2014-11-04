angular.module("myApp", [])
 .controller('mainCtrl', function($scope){
	$scope.books = [
		{title: 'Titan', price: 300},
		{title: 'Kamo', price: 500},
		{title: 'Elsa', price: 800}
	];
 })
