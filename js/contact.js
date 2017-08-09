//////////////////////////////////////////
//////////////////////////////////////////
/////////// Contact Controller ///////////
//////////////////////////////////////////
////////////////////////////////////////// 
myApp.controller('ContactController',['$scope','$http',function($scope,$http){
	
	console.log('test form controller');

	$scope.submitform = function() {
		
		var datafromuser = $scope.user;
		console.log('test form submit');
		console.log(datafromuser);
	    var jsonString = JSON.stringify($scope.user);
	    $http({
	        method  : 'POST',
	        url     : 'php/form.php',
	        data    : jsonString 
	        
	    }).then(function(response){
		  $scope.status = response.status;
		  $scope.data = response.data;
		  $scope.result = response.data;
		  console.log('sucsess');
		  $scope.message = 'Hi ' + $scope.user.fname + ' we recived your message';
		  console.log($scope.message);
		},function(response){
		//error

			console.log('Contact error');
		});
	  };
	  
}]);