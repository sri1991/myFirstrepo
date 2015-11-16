//endCtrl

app.controller('endCtrl',['$scope','$location', 'usernamePassing','bankerAmountPassing',
        function($scope,$location,usernamePassing,bankerAmountPassing){

            $scope.name=usernamePassing.getUser();
            $scope.amt=bankerAmountPassing.getAmt();
        }
        ]);