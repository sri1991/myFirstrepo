var app=angular.module("sampleApp",['appRouter']);
//Player name service
app.service('usernamePassing',
    function()
    {

        var user='';
        return{
            getUser :
                function () {
                    return user;
                },
            setUser :
                function (value) {
                    user = value;
                    //return user;
                }
        };
    }
)
//Banker amount passing

app.service('bankerAmountPassing',
    function()
    {

        var amt='';
        return{
            getAmt :
                function () {
                    return amt;
                },
            setAmt :
                function (value) {
                    amt = value;
                    //return amt;
                }
        };
    }
)


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


//GameCtrl
app.controller('GameCtrl',['$scope','$location', 'usernamePassing','bankerAmountPassing',
        function($scope,$location,usernamePassing,bankerAmountPassing){
        $scope.name=usernamePassing.getUser();
        $scope.items=[];
        $scope.amounts=[1,2,5,10,25,50,75,100,200,300,400,500,750];
        $scope.amounts1=[1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];
        $scope.prices=[1,2,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];
        $scope.bankAmounts=[1,2,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,50000,75000,100000,200000,300000,400000,500000,750000,1000000];
        var id =100;
        for(var i=0;i<26;i++){
            var index=Math.floor(Math.random()*$scope.prices.length);
            var amount=$scope.prices[index];
            $scope.prices.splice(index,1);
            id++;
            //console.log(amount+" "+id);
            $scope.items.push({"image":"assests/images/case.png","id":id,"amount":amount});
        }
        
        $scope.toggle=function() {
        $scope.myVar = !$scope.myVar;
        };
         
        $scope.click=0;
        $scope.flag=0;      
        $scope.doClick = function(item, event) {
            
            if($scope.flag==0){
                $scope.click++;
                $scope.flag=1;
                if($scope.click==1){
                    $scope.price=event.target.getAttribute('value');
                    $('#selected').append("<img src='assests/images/case.png' value="+$scope.price+">");
                    //$('#'+event.target.id).attr('disabled', true);
                    console.log(event.target);
                    item.image="";
                    $('#rounds').html('Round 1');
                    $('#noCases').html('6 Cases to be selected');
                    $('.bottom h3').css('margin-top','-77px');
                    $('.bottom span').css('margin-left','235px');
                }
            }
            else{
                if(document.getElementById(event.target.getAttribute('value')).innerHTML){}
                    else{
                        $scope.click++;
                    }
                
                if($scope.click>1 && $scope.click<=7){
                    rounds();
                    if($scope.click==7){
                    $('#block').show();
                    
                    setTimeout(function () { bankLogic(); },2000 );
                    $scope.deal=function(){
                        //alert("deal"+$scope.avg);
                        deal();
                    }
                    $scope.noDeal=function(){
                        nodeal();
                        $('#rounds').html('Round 2');
                    $('#noCases').html('6 Cases to be selected');
                    $('.bottom h3').css('margin-top','-77px');
                    $('.bottom span').css('margin-left','235px');
                    }

 
                    }
                }
                else if($scope.click>7 && $scope.click<=13){
                    rounds();
                    if($scope.click==13){
                    $('#block').show();
                    
                    setTimeout(function () { bankLogic(); },2000 );
                    $scope.deal=function(){

                        //alert("deal");
                        deal();
                    }
                    $scope.noDeal=function(){
                        nodeal();
                        $('#rounds').html('Round 3');
                    $('#noCases').html('4 Cases to be selected');
                    $('.bottom h3').css('margin-top','-77px');
                    $('.bottom span').css('margin-left','235px');
                    }
 
                    }
                }
                 else if($scope.click>13 && $scope.click<=17){
                    rounds();
                    if($scope.click==17){
                    $('#block').show();
                    
                    setTimeout(function () { bankLogic(); },2000 );
                    $scope.deal=function(){
                        deal();
                        //alert("deal");
                    }
                    $scope.noDeal=function(){
                        nodeal();
                        $('#rounds').html('Round 4');
                    $('#noCases').html('4 Cases to be selected');
                    $('.bottom h3').css('margin-top','-77px');
                    $('.bottom span').css('margin-left','235px');
                    }

 
                    }
                }
                 else if($scope.click>17 && $scope.click<=21){
                    rounds();
                    if($scope.click==21){
                    $('#block').show();
                    
                    setTimeout(function () { bankLogic(); },2000 );
                    $scope.deal=function(){

                        //alert("deal");
                        deal();
                    }
                    $scope.noDeal=function(){
                        nodeal();
                        $('#rounds').html('Round 5');
                    $('#noCases').html('4 Cases to be selected');
                    $('.bottom h3').css('margin-top','-77px');
                    $('.bottom span').css('margin-left','235px');
                    }
 
                    }
                }
                 else if($scope.click>21 && $scope.click<=25){
                    rounds();
                    if($scope.click==25){
                    $('#block').show();
                    
                    setTimeout(function () { bankLogic(); },2000 );
                    $scope.deal=function(){
                        deal();
                        //alert("deal");
                    }
                    $scope.noDeal=function(){
                        nodeal();
                        //end logic
                        
                    }
                    }
                }
            }
            
            function rounds(){

                $scope.price=event.target.getAttribute('value');
                //alert(" price: "+$scope.price);
                console.log($scope.price);
                //$('#'+event.target.id)[0].src="assests/images/case_open.png";
                item.image="assests/images/case_open.png";
                //console.log( $("#"+$scope.price));
                $($("#"+$scope.price)).html("<img src='assests/images/inr_case_open_status.png'>"+$scope.price);
                //console.log("id: "+event.target.id);
                var ind=$scope.bankAmounts.indexOf(parseInt($scope.price));
                //console.log("index:"+ind);
                $scope.bankAmounts.splice(ind,1);
                //console.log($scope.bankAmounts);

                for(var i=0;i<$('.amounts').length;i++){

                    if($scope.price==document.getElementsByClassName('amounts')[i].innerHTML){

                        var ele=document.getElementsByClassName('amounts')[i];
                        ele.style.backgroundImage="url('assests/images/amountOpenedBg.png')";
                        //ele.className=ele.className+" new_class";
                        //console.log("new class");
                    }
                }


                
            }

            //banker offer
            function bankLogic(){

                $scope.bankerAmt=0;
                //alert("banker offer");
                $('#cases').fadeOut();
                $('#banker').show();
                //console.log($scope.bankAmounts);
                for( var k = 0; k < $scope.bankAmounts.length; k++ ){
                    $scope.bankerAmt+= parseInt( $scope.bankAmounts[k], 10 ); 
                }

                $scope.avg =  Math.ceil($scope.bankerAmt/$scope.bankAmounts.length);
                //console.log(Math.ceil(avg));
                $('#bankerAmount').html($scope.avg);
            }//

           function nodeal(){
                $('#cases').fadeIn();
                $('#banker').hide();
                $('#block').hide();

           }//
            
            function deal(){
                bankerAmountPassing.setAmt($scope.avg);
                $location.path("/End");
            }//
 
            }

        }



    ]);
//endCtrl

app.controller('endCtrl',['$scope','$location', 'usernamePassing','bankerAmountPassing',
        function($scope,$location,usernamePassing,bankerAmountPassing){

            $scope.name=usernamePassing.getUser();
            $scope.amt=bankerAmountPassing.getAmt();
        }
        ]);