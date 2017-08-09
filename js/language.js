//////////////////////////////////////////
//////////////////////////////////////////
/////////// Language Controller //////////
//////////////////////////////////////////
////////////////////////////////////////// 
myApp.controller('LanguageController',['$scope','$http',function($scope, $http){

		$http({
	        method  : 'GET',
	        url     : 'js/data/language.json',
	         
	    }).then(function(response){

		  $scope.status = response.status;
		  $scope.LanguageElements = response.data;
		  
		  console.log('LanguageElements sucsess');
		  console.log("LanguageElements "+$scope.LanguageElements);

		  if(window.localStorage.getItem('userLang')){
				console.log('yes there is localStorage');
				var userLang = window.localStorage.getItem('userLang');
				console.log(userLang);
				$scope.selectedLanguage = $scope.LanguageElements[userLang];
				$('.'+userLang).attr('checked', 'checked');
			}else{
				console.log('No there is no localStorage');
				console.log($scope.LanguageElements);
				// Default language = EN
				$scope.selectedLanguage = $scope.LanguageElements.EN;
				$('.EN').attr('checked', 'checked');
			}
		},function(response){
		//error

			console.log('LanguageElements error');
		});
	
	$scope.selectedLanguageF = function(language) {
    	$scope.selectedLanguage = $scope.LanguageElements[language];
    	window.localStorage.setItem('userLang', language );
    	console.log('user chosed lang: '+language);
    	window.localStorage.getItem('userLang');
    	console.log('lang from localStorage: '+language);
  	};

	
}]); 
