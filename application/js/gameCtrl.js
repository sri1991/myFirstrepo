//GameCtrl
app.controller('GameCtrl',['$scope','$location', 'usernamePassing','bankerAmountPassing','$http',
        function($scope,$location,usernamePassing,bankerAmountPassing,$http){
        $scope.name=usernamePassing.getUser();
        $scope.items=[];
        $scope.listLeft=[];
        $scope.listRight=[];
        $scope.listAmounts=[];
        $scope.bankAmounts=[];

        $http.get('application/js/data.json').
                    success(function(data, status, headers, config) {
                      //$scope.posts = data;
                      //console.log($scope.posts);
                      $scope.prices=data;
                      //console.log($scope.prices);
                        var id =100;
                        $scope.value='';
                        for(var i=0;i<26;i++){
                            $scope.listAmounts.push(data[i]);
                            $scope.bankAmounts.push(data[i]);
                            
                            if(i<=12){
                                $scope.listLeft.push($scope.listAmounts[i]);
                            }else{
                                $scope.listRight.push($scope.listAmounts[i]);
                            }
                        }
                        console.log('amounts'+$scope.bankAmounts);
                        for(var i=0;i<26;i++){

                            var index=Math.floor(Math.random()*$scope.prices.length);
                            var amount=$scope.prices[index];
                            $scope.prices.splice(index,1);
                            id++;
                            //console.log(amount+" "+id);
                            $scope.items.push({"image":"assests/images/case.png","id":id,"amount":amount});
                            
                        }
         }).
        error(function(data, status, headers, config) {
            // log error
            console.log("error");
        });


        
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
                    $('#selected').append("<img src='assests/images/case.png' value="+$scope.price+" id="+event.target.id+">");
                    //$('#'+event.target.id).attr('disabled', true);
                    $('#selected label').html(event.target.id.substr(1));
                    console.log(event.target);
                    item.image="";
                    $('bottom span').addClass('bottom_span');
                    $('#rounds').html('Round 1');
                    $('#noCases').html('6 Cases to be selected');
                    
                   
                }
            }
            else{
                if(document.getElementById(event.target.getAttribute('value')).innerHTML){}
                    else{
                        $scope.click++;
                        console.log($scope.click);
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
                   
                      $('bottom span').addClass('bottom_span');
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
                    
                  $('bottom span').addClass('bottom_span');
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
                    $('bottom span').addClass('bottom_span');
                   
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
                    $('bottom span').addClass('bottom_span');
                    
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
                        console.log($scope.bankAmounts);
                        // for(var a=101;a<=126;a++){if($('#'+a).attr('src')!='assests/images/case_open.png' && $('#'+a).attr('src')!=''){
                        //       var idSpan=$('#'+a).attr('value');
                        //       var c=a.toString();
                        //       $('#'+idSpan).html(c.substr(1));
                        //       $('#'+idSpan).css({'color':'#000','left':'50px','font-weight':'bold','font-size':'30px'});
                        //     }}
                        setTimeout(function () {
                            $('#cases').fadeOut();   
                            $('#swap').fadeIn();
                            $('#swap').append('<h6>SWAP ?</h6>');
                            $('#swap').append($('#selected img'));
                            $('#swap').append($('#selected label'));
                            $scope.leftId='';
                            for(var a=101;a<=126;a++){
                                if($('#'+a).attr('src')!='assests/images/case_open.png' && $('#'+a).attr('src')!='')
                                {
                                    // var idSpan=$('#'+a).attr('value');
                                    var c=a.toString();
                                    $scope.leftId=c.substr(1);
                                    $('#swap').append($('#'+a));
                                    $('#swap').append("<label>"+c.substr(1)+"</label>")
                                }
                            }

                             $('#rounds').html('You can swap your case');
                             $('#noCases').html('your case '+$('#swap label').html()+'  Left '+$scope.leftId);
                             $('#rounds').css('margin-left','150px');
                             $('#noCases').css({'margin-left':'183px','margin-top':'5px'});
                            
                       
                             
                             $('#swap').find('img').each(function(b){
                                    $(this).on("click",{x:b},function(event){
                                        //console.log(event.target);
                                        //alert(event.data.x);
                                        $('#swap h6').hide();
                                        $('#swap').css('margin-left','425px');
                                        $('#rounds').empty();
                                        $('#noCases').empty();
                                        $('.bottom h3').css('margin-top','-40px');

                                        if(event.data.x==0)
                                        {

                                            $('#swap img').last().fadeOut();
                                            $('#swap label').last().fadeOut();
                                            $('#swap label').first().css('top','40px');
                                            

                                            setTimeout(function(){
                                              $('#swap img').first().attr("src","assests/images/case_open.png");
                                              $scope.value=$('#swap img').first().attr('value');
                                              $('#swap label').first().html($('#swap img').first().attr('value'));
                                              $('#swap label').first().css({'left':'8px','color':'#fff'});     
                                              setTimeout(function(){
                                                //testing
                                                $('#gamePage').empty();
                                                //console.log($scope.name);
                                                //console.log($scope.value);
                                                $('#gamePage').html("<div id =final><img src=assests/images/titleTop.png alt=logo id=logo><div id=final_img><div class=text><h1>Congrats</h1><p>"+$scope.name+"</p><p>You Win</p><p>"+$scope.value+"</p></div></div></div>");
                                                //testing
                                                
                                              }, 2000); 
                                              
                                            },2000);
                                            
                                        }
                                        else{
                                            $('#swap img').first().fadeOut();
                                            $('#swap label').first().fadeOut();
                                            $('#swap label').last().css({'left': '50px','top': '40px'});
                                            setTimeout(function(){
                                              $('#swap img').last().attr("src","assests/images/case_open.png");
                                              $scope.value=$('#swap img').last().attr('value');
                                               $('#swap label').last().html($('#swap img').last().attr('value'));
                                               $('#swap label').last().css({'left':'8px','color':'#fff'});
                                               setTimeout(function(){

                                                $('#gamePage').empty();
                                                //console.log($scope.name);
                                                //console.log($scope.value);
                                                $('#gamePage').html("<div id =final><img src=assests/images/titleTop.png alt=logo id=logo><div id=final_img><div class=text><h1>Congrats</h1><p>"+$scope.name+"</p><p>You Win</p><p>"+$scope.value+"</p></div></div></div>");

                                              }, 2000); 
                                               

                                            },2000);

                                        }
                                    });
                                });

                            },2000 );
                        
                    }
                    }
                }
                
            }
            //rounds
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

                    if($scope.price==document.getElementsByClassName('amounts')[i].innerHTML.substr(25)){

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
                console.log($scope.bankAmounts);
                for( var k = 0; k < $scope.bankAmounts.length; k++ ){
                    $scope.bankerAmt+= parseInt( $scope.bankAmounts[k], 10 ); 
                }

                $scope.avg =  Math.ceil(($scope.bankerAmt/$scope.bankAmounts.length)+(0.01*($scope.bankerAmt/$scope.bankAmounts.length)));
                //console.log($scope.avg);
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
