//homeCtrl
app.controller('homeCtrl',['$scope','$location', 'usernamePassing',
	function($scope, $location,usernamePassing){
	   $scope.name="";
		$scope.submit=function(){
			name=$('input')[0].value;
            console.log(name);
            usernamePassing.setUser(name);
			$location.path("/Game");
			
		}

	}

]);

