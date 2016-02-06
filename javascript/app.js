var app = angular.module('LiveCodingAngular', ['angularMoment', 'ngAnimate', 'toast']);
app.controller('LiveCoding', function($scope, $http, Toast){

	$scope.name = 'Isaiah';
	$scope.date = Date.now();
	$scope.list_items = [1, 2, 3, 4, 5];
	$scope.list_type_items = [{value: 1, type: 'blue'}, {value: 2, type: 'green'}, {value: 3, type: 'green'}, {value: 4, type: 'blue'}];
	$scope.isShowingText = false;
	$scope.input_data = {text: ''};

	$scope.removeListItem = function(index){
		$scope.list_items.splice(index, 1);
	};

	$scope.removeListTypeItem = function(index){
		$scope.list_type_items.splice(index, 1);
	};

	$http.get('http://www.json-generator.com/api/json/get/bZusndGNyW?indent=2')
	.then(function(response){
		if(response.data.success){
			Toast.makeText('success','Success!', response.data.message, 5000);
		}else{
			Toast.makeText('error','Error!', response.data.message, 5000);
		}
	},
	function(error){

	});

	

});