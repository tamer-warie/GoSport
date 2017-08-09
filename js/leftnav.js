//////////////////////////////////////////
//////////////////////////////////////////
/////////// Left Nav Controller //////////
//////////////////////////////////////////
////////////////////////////////////////// 
myApp.directive('collection', function () {
	return {
		restrict: "E",
		replace: true,
		scope: {
			collection: '='
		},
		template: "<ul><part ng-repeat='part in collection' part='part'></part></ul>"
	};
})
.directive('part', function ($compile) {
	return {
		restrict: "E",
		replace: true,
		scope: {
			part: '='
		},
		template: "<li><a href='{{part.link}}'><span>{{part.name}}</span></a></li>",
		link: function (scope, element, attrs) {

			if (angular.isArray(scope.part.children)) {
				element.addClass("parent-li");
				element.append("<collection collection='part.children' class='parent-ul'></collection>"); 
				$compile(element.contents())(scope);
				console.log(scope.part.children);
			}
		}
	};
})

.controller('NavCtrl',['$scope','$http',function($scope,$http){
		
		$http({
	        method  : 'GET',
	        url     : 'js/data/nav.json',
	         
	    }).then(function(response){

		  $scope.status = response.status;
		  $scope.navdata = response.data;
		  
		  console.log('navdata sucsess');
		  console.log($scope.navdata);

		},function(response){
		//error

			console.log('navdata error');
		});

}]);