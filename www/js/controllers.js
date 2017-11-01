
angular.module('starter.controllers', ['ngMessages', 'ngCordova', 'ionic-ratings', 'ionic.rating'])


.controller('ReviewCtrl', function($scope,$http,$state,$ionicLoading, $cordovaToast, ReviewService) {

   $scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };
 

  $scope.hide = function(){
        $ionicLoading.hide();
  }; 

 
  $scope.reviewpage=function(){
 
  $state.go('review');
}


 $scope.reviewpage1=function(){
      $scope.secret_Key = localStorage.getItem("pswrdll");


                if($scope.secret_Key!=null){
                  $state.go('addreview');
                }
                else
                {
                 
                   $cordovaToast.show('You need to login first for write a review', 'long', 'center');
                }
}

$scope.reviewback_edit = function(){
  $state.go('app.admin_review');
}

  $scope.tname = localStorage.getItem("tname");
  $scope.review_edit = localStorage.getItem("review");
 

$scope.edit_review=function(tname, review){

  localStorage.setItem("tname", tname);
  localStorage.setItem("review", review);
  $state.go('edit_review');

 
}



 $scope.createdelivery=function(){
   $state.go('app.deliveryboy');
}

 $scope.reviewpage=1;
  $scope.loadMorereview = function(reviewpage){
    $scope.reviewpage = reviewpage+1;
    ReviewService.GetOldUsers($scope.reviewpage).then(function(review) {
      $scope.review = $scope.review.concat(review);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

 $http({
    method: "GET",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/readreview.php",
   
       // $scope.angular_var is angular variable e.g. ng-model="angular_var"
   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (review) {

  $scope.review = review;
  $scope.hide($ionicLoading);
  $scope.rating = {};
  $scope.rating.rate = 1;
  $scope.rating.max = 5;

})  

$http({
    method: "GET",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/invoicetifin.php"
}).success(function (tfndata) {
    $scope.tfndata = tfndata;
    $scope.hide($ionicLoading);
})

$http({
    method: "GET",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/totalreview.php"
}).success(function (reviewnum) {
    $scope.reviewnum = reviewnum;
    $scope.hide($ionicLoading);
})

$scope.reviewback=function(){
  $state.go('review');
  $scope.show($ionicLoading);
}

$scope.reviewhome=function(){
  $state.go('homepage');
  $scope.show($ionicLoading);
}

$scope.reviewbackadmin=function(){
  $state.go('app.adminreview');
  $scope.show($ionicLoading);
}




$scope.createdboy = function(dunm, dpswd, mobile) {

if(dunm === undefined){
       // humane.log('invalid login : '+data.length)
      
     $cordovaToast.show('Enter Username', 'short', 'center');
  }
else if(dpswd === undefined){
  
   $cordovaToast.show('Enter Password', 'short', 'center');
}

else if(mobile === undefined){
  
   $cordovaToast.show('Enter Mobile Number', 'short', 'center');
}
else
   {

     $scope.show($ionicLoading);
       
 localStorage.setItem("dunm",dunm);
 localStorage.setItem("dpswd",dpswd);
localStorage.setItem("mobile",mobile);
       
var dataObject = {
                  "dunm": localStorage.getItem("dunm"),
                  "dpswd": localStorage.getItem("dpswd"),
                  "mobile": localStorage.getItem("mobile")
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/dboy.php",
            data: Object.toparams(dataObject)

          }     
             $scope.dunm="";
             $scope.dpswd="";
             $scope.mobile="";
             $http(request).success(function(data){
               $scope.hide($ionicLoading);
              $cordovaToast.show('Delivery boy created successfully', 'short', 'center');
              
              
            })
         }
        }    


 $scope.ratingsObject = {
        iconOn: 'ion-ios-star',    //Optional
        iconOff: 'ion-ios-star-outline',   //Optional
        iconOnColor: '#f16539',  //Optional
        iconOffColor:  'rgb(200, 100, 100)',    //Optional
        rating:  2, //Optional
        minRating:2,    //Optional
        readOnly: true, //Optional
        callback: function(rating, index) {    //Mandatory
          $scope.ratingsCallback(rating, index);
        }
      };

$scope.ratingsObject1 = {
        iconOn: 'ion-ios-star',    //Optional
        iconOff: 'ion-ios-star',   //Optional
        iconOnColor: '#f16539',  //Optional
        iconOffColor:  'rgb(200, 100, 100)',    //Optional
        rating:  2, //Optional
        minRating:1,    //Optional
        readOnly: true //Optional
       
      };
       $scope.ratingsCallback = function(rating, index) {
        
         
         localStorage.setItem("rating", rating+ index);
      };

  $scope.addreview = function(tname, rwv) {

if(tname === undefined){
       // humane.log('invalid login : '+data.length)
     
     $cordovaToast.show('Add Review', 'short', 'center');
  }
else if(rwv === undefined){
  
   $cordovaToast.show('Add Review', 'short', 'center');
}
else
   {

     $scope.show($ionicLoading);
       
 localStorage.setItem("tname",tname);
 localStorage.setItem("rwv",rwv);
       
var dataObject = {
                  "rwv": localStorage.getItem("rwv"),
                  "tname": localStorage.getItem("tname"),
                  "rating": localStorage.getItem("rating")
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://aksharsoftwaresolutions.esy.es/dailyfood/review.php",
            data: Object.toparams(dataObject)

          }     


         

           
          $http(request).success(function(data){
              $scope.hide($ionicLoading); 
              $state.go('review');
             $cordovaToast.show('Review Added', 'short', 'center');
            


           })
        }
      }
     

 $scope.adminreview = function(){
  $state.go('app.adminreview');
  $scope.show($ionicLoading);
 }    

 $scope.update_review = function(tname, review_edit) {

if(review_edit === undefined){
  
   $cordovaToast.show('Add Review', 'short', 'center');
}
else
   {

     $scope.show($ionicLoading);
       
 localStorage.setItem("tname",tname);
 localStorage.setItem("review_edit",review_edit);
       
var dataObject = {
                  "review_edit": localStorage.getItem("review_edit"),
                  "tname": localStorage.getItem("tname"),
                  "rating": localStorage.getItem("rating")
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://aksharsoftwaresolutions.esy.es/dailyfood/update_review.php",
            data: Object.toparams(dataObject)

          }     


         

           
          $http(request).success(function(data){
              $scope.hide($ionicLoading); 
              $state.go('app.admin_review');
              localStorage.removeItem("tname");
             localStorage.removeItem("review_edit");
             $cordovaToast.show('Review updated', 'short', 'center');
             
            


           })
        }
      }

           $scope.rating = {};
           $scope.rating.rate = 1;
           $scope.rating.max = 5;

 $scope.detailreview = function(name) {

localStorage.setItem("name",name);
$state.go('adminreviewdetail');
$scope.show($ionicLoading);
       
}

$scope.name = localStorage.getItem("name");

  $http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/reviewdetail.php",
    data: {
        angular_var: $scope.name // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (reviewdetail) {
   
   $scope.reviewdetail = reviewdetail; 
   $scope.hide($ionicLoading);
   })                      

})



.factory('PersonService', function($http){
 var BASE_URL = "http://api.randomuser.me/";
  var items = [];
  
  return {
    GetFeed: function(){
      return $http.get(BASE_URL+'?results=10').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetNewUsers: function(){
      return $http.get(BASE_URL+'?results=2').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetOldUsers: function(page){

      return $http.get("http://cssent.com/demo/coffee/dashorderlist1.php?pageres="+page).then(function(response){
        dashorder = response.data;
        return dashorder;
      });
    }
  }
})


.factory('ReviewService', function($http){
 var BASE_URL = "http://api.randomuser.me/";
  var items = [];
  
  return {
    GetFeed: function(){
      return $http.get(BASE_URL+'?results=10').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetNewUsers: function(){
      return $http.get(BASE_URL+'?results=2').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetOldUsers: function(reviewpage){

      return $http.get("http://aksharsoftwaresolutions.esy.es/dailyfood/readreview1.php?review="+reviewpage).then(function(response){
        review = response.data;
        return review;
      });
    }
  }
})



.factory('BillService', function($http){
 var BASE_URL = "http://api.randomuser.me/";
  var items = [];
  
  return {
    GetFeed: function(){
      return $http.get(BASE_URL+'?results=10').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetNewUsers: function(){
      return $http.get(BASE_URL+'?results=2').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetOldUsers: function(billpage){
       var bid1 = localStorage.getItem("bida");
        var bid2 = localStorage.getItem("bidb"); 
      return $http.get("http://cssent.com/demo/coffee/betbilldata1.php?pageresbill="+billpage+"&daa="+bid1+"&dbb="+bid2).then(function(response){
        betrecords = response.data;
        return betrecords;
      });
    }
  }
})

.factory('OrderlistService', function($http){
 var BASE_URL = "http://api.randomuser.me/";
  var items = [];
  
  return {
    GetFeed: function(){
      return $http.get(BASE_URL+'?results=10').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetNewUsers: function(){
      return $http.get(BASE_URL+'?results=2').then(function(response){
        items = response.data.results;
        return items;
      });
    },
    GetOldUsers: function(orderpage){
       var name = localStorage.getItem("unamell");
       return $http.get("http://cssent.com/demo/coffee/pre_orderchk1.php?orderlist="+orderpage+"&uname="+name).then(function(response){
        pre_confrm = response.data;
        return pre_confrm;
      });
    }
  }
})




.controller('BillCtrl', function($scope,$http,$state,$filter, $ionicLoading, $cordovaToast,$timeout,PersonService,BillService) {

 $scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };
  $scope.hide = function(){
        $ionicLoading.hide();
  }; 

$scope.name=localStorage.getItem("invoicetifin");

$http({
    method: "GET",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/invoicetifin.php"
}).success(function (tfndata) {
    $scope.tfndata = tfndata;
    $scope.hide($ionicLoading);
})

$scope.items = [];
  $scope.newItems = [];
  
  PersonService.GetFeed().then(function(items){
  $scope.items = items;
  });
  
  /*$scope.doRefresh = function() {
    if($scope.newItems.length > 0){
      $scope.items = $scope.newItems.concat($scope.items);
        
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
      
      $scope.newItems = [];
    } else {
      PersonService.GetNewUsers().then(function(items){
        $scope.items = items.concat($scope.items);
        
        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      });
    }
  };*/
 
  $scope.page=1;
  $scope.loadMore = function(page){
    $scope.page = page+1;
    PersonService.GetOldUsers($scope.page).then(function(dashorder) {
      $scope.dashorder = $scope.dashorder.concat(dashorder);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

   $scope.billpage=1;
  $scope.loadMorebill = function(billpage){
    $scope.billpage = billpage+1;
    BillService.GetOldUsers($scope.billpage).then(function(betrecords) {
      $scope.betrecords = $scope.betrecords.concat(betrecords);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
  
  /* var CheckNewItems = function(){
    $timeout(function(){
      PersonService.GetNewUsers().then(function(items){
        $scope.newItems = items.concat($scope.newItems);
      
        CheckNewItems();
      });
    },10000);
   }
  
  CheckNewItems();*/

   

$http({
    method: "GET",
    url: "http://cssent.com/demo/coffee/billdata.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (billdata) {

  $scope.billdata = billdata[0][0];
   $scope.hide($ionicLoading);

})
  $http({
    method: "GET",
    url: "http://cssent.com/demo/coffee/dashorderlist.php",
    // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (dashorder) {
    console.log(dashorder);
  if(dashorder!=''){
   $scope.zbill=true; 
   $scope.dashorder = dashorder;
   $scope.hide($ionicLoading);
 }
 else{

  $scope.zbill=false;
  $scope.avg=true;

 }
 })

$http({
    method: "post",
    url: "http://cssent.com/demo/coffee/admintotalorder.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (admintotal) {
  $scope.admintotal = admintotal;
})

$scope.gdi = localStorage.getItem("gdi");

  $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/onebilldata.php",
    data: {
        angular_var: $scope.gdi // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (records) {

   if(records!=''){
   $scope.abill=true; 
   $scope.amountrecords = records[0][10];
   $scope.records = records; 
   $scope.hide($ionicLoading);
 }
 else{
 $scope.abill=false;
 $scope.fvg=true; 

 }
   }) 

$http({
    method: "post",
    url: "http://cssent.com/demo/coffee/onedayorder.php",
    data: {
        angular_var: $scope.gdi // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (oneorder) {
   if(oneorder[0][0]===null){
     $scope.oneorder=0;
        }
    else{
    $scope.oneorder = oneorder[0][0];
        } 
   $scope.hide($ionicLoading);
   }) 


$scope.bid1 = localStorage.getItem("bida");
$scope.bid2 = localStorage.getItem("bidb"); 
 $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/betbilldata.php",
    data: {
        angular_var1: $scope.bid1,
        angular_var2: $scope.bid2 // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (betrecords) {
  

               if(betrecords!=''){
               $scope.cbill=true; 
               $scope.amountbetrecords = betrecords[0][10];
               $scope.betrecords = betrecords; 
               $scope.hide($ionicLoading);
             }
             else{
              $scope.cbill=false;
              $scope.cvg=true;
             }
   }) 




 $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/monthorder.php",
    data: {
        angular_var1: $scope.bid1,
        angular_var2: $scope.bid2 // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (weekorder) {
  
    if(weekorder[0][0]===null){
     $scope.weekorder=0;
        }
    else{
    $scope.weekorder = weekorder[0][0];
        }
   $scope.hide($ionicLoading);
   })     




$scope.onedatefer = function(gdi) {
if(gdi==undefined){
  
   $cordovaToast.show('Select Date', 'short', 'center');
}
else{  
$scope.cdate = $filter('date')(gdi, 'MMMM dd, yyyy');
localStorage.setItem("gdi", $scope.cdate);
$state.go('oneallbill');
$scope.show($ionicLoading);
}
}



$scope.betdatefer = function(bida, bidb) {
if(bida==undefined){
  
   $cordovaToast.show('Select Date', 'short', 'center');
}
if(bidb==undefined){
  
   $cordovaToast.show('Select Date', 'short', 'center');
}
else{  
         
         $scope.cdateiibida = $filter('date')(bida, 'MMMM dd, yyyy');
         $scope.cdateiibidb = $filter('date')(bidb, 'MMMM dd, yyyy');
         
        localStorage.setItem("bida",$scope.cdateiibida);
        localStorage.setItem("bidb",$scope.cdateiibidb);
          $state.go('betallbill');
$scope.show($ionicLoading);
}
}




 
 


$scope.invoice=function(){
 
 $state.go('app.invoice');
 localStorage.removeItem("gdi");
 localStorage.removeItem("bida");
 localStorage.removeItem("bidb");

              
}

$scope.list = function(){
  $state.go('app.list');
  $scope.show($ionicLoading);
}
$scope.allbill=function()
{
  
  $state.go('orderlist');
  $scope.show($ionicLoading);
}

$scope.onedate=function()
{
  $scope.datewise=true; 
  $scope.monthly=false;
  
}

$scope.betallbill=function()
{
  
 $scope.monthly=true;
 $scope.datewise=false;
}


$scope.editt=function(){

$scope.per=true;
$scope.calc=true;


}

$scope.percntage=function(total,perc){

$scope.total=total;
$scope.perc=perc;
$scope.adpay=($scope.total*$scope.perc)/100;
$scope.tfnpay=$scope.total-$scope.adpay;
$scope.adpmnt=true;
$scope.invice=true;
}


})

.controller('DeliverytimeCtrl', function($scope,$http,$rootScope, $ionicPlatform, $ionicHistory, $location, $cordovaToast, $state,$cordovaSms,$ionicLoading, $filter) {

$scope.delivery_update = function(e_lunch,e_tolunch, e_dinner, e_todinner) {

if(e_lunch === null){
       // humane.log('invalid login : '+data.length)
    
     $cordovaToast.show('Add estimated delivery time for lunch', 'short', 'center');
  }
else if(e_tolunch === null){
    
   $cordovaToast.show('Add estimated delivery time for lunch', 'short', 'center');
}

else if(e_dinner === null){
     
   $cordovaToast.show('Add estimated delivery time for dinner', 'short', 'center');
}

else if(e_todinner === null){
     
   $cordovaToast.show('Add estimated delivery time for dinner', 'short', 'center');
}

else
   {

     $scope.show($ionicLoading);

      $scope.e_lunch = $filter('date')(e_lunch, 'h:mm');
      localStorage.setItem("e_lunch", $scope.e_lunch);

      $scope.e_tolunch = $filter('date')(e_tolunch, 'h:mm a');
      localStorage.setItem("e_tolunch", $scope.e_tolunch);

     
      $scope.e_dinner = $filter('date')(e_dinner, 'h:mm');
      localStorage.setItem("e_dinner", $scope.e_dinner);

      $scope.e_todinner = $filter('date')(e_todinner, 'h:mm a');
      localStorage.setItem("e_todinner", $scope.e_todinner);

       
var dataObject = {
                  "e_lunch": localStorage.getItem("e_lunch"),
                  "e_tolunch": localStorage.getItem("e_tolunch"),
                  
                  "e_dinner": localStorage.getItem("e_dinner"),
                  "e_todinner": localStorage.getItem("e_todinner")
                 
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://aksharsoftwaresolutions.esy.es/dailyfood/delivery_time.php",
            data: Object.toparams(dataObject)

          }     


         
            
           
          $http(request).success(function(data){
             $state.go('app.manage_deliverytime1');
              
              localStorage.removeItem("e_lunch");
              localStorage.removeItem("e_tolunch");
          
              localStorage.removeItem("e_dinner");
              localStorage.removeItem("e_todinner");
             
               $scope.hide($ionicLoading);
           
             $cordovaToast.show('Time updated', 'short', 'center');
           
            


           })
        }
      }


$scope.delivery_update1 = function(e_lunch,e_tolunch, e_dinner, e_todinner) {

if(e_lunch === null){
       // humane.log('invalid login : '+data.length)
    
     $cordovaToast.show('Add estimated delivery time for lunch', 'short', 'center');
  }
else if(e_tolunch === null){
    
   $cordovaToast.show('Add estimated delivery time for lunch', 'short', 'center');
}

else if(e_dinner === null){
     
   $cordovaToast.show('Add estimated delivery time for dinner', 'short', 'center');
}

else if(e_todinner === null){
     
   $cordovaToast.show('Add estimated delivery time for dinner', 'short', 'center');
}

else
   {

     $scope.show($ionicLoading);

      $scope.e_lunch = $filter('date')(e_lunch, 'h:mm');
      localStorage.setItem("e_lunch", $scope.e_lunch);

      $scope.e_tolunch = $filter('date')(e_tolunch, 'h:mm a');
      localStorage.setItem("e_tolunch", $scope.e_tolunch);

     
      $scope.e_dinner = $filter('date')(e_dinner, 'h:mm');
      localStorage.setItem("e_dinner", $scope.e_dinner);

      $scope.e_todinner = $filter('date')(e_todinner, 'h:mm a');
      localStorage.setItem("e_todinner", $scope.e_todinner);

       
var dataObject = {
                  "e_lunch": localStorage.getItem("e_lunch"),
                  "e_tolunch": localStorage.getItem("e_tolunch"),
                  
                  "e_dinner": localStorage.getItem("e_dinner"),
                  "e_todinner": localStorage.getItem("e_todinner")
                 
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://aksharsoftwaresolutions.esy.es/dailyfood/delivery_time.php",
            data: Object.toparams(dataObject)

          }     


         
            
           
          $http(request).success(function(data){
             $state.go('app.manage_deliverytime');
              
              localStorage.removeItem("e_lunch");
              localStorage.removeItem("e_tolunch");
          
              localStorage.removeItem("e_dinner");
              localStorage.removeItem("e_todinner");
             
               $scope.hide($ionicLoading);
           
             $cordovaToast.show('Time updated', 'short', 'center');
             
            


           })
        }
      }
})

.controller('TimeCtrl', function($scope,$http,$rootScope, $ionicPlatform, $ionicHistory, $location, $cordovaToast, $state,$cordovaSms,$ionicLoading, $filter) {

$scope.time_update = function(d_lunch,d_tolunch, o_lunch, d_dinner, d_todinner, o_dinner) {

if(d_lunch === null){
       // humane.log('invalid login : '+data.length)
    
     $cordovaToast.show('Add delivery time for lunch', 'short', 'center');
  }
else if(d_tolunch === null){
    
   $cordovaToast.show('Add delivery time for lunch', 'short', 'center');
}
else if(o_lunch === null){
     
   $cordovaToast.show('Set order accept time for lunch', 'short', 'center');
}
else if(d_dinner === null){
     
   $cordovaToast.show('Add delivery time for dinner', 'short', 'center');
}

else if(d_todinner === null){
     
   $cordovaToast.show('Add delivery time for dinner', 'short', 'center');
}

else if(o_dinner === null){
  
   $cordovaToast.show('Set order accept time for dinner', 'short', 'center');
}
else
   {

     $scope.show($ionicLoading);

      $scope.d_lunch = $filter('date')(d_lunch, 'h:mm');
      localStorage.setItem("d_lunch", $scope.d_lunch);

      $scope.d_tolunch = $filter('date')(d_tolunch, 'h:mm a');
      localStorage.setItem("d_tolunch", $scope.d_tolunch);

      $scope.o_lunch = $filter('date')(o_lunch, 'h:mm a');
      localStorage.setItem("o_lunch", $scope.o_lunch);

      $scope.d_dinner = $filter('date')(d_dinner, 'h:mm');
      localStorage.setItem("d_dinner", $scope.d_dinner);

      $scope.d_todinner = $filter('date')(d_todinner, 'h:mm a');
      localStorage.setItem("d_todinner", $scope.d_todinner);

      $scope.o_dinner = $filter('date')(o_dinner, 'h:mm a');
      localStorage.setItem("o_dinner", $scope.o_dinner);


      $scope.t_lunch = $filter('date')(o_lunch, 'h');
      localStorage.setItem("t_lunch", $scope.t_lunch);


      $scope.t_dinner = $filter('date')(o_dinner, 'h');
      localStorage.setItem("t_dinner", $scope.t_dinner);
   
       
var dataObject = {
                  "d_lunch": localStorage.getItem("d_lunch"),
                  "d_tolunch": localStorage.getItem("d_tolunch"),
                  "o_lunch": localStorage.getItem("o_lunch"),
                  "d_dinner": localStorage.getItem("d_dinner"),
                  "d_todinner": localStorage.getItem("d_todinner"),
                  "o_dinner": localStorage.getItem("o_dinner"),
                  "t_lunch": localStorage.getItem("t_lunch"),
                  "t_dinner": localStorage.getItem("t_dinner")
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://aksharsoftwaresolutions.esy.es/dailyfood/update_time.php",
            data: Object.toparams(dataObject)

          }     


         
            
           
          $http(request).success(function(data){
             $state.go('app.manage_time1');
              
              localStorage.removeItem("d_lunch");
              localStorage.removeItem("d_tolunch");
              localStorage.removeItem("o_lunch");
              localStorage.removeItem("d_dinner");
              localStorage.removeItem("d_todinner");
              localStorage.removeItem("o_dinner");
              localStorage.removeItem("t_lunch");
              localStorage.removeItem("t_dinner");
              $scope.hide($ionicLoading);
           
             $cordovaToast.show('Time updated', 'short', 'center');
            


           })
        }
      }



$scope.time_update1 = function(d_lunch,d_tolunch, o_lunch, d_dinner, d_todinner, o_dinner) {

if(d_lunch === null){
       // humane.log('invalid login : '+data.length)
    
     $cordovaToast.show('Add delivery time for lunch', 'short', 'center');
  }
else if(d_tolunch === null){
    
   $cordovaToast.show('Add delivery time for lunch', 'short', 'center');
}
else if(o_lunch === null){
     
   $cordovaToast.show('Set order accept time for lunch', 'short', 'center');
}
else if(d_dinner === null){
     
   $cordovaToast.show('Add delivery time for dinner', 'short', 'center');
}

else if(d_todinner === null){
     
   $cordovaToast.show('Add delivery time for dinner', 'short', 'center');
}

else if(o_dinner === null){
  
   $cordovaToast.show('Set order accept time for dinner', 'short', 'center');
}
else
   {

     $scope.show($ionicLoading);

      $scope.d_lunch = $filter('date')(d_lunch, 'h:mm');
      localStorage.setItem("d_lunch", $scope.d_lunch);

      $scope.d_tolunch = $filter('date')(d_tolunch, 'h:mm a');
      localStorage.setItem("d_tolunch", $scope.d_tolunch);

      $scope.o_lunch = $filter('date')(o_lunch, 'h:mm a');
      localStorage.setItem("o_lunch", $scope.o_lunch);

      $scope.d_dinner = $filter('date')(d_dinner, 'h:mm');
      localStorage.setItem("d_dinner", $scope.d_dinner);

      $scope.d_todinner = $filter('date')(d_todinner, 'h:mm a');
      localStorage.setItem("d_todinner", $scope.d_todinner);

      $scope.o_dinner = $filter('date')(o_dinner, 'h:mm a');
      localStorage.setItem("o_dinner", $scope.o_dinner);

       $scope.t_lunch = $filter('date')(o_lunch, 'h');
      localStorage.setItem("t_lunch", $scope.t_lunch);


      $scope.t_dinner = $filter('date')(o_dinner, 'h');
      localStorage.setItem("t_dinner", $scope.t_dinner);
   
       
var dataObject = {
                  "d_lunch": localStorage.getItem("d_lunch"),
                  "d_tolunch": localStorage.getItem("d_tolunch"),
                  "o_lunch": localStorage.getItem("o_lunch"),
                  "d_dinner": localStorage.getItem("d_dinner"),
                  "d_todinner": localStorage.getItem("d_todinner"),
                  "o_dinner": localStorage.getItem("o_dinner"),
                   "t_lunch": localStorage.getItem("t_lunch"),
                  "t_dinner": localStorage.getItem("t_dinner")
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://aksharsoftwaresolutions.esy.es/dailyfood/update_time.php",
            data: Object.toparams(dataObject)

          }     


         
           
           
          $http(request).success(function(data){
              $state.go('app.manage_time');
               
              localStorage.removeItem("d_lunch");
              localStorage.removeItem("d_tolunch");
              localStorage.removeItem("o_lunch");
              localStorage.removeItem("d_dinner");
              localStorage.removeItem("d_todinner");
              localStorage.removeItem("o_dinner");
              localStorage.removeItem("t_lunch");
              localStorage.removeItem("t_dinner");
            
             $scope.hide($ionicLoading);
            $cordovaToast.show('Time updated', 'short', 'center');
            


           })
        }
      }



})
.controller('AppCtrl', function($scope,$http,$rootScope, $ionicPlatform, $ionicHistory, $location, $cordovaToast, $state,$cordovaSms,$ionicLoading) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
$ionicPlatform.registerBackButtonAction(function() {
//var path = $location.path()
  if ($location.path() === "/login" || $location.path() === "login") {
    $state.go('homepage');
  }

  else if($location.path() === "/homepage" || $location.path() === "homepage") {
    navigator.app.exitApp();
  }
  else {
    $ionicHistory.goBack();
    //navigator.app.goBack();
  }
}, 100);

  $scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  };  


 
 $scope.newuser=function()
{
  $state.go('signup');
}

$scope.admin_review=function(){
 
  $state.go('app.admin_review');
  $scope.show($ionicLoading);
}

$scope.admin_time=function(){
 
  $state.go('app.manage_time');
}

$scope.admin_estimated=function(){
 
  $state.go('app.manage_deliverytime');
}



$scope.email = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

  $scope.signup = function(unm,pswd,eml,mnum,add1,add2,add3,chacked) {
    
  //$ionicLoading.show();


 
if($scope.unm === undefined)
       // humane.log('invalid login : '+data.length)
       // $cordovaToast.show('Enter income type', 'short', 'bottom');
  {            
          
          $cordovaToast.show('Enter Username', 'short', 'center');
  }
else if($scope.unm.length <= 5)
  {
         
         $cordovaToast.show('Name must be between 5 and 15 character!', 'short', 'center');
  }


else if($scope.pswd === undefined)
  {
           
         $cordovaToast.show('Enter password', 'short', 'center');
  }

else if($scope.pswd.length <= 5)
  {
         
          $cordovaToast.show('Password must be between 5 and 15 character!', 'short', 'center');
  }

else if($scope.eml === undefined)
  {
          
          $cordovaToast.show('Enter e-mail', 'short', 'center');
  }

else if($scope.mnum === undefined)
  {
           
          $cordovaToast.show('Enter mobile number', 'short', 'center');
         
  }

else if($scope.mnum.length <= 9)
  {
          
         $cordovaToast.show('Number should be equal to 10 digits!', 'short', 'center');
      
  }


else if($scope.add1 === undefined)
  {
         
         $cordovaToast.show('Enter address', 'short', 'center');
  }
  

else if($scope.add2 === undefined)
  {
          
          $cordovaToast.show('Enter address', 'short', 'center');
  }


else if($scope.add3 === undefined)
  {
      
          $cordovaToast.show('Enter address', 'short', 'center');
  } 

  else if(chacked === false || chacked === undefined)
  {
        
          $cordovaToast.show('Accept terms & conditions', 'short', 'center');
  } 


else


 {
        $scope.show($ionicLoading); 
        localStorage.setItem("unm",unm);
        localStorage.setItem("pswd",pswd);
        localStorage.setItem("eml",eml);
        localStorage.setItem("mnum",mnum);
        localStorage.setItem("add1",add1);
        localStorage.setItem("add2",add2);
        localStorage.setItem("add3",add3);
         
   

   var dataObject = {
                  "unm": localStorage.getItem("unm"),
                  "pswd":localStorage.getItem("pswd"),
                  "eml": localStorage.getItem("eml"),
                  "mnum":localStorage.getItem("mnum"),
                  "add1":localStorage.getItem("add1"),
                  "add2":localStorage.getItem("add2"),
                  "add3":localStorage.getItem("add3"),
                  "gcm":localStorage.getItem("gcm")
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/signup.php",
            data: Object.toparams(dataObject)

          }     

         
           //console.log(dataObject); 
          $http(request).success(function(utoh){
              
             $scope.hide($ionicLoading);


          

            if(utoh!=0){
             
                $state.go('verify_mobile');
              $cordovaToast.show('Please check your e-mail for activation', 'long', 'center');
            }

            else{
             
                $cordovaToast.show('Try different username or E-mail', 'long', 'center');
             }
            
              

           
            

           });

        }
       

      }


  $scope.otp_verify_status11 = function(otp) {
    
  //$ionicLoading.show();

if(otp === undefined)
       // humane.log('invalid login : '+data.length)
       // $cordovaToast.show('Enter income type', 'short', 'bottom');
  {            
          
          $cordovaToast.show('Enter OTP', 'short', 'center');
  }

else


 {
        $scope.show($ionicLoading); 
       
        localStorage.setItem("otp",otp);
         
   

   var dataObject = {
                  "unm": localStorage.getItem("unm"),
                  "otp":localStorage.getItem("otp")
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/otp_verify.php",
            data: Object.toparams(dataObject)

          }     

         
           //console.log(dataObject); 
          $http(request).success(function(otp_status){
              
             $scope.hide($ionicLoading);
             
              if(otp_status===0){
               
                $cordovaToast.show('Invalid OTP', 'long', 'center');
              }

              else{

                 $state.go('login');
                $cordovaToast.show('Phone verify successfully', 'long', 'center');
                
              }
           
           


            
            
          });

        }
       

      }      
/*$scope.verifyotp1 = function(otp){
 var session_id = localStorage.getItem("session_id"); 
 $scope.show($ionicLoading);
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://2factor.in/API/V1/b6e97e28-a0f2-11e6-a40f-00163ef91450/SMS/VERIFY/"+session_id+"/"+otp+"",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
  if(response.Details === 'OTP Matched'){

    $scope.frtg=localStorage.getItem("unm");

    $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/otp_status.php",
    data: {
        angular_var: $scope.frtg // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (data) {
    alert("Phone verify successfully");
    $state.go('login');
   $scope.hide($ionicLoading);

 })

  }

  else{
    alert("Invalid OTP");
  }
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE){
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://2factor.in/API/V1/b6e97e28-a0f2-11e6-a40f-00163ef91450/SMS/VERIFY/"+session_id+"/"+otp+"");

xhr.send(data);
}*/




 $scope.bnn = function(frgtmail) {
       
   
         $scope.show($ionicLoading);   
 if(frgtmail === undefined || frgtmail === ''){
       // humane.log('invalid login : '+data.length)
        //alert("enter input");
          $scope.hide($ionicLoading); 
         $scope.isDisabled = false;
        $scope.disableClick = function() {
       
        $scope.isDisabled = true;
        return false;
          }
       }

      
   
        
      else{
      
         localStorage.setItem("frgtmail",frgtmail);
        
   var dataObject = {
                  "frgtmail": localStorage.getItem("frgtmail"),
                 
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/mail.php",
            data: Object.toparams(dataObject)

          }     


          $http(request).success(function(cdd){

              $scope.hide($ionicLoading); 

           if(cdd!=0)
           {
              $cordovaToast.show('E-mail has been sent', 'long', 'center');
              
            
           }
           else
           {
          $cordovaToast.show('We dont recognize this e-mail', 'long', 'center');
             
                     
           }
           $state.go($state.current, {}, {reload: true});

          });

        }

      }

         
       
   


 $scope.loginback = function(){
  $state.go('login');
 }

 $scope.loginhomeback = function(){
  $state.go('homepage');
  $scope.show($ionicLoading);
 }

$scope.hombck = function(){
  $state.go('login');
  
 }
  $scope.frgt = function(){
  $state.go('forgot');
 }


   


  $scope.login = function(unamell,pswrdll) {


      if($scope.unamell == undefined || $scope.unamell === ''){
       
          $cordovaToast.show('Enter username', 'short', 'center');}
      
      else if($scope.pswrdll === undefined || $scope.pswrdll === ''){
        
        $cordovaToast.show('Enter password', 'short', 'center');}
        
      else{
      
         $scope.show($ionicLoading); 
         localStorage.setItem("unamell",unamell);
         localStorage.setItem("pswrdll",pswrdll);
       
   var dataObject = {
                  "unamell": localStorage.getItem("unamell"),
                  "pswrdll": localStorage.getItem("pswrdll"),
                  "gcm": localStorage.getItem("gcm")
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/login.php",
            data: Object.toparams(dataObject),

          }     


          $http(request).success(function(data){
           console.log(data);
           localStorage.setItem("access_token", data[14]);
           localStorage.setItem("mobile", data[4]);
           localStorage.setItem("email", data[3]);
           $scope.cstmr="Customer";
           $scope.tfnprdr="Deliveryboy";
           $scope.admin="Admin";
           $scope.loginac = data[5];

      
             
        if($scope.loginac===$scope.cstmr) {
                    $rootScope.isShowNav=true;
                    $rootScope.isShowNav1=true;
                    $rootScope.isShowNav1CC=true;
                    $rootScope.isShowNav2=true;
                    $rootScope.isShowNav3=false;
                    $rootScope.isShowNav4=false;
                    $rootScope.isShowNav5=false;
                    $rootScope.isShowNav6=false;
                    $rootScope.isShowNav7=false;
                    $rootScope.isShowNav8=false;
                    $rootScope.isShowNavA=false;
                    $rootScope.isShowNavB=false;
                    $rootScope.isShowNavR=false;
                    $rootScope.isShowNavR1=false;
                    $rootScope.isShowNavT1=false;
                    $rootScope.isShowNavTE1=false;
                    $rootScope.isShowNav6admin=false;
                    $state.go('app.cstmrhome');
                    localStorage.setItem("acnt", "customer");
                  }
                

       else if($scope.loginac===$scope.tfnprdr)
             {
                    
                    $rootScope.isShowNav=false;
                    $rootScope.isShowNav1=false;
                    $rootScope.isShowNav1CC=false;
                    $rootScope.isShowNav2=false;
                    $rootScope.isShowNav3=false;
                    $rootScope.isShowNav4=false;
                    $rootScope.isShowNav5=false;
                    $rootScope.isShowNav6=true;
                    $rootScope.isShowNav7=false;
                    $rootScope.isShowNav8=true;
                    $rootScope.isShowNavA=false;
                    $rootScope.isShowNavB=false;
                    $rootScope.isShowNavR=false;
                    $rootScope.isShowNavR1=false;
                    $rootScope.isShowNavT1=false;
                    $rootScope.isShowNavTE1=false;
                    $rootScope.isShowNav6admin=false;

                    $state.go('deliverypage');
                    localStorage.setItem("acnt", "deliveryboy");

                   
                   
             }

             else if($scope.loginac===$scope.admin)
             {
                    $rootScope.isShowNav=false;
                    $rootScope.isShowNav1=false;
                    $rootScope.isShowNav1CC=false;
                    $rootScope.isShowNav2=false;
                    $rootScope.isShowNav3=true;
                    $rootScope.isShowNav4=true;
                    $rootScope.isShowNav5=true;
                    $rootScope.isShowNav6=true;
                    $rootScope.isShowNav7=true;
                    $rootScope.isShowNav8=false;
                    $rootScope.isShowNavA=true;
                    $rootScope.isShowNavB=true;
                    $rootScope.isShowNavR=true;
                    $rootScope.isShowNavR1=true;
                    $rootScope.isShowNavT1=true;
                    $rootScope.isShowNavTE1=true;
                    $rootScope.isShowNav6admin=true;
                    $state.go('app.adminorderchk');
                    localStorage.setItem("acnt", "admin");

              
            
             }

             else
             {
              $scope.hide($ionicLoading);   
              $cordovaToast.show('Invalid Username or password', 'short', 'center');
              
             }
             

        })
}
} 

$scope.adhomedash=function(){
  $state.go('app.adhome');
  $scope.show($ionicLoading);
}

$scope.orderlist=function(){
  $state.go('app.invoice');

}


})

.controller('NavigateCtrl', function($scope, $cordovaToast, $ionicLoading, $http, $state, $ionicModal, $ionicPopover) {

$scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  }; 

$http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/dashboard.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (dash) {
    $scope.dash = dash;
    $scope.hide($ionicLoading);

    if(dash!=0){
      $scope.dsh=false;
    }
    else{
      $scope.dsh=true;
    }
                    
   });

$scope.detaildash = function(id) {
localStorage.setItem("id",id);
$scope.show($ionicLoading);
$state.go('dashdetailtifin');
};

    $scope.frtg=localStorage.getItem("id");

    $http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/detailtifin.php",
    data: {
        angular_var: $scope.frtg // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (dashdetailcxm) {
   $scope.dashdetailcxm = dashdetailcxm;
   $scope.hide($ionicLoading);

 })
  
$scope.adminorderback=function()
{
  $state.go('app.adminorderchk');
}

$scope.order_history=function()
{
  $state.go('app.orderhistory');
}
$scope.adminorderback_boy=function()
{
  $state.go('deliverypage');
}
$scope.dashback=function()
{
  $state.go('app.adhome');
}
$scope.chome=function()
{
  $state.go('app.cstmrhome');
 
}
$scope.tfnhome=function()
{
  $state.go('app.tifinproviderhome');
  $scope.show($ionicLoading);
}
$scope.uorderlist=function()
{
  $state.go('app.userorderlist');

 
}
$scope.thomeback=function(){
  $state.go('thome');
}

$scope.about=function(){
  $state.go('app.about');
}



$scope.tifinpln=function()
{

  $scope.frtg=localStorage.getItem("unamell");

    $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/login1.php",
    data: {
        angular_var: $scope.frtg // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (lgnn) {
   $scope.lgnn = lgnn;
  
    $scope.tfn="Tifin Provider";
    $scope.loginac = lgnn[5];
      
 if($scope.loginac===$scope.tfn)
             {
            
              $state.go('app.tifinproviderplan');
              
            
             }

 })
 
}

$scope.lout=function()
{
   $state.go('login');
  
  localStorage.removeItem("acnt");
  localStorage.removeItem("pswrdll");
}


$scope.adminhomeback=function()
{
  $state.go('app.adminhome');
}

$scope.orderchk=function()
{

$state.go('app.adminorderchk');
$scope.show($ionicLoading);
}
              
            
        
 

$scope.planchk=function()
{

  $state.go('app.adminplanchk');
              
}

$scope.cstmrhomeback=function()
{
  $state.go('app.cstmrhome');
  $scope.show($ionicLoading);
}

$scope.adhomeas=function()
{
  $state.go('app.adminhome');
  $scope.show($ionicLoading);
}

$scope.adbackkkk=function()
{
  $state.go('app.adhome');
}



$scope.admindash=function()
{
 
   $scope.frtg=localStorage.getItem("unamell");

    $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/login1.php",
    data: {
        angular_var: $scope.frtg // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (lgnn) {
   $scope.lgnn = lgnn;
  
    $scope.tfn="Admin";
    $scope.tfnpro="Tifin Provider";
    $scope.loginac = lgnn[5];
      
 if($scope.loginac===$scope.tfn)
             {
            
               $state.go('app.adhome');
              
            
             }

if($scope.loginac===$scope.tfnpro){

          $state.go('thome');

}

 })
}


$scope.backinfo=function()
{
  $state.go('app.cstmrhome');
}


$scope.signup=function()
{
  $state.go('signup');
}

$scope.addtfn=function()
{
 
 $state.go('app.posttifin');
              
}

$scope.adminaddtfn=function()
{
 
 $state.go('app.adminposttifin');
              
}



$scope.tfnhomeback=function()
{
  $state.go('app.tifinproviderhome');
}
})

.controller('ConfCtrl', function($scope, $cordovaToast, $ionicPopup, $filter, $http, $state, $ionicModal, $ionicLoading, $ionicPopover) {

  $scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  }; 

 $scope.frm = localStorage.getItem("frm");
 $scope.too = localStorage.getItem("too");
 $scope.tfnn = localStorage.getItem("tfnn");
 $scope.plnn = localStorage.getItem("plnn");
 $scope.qtyy = localStorage.getItem("qtyy");
 $scope.name=localStorage.getItem("name");
 $scope.price=localStorage.getItem("price");
})

.controller('AboutCtrl', function($scope, $cordovaToast, $http, $state, $ionicLoading) {

   $scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  }; 

$http({
  method: 'GET',
  url: "http://aksharsoftwaresolutions.esy.es/dailyfood/privacy.php"
}).success(function(prcy) {
  
   $scope.abt=prcy[0][0];
   $scope.cntct=prcy[0][1];
   $scope.prcy=prcy[0][2];
   $scope.terms=prcy[0][3];
   $scope.refund=prcy[0][4];
   $scope.deliverypolicies=prcy[0][5];
   $scope.hide($ionicLoading);
  
})


$scope.about = function(){
  $state.go('homepage');
}

$scope.aboutusss = function(){
  $state.go('aboutus');
  $scope.show($ionicLoading);
}

$scope.contact = function(){
  $state.go('contactus');
  $scope.show($ionicLoading);
}

$scope.privacyurl = function(){
  $state.go('privacy');
  $scope.show($ionicLoading);
}

$scope.xzxz = function(){
  $state.go('detailplan');
  //$scope.show($ionicLoading);
}

$scope.termsurl = function(){
  $state.go('terms');
  $scope.show($ionicLoading);
}

$scope.terms_back_signup = function(){
  $state.go('signup');
 
}

$scope.refundurl = function(){
  $state.go('refund');
  $scope.show($ionicLoading);
}
})

.controller('HomeCtrl', function($scope, $rootScope, $cordovaInAppBrowser, $cordovaToast, $cordovaFileTransfer, $ionicNavBarDelegate, $cordovaCamera, $ionicPopup, $ionicLoading, $ionicPopover, $filter, $http, $state, $ionicModal, $ionicPopover, $compile) {

$scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  }; 

  $scope.show($ionicLoading);

  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
   };  


  $scope.openBrowser = function(){

     $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
    
      .then(function(event) {
         // success
      })
    
      .catch(function(event) {
         // error
      });
   }

   

$scope.lout=function()
{
  
  $scope.secret_Key = localStorage.getItem("pswrdll");
  $scope.acnt = localStorage.getItem("acnt");
  
  if($scope.secret_Key!=null && $scope.acnt==='customer'){
                    $rootScope.isShowNav=true;
                    $rootScope.isShowNav1=true;
                    $rootScope.isShowNav1CC=true;
                    $rootScope.isShowNav2=true;
                    $rootScope.isShowNav3=false;
                    $rootScope.isShowNav4=false;
                    $rootScope.isShowNav5=false;
                    $rootScope.isShowNav6=false;
                    $rootScope.isShowNav7=false;
                    $rootScope.isShowNav8=false;
                    $rootScope.isShowNavA=false;
                    $rootScope.isShowNavB=false;
                    $rootScope.isShowNavR=false;
                    $rootScope.isShowNavR1=false;
                    $rootScope.isShowNavT1=false;
                    $rootScope.isShowNavTE1=false;
                    $rootScope.isShowNav6admin=false;

      $state.go('app.cstmrhome');
  }

  else if($scope.secret_Key!=null && $scope.acnt==='deliveryboy'){
                    $rootScope.isShowNav=false;
                    $rootScope.isShowNav1=false;
                    $rootScope.isShowNav1CC=false;
                    $rootScope.isShowNav2=false;
                    $rootScope.isShowNav3=false;
                    $rootScope.isShowNav4=false;
                    $rootScope.isShowNav5=false;
                    $rootScope.isShowNav6=true;
                    $rootScope.isShowNav7=false;
                    $rootScope.isShowNav8=true;
                    $rootScope.isShowNavA=false;
                    $rootScope.isShowNavB=false;
                    $rootScope.isShowNavR=false;
                    $rootScope.isShowNavR1=false;
                    $rootScope.isShowNavT1=false;
                    $rootScope.isShowNavTE1=false;
                    $rootScope.isShowNav6admin=false;

                    $state.go('deliverypage');
  }



  else if($scope.secret_Key!=null && $scope.acnt==='admin'){
                    $rootScope.isShowNav=false;
                    $rootScope.isShowNav1=false;
                    $rootScope.isShowNav1CC=false;
                    $rootScope.isShowNav2=false;
                    $rootScope.isShowNav3=true;
                    $rootScope.isShowNav4=true;
                    $rootScope.isShowNav5=true;
                    $rootScope.isShowNav6=true;
                    $rootScope.isShowNav7=true;
                    $rootScope.isShowNav8=false;
                    $rootScope.isShowNavA=true;
                    $rootScope.isShowNavB=true;
                    $rootScope.isShowNavR=true;
                    $rootScope.isShowNavR1=true;
                    $rootScope.isShowNavT1=true;
                    $rootScope.isShowNavTE1=true;
                    $rootScope.isShowNav6admin=true;
              $state.go('app.adminorderchk');
  }

  else{
    $state.go('login');
  }
  
}
$scope.reviewpage=function(){
 
  $state.go('review');
  $scope.show($ionicLoading);
}
$scope.signup=function()
{
  $state.go('signup');
}

$scope.aboutusss = function(){
  $state.go('aboutus');
 
}

$scope.contact = function(){
  $state.go('contactus');
 
}

$scope.privacyurl = function(){
  $state.go('privacy');
 
}

$scope.xzxz = function(){
  $state.go('detailplan');
  //$scope.show($ionicLoading);
}

$scope.termsurl = function(){
  $state.go('terms');
  //$scope.show($ionicLoading);
}

$scope.terms_back_signup = function(){
  $state.go('signup');
 
}

$scope.refundurl = function(){
  $state.go('refund');
  //$scope.show($ionicLoading);
}


$http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/detailtifin.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (detailcxm) {
  
    $scope.detailcxm = detailcxm;
    setTimeout(function() {
   navigator.splashscreen.hide();
}, 100);
   //$scope.hide($ionicLoading);
   
});

$http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/daily_time.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (daily_time) {
    $scope.lunch_time = daily_time[0][1];
    $scope.lunch_order = daily_time[0][2]; 
    $scope.dinner_time = daily_time[0][3];
    $scope.dinner_order = daily_time[0][4]; 
   
    $scope.hide($ionicLoading);
   
});
})

.controller('TrackCtrl', function($scope, $cordovaToast, $cordovaFileTransfer, $ionicNavBarDelegate, $cordovaCamera, $ionicPopup, $ionicLoading, $ionicPopover, $filter, $http, $state, $ionicModal, $ionicPopover, $compile) {
 
$scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  }; 

  $scope.show($ionicLoading); 


$scope.name=localStorage.getItem("unamell");  
$http({
    method: "post",
    url: "http://cssent.com/demo/coffee/orderchk.php",
    data: {
        angular_var: $scope.name // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (confrm) {
  
    $scope.cdate = $filter('date')(new Date(), 'yyyy-MM-dd');
    $scope.tyme = $filter('date')(new Date(), 'H');
    $scope.confrm = confrm;
    $scope.payment_method = confrm[0][14];
    $scope.confrmss = confrm[0][15];
    $scope.tymtym = confrm[0][10];

   if($scope.payment_method == 'cash'){
    $scope.payment_mode = "Cash On Delivery";
   } 


   if($scope.payment_method != 'cash'){
    $scope.payment_mode = "Online";
   } 
 
   if(confrm==0){
     $scope.iii=true;
     $scope.status=true;
   }
    
  if($scope.tymtym==="Lunch"){
    $scope.lnch=true;
   }

   if($scope.tymtym==="Dinner"){
       $scope.dnr=true;
   }

   if($scope.confrmss==="Delivered"){
    $scope.deliver=true;
    $scope.lnch=false;
    $scope.dnr=false;
   }

   if($scope.confrmss==="Dispatched"){
      $scope.departed=true;
   }

   if($scope.confrmss==="Pending"){
      $scope.pending=true;
   }

   if($scope.confrmss==="Processing"){
      $scope.processing=true;
   }
  
 

 })

$http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/daily_time.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (daily_time) {
    $scope.lunch_estimated = daily_time[0][5];
    $scope.dinner_estimated = daily_time[0][6]; 
   
   
    $scope.hide($ionicLoading);
   
});
})

.controller('TrackpreviousCtrl', function($scope, OrderlistService, $cordovaToast, $cordovaFileTransfer, $ionicNavBarDelegate, $cordovaCamera, $ionicPopup, $ionicLoading, $ionicPopover, $filter, $http, $state, $ionicModal, $ionicPopover, $compile) {
 
$scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  }; 


  $scope.show($ionicLoading); 

$scope.previousorder  = function(){
  $scope.p_click=true;
}

$scope.name=localStorage.getItem("unamell");  
$http({
    method: "post",
    url: "http://cssent.com/demo/coffee/pre_orderchk.php",
    data: {
        angular_var: $scope.name // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (pre_confrm) {
    
     $scope.pre_confrm = pre_confrm;
     $scope.hide($ionicLoading);
    
   if($scope.pre_confrm==0){
 
      $scope.preiii=true;
      $scope.prestatus=true;
     
   }
 })
$scope.orderpage=1;
  $scope.loadMoreorder = function(orderpage){
    $scope.orderpage = orderpage+1;
    OrderlistService.GetOldUsers($scope.orderpage).then(function(pre_confrm) {
       $scope.pre_confrmqqq = pre_confrm;
      if($scope.pre_confrmqqq!=0){
       $scope.pre_confrm = $scope.pre_confrm.concat(pre_confrm);
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

})



.controller('DashCtrl', function($scope, $cordovaToast, $cordovaFileTransfer, $ionicNavBarDelegate, $cordovaCamera, $ionicPopup, $ionicLoading, $ionicPopover, $filter, $http, $state, $ionicModal, $ionicPopover, $compile) {

 $scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  }; 

  $scope.show($ionicLoading);



 $scope.name=localStorage.getItem("name");
 $scope.timee=localStorage.getItem("pln");
 $scope.price=localStorage.getItem("price");
 $scope.qntity=localStorage.getItem("qty");
 $scope.tfnn=localStorage.getItem("tfnn");
 $scope.frtgid=localStorage.getItem("unamell");
 $scope.plm = localStorage.getItem("pln");
 $scope.tym = localStorage.getItem("tym");

 $scope.rotyquantity = localStorage.getItem("qroti");
 $scope.rotiname = localStorage.getItem("roti");
 $scope.sabjiname = localStorage.getItem("sabji");
 $scope.ricename = localStorage.getItem("rice");
 $scope.othername = localStorage.getItem("other");
 $scope.fprice = localStorage.getItem("fprice");
 $scope.hprice = localStorage.getItem("hprice");
 


$scope.name= localStorage.getItem("name");

  $http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/readreview.php",
    data: {
        angular_var: $scope.name // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (review) {

  $scope.review = review;
  
  $scope.rating = {};
  $scope.rating.rate = 1;
  $scope.rating.max = 5;

})

$scope.qty=1;
$scope.add_qty = function(qty){
 if(qty<=9){
  $scope.qty = qty+1;
  document.getElementById("dec").innerHTML = $scope.qty;
} 
}

$scope.minus_qty = function(qty){
 
  if(qty>1){
  $scope.qty = qty-1;
  document.getElementById("dec").innerHTML = $scope.qty;
}
}          

$scope.rat = localStorage.getItem("rat");

$scope.ratingsObject = {
        iconOn: 'ion-ios-star',    //Optional
        iconOff: 'ion-ios-star-outline',   //Optional
        iconOnColor: '#f16539',  //Optional
        iconOffColor:  'rgb(200, 100, 100)',    //Optional
        rating:  [2,1], //Optional
        minRating:0,    //Optional
        readOnly: true, //Optional
        callback: function(rating, index) {    //Mandatory
          $scope.ratingsCallback(rating, index);
        }
      };
  
  $scope.cstmrdetail = function(id) {
              localStorage.setItem("id",id);
              $state.go('app.invoice');
   };

    $scope.frtgid=localStorage.getItem("id");

    $http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/invoice.php",
    data: {
        angular_var: $scope.frtgid // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (invoicec) {
   $scope.invoicec = invoicec;
 

 })



 $scope.frtg=localStorage.getItem("unamell");

    $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/login.php",
    data: {
        angular_var: $scope.frtg // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (lgnn) {
   $scope.lgnn = lgnn;
 

 })

 

    $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/deliverylist.php",
    data: {
        angular_var: $scope.frtg // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (delivery) {
   $scope.delivery = delivery;
   $scope.hide($ionicLoading);
   if(delivery!=0){
     $scope.rec=false;
   }
   else{
     $scope.rec=true;
   }
 })


 $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/address.php",
    data: {
        angular_var: $scope.frtg // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (addr) {
   $scope.addr = addr;
   $scope.hide($ionicLoading);
 })

$scope.cashback = function(){
  $state.go('confirmorder');
}
$scope.sub = function(i) {
  i.quantity--;
}

$scope.add = function(i) {
  i.quantity++;
}
$scope.changeadd = function(addchange1, addchange2, addchange3, numberchange){

 
 if(addchange1 == undefined){
        
        $cordovaToast.show('Enter address', 'short', 'center');}
      
      else if(addchange2 === undefined){
         $cordovaToast.show('Enter address', 'short', 'center');}

      else if(addchange3 === undefined){
         $cordovaToast.show('Enter address', 'short', 'center');}

       else if(numberchange === undefined){
         $cordovaToast.show('Enter mobile number', 'short', 'center');
        } 

      else if(numberchange.length <= 9){
        $cordovaToast.show('Number should be equal to 10 digits!', 'short', 'center');}     
        
      else{
      
          $scope.show($ionicLoading);
         localStorage.setItem("add1",addchange1);
         localStorage.setItem("add2",addchange2);
         localStorage.setItem("add3",addchange3);
         localStorage.setItem("add4",numberchange);
       
   var dataObject = {
                  "add1": localStorage.getItem("add1"),
                  "add2": localStorage.getItem("add2"),
                  "add3": localStorage.getItem("add3"),
                  "add4": localStorage.getItem("add4"),
                  "unamell": localStorage.getItem("unamell")
                 
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/changeaddress.php",
            data: Object.toparams(dataObject)

          }     

}
          $http(request).success(function(data){

             
            //

             $state.go('confirmorder');
             $cordovaToast.show('Address change successfully', 'short', 'center');

})

}



    $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

   $ionicPopover.fromTemplateUrl('my-popover1.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover1 = popover;
  });
$scope.apln=function()
{
  $scope.frm="";
  $state.go('app.plan');
}

 $scope.ratingsObject = {
        iconOn: 'ion-ios-star',    //Optional
        iconOff: 'ion-ios-star',   //Optional
        iconOnColor: '#f16539',  //Optional
        iconOffColor:  'rgb(200, 100, 100)',    //Optional
        rating:  2, //Optional
        minRating:1,    //Optional
        readOnly: true, //Optional
        callback: function(rating, index) {    //Mandatory
          $scope.ratingsCallback(rating, index);
        }
      };


   $scope.payment=function(name,add1,add2,add3,mobnum,
rotyquantity,rotiname,sabjiname,ricename,othername,tfnn,tym,qntity,price){
   

        localStorage.setItem("name",name);
        localStorage.setItem("add1",add1);
        localStorage.setItem("add2",add2);
        localStorage.setItem("add3",add3);
        localStorage.setItem("add4",mobnum);
        localStorage.setItem("rotyquantity",rotyquantity);
        localStorage.setItem("rotiname",rotiname);
        localStorage.setItem("sabjiname",sabjiname);
        localStorage.setItem("ricename",ricename);
        localStorage.setItem("othername",othername);
        localStorage.setItem("tfn",tfnn);
        localStorage.setItem("plm",tym);
        localStorage.setItem("qntity",qntity);
        localStorage.setItem("price",price);

    $scope.paymentprice = price*100;
    $scope.mobile = localStorage.getItem("mobile");
    $scope.email = localStorage.getItem("email");
    $scope.uname = localStorage.getItem("unamell");
    $scope.tifin = localStorage.getItem("tfn");
    $scope.qnty = localStorage.getItem("qntity");
    $scope.plandinner = localStorage.getItem("plm");

    
    
    var options = {
  //description: 'Credits towards consultation',
  //image: 'img/logo.png',
  currency: 'INR',
  key: 'rzp_test_4CtSd7SNQLelpX',
  amount: $scope.paymentprice,
  name: $scope.qnty+' '+$scope.tifin+' '+'Tiffin',
  prefill: {
    email: $scope.email,
    contact: $scope.mobile,
    name: $scope.uname
  },
  theme: {
    color: '#000',
    image_padding: 'img/home.png'
  }
}

var successCallback = function(payment_id) {

   localStorage.setItem("paymentid",payment_id);

   var dataObject = {
                  "name": localStorage.getItem("name"),
                  "add1": localStorage.getItem("add1"),
                  "add2": localStorage.getItem("add2"),
                  "add3": localStorage.getItem("add3"),
                  "add4": localStorage.getItem("add4"),
                  "rotyquantity": localStorage.getItem("rotyquantity"),
                  "rotiname": localStorage.getItem("rotiname"),
                  "sabjiname": localStorage.getItem("sabjiname"),
                  "ricename": localStorage.getItem("ricename"),
                  "othername": localStorage.getItem("othername"),
                  "tfn": localStorage.getItem("tfn"),
                  "plm": localStorage.getItem("plm"),
                  "qty": localStorage.getItem("qty"),
                  "qntity": localStorage.getItem("qntity"),
                  "price": localStorage.getItem("price"),
                  "paymentid": localStorage.getItem("paymentid"),
                  "unamell": localStorage.getItem("unamell")
                  }

                   Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/push_online.php",
            data: Object.toparams(dataObject)

          }  

                 $http(request).success(function(data){
      
       
        $state.go('app.cstmrhome');
          $cordovaToast.show('Your order has been placced', 'short', 'center');
             
})   
}

var cancelCallback = function(error) {
  // localStorage.setItem("paymentid","awaited");
   $cordovaToast.show(error.description + ' (Error '+error.code+')', 'short', 'center')

   var dataObject = {
                  "name": localStorage.getItem("name"),
                  "add1": localStorage.getItem("add1"),
                  "add2": localStorage.getItem("add2"),
                  "add3": localStorage.getItem("add3"),
                  "add4": localStorage.getItem("add4"),
                  "rotyquantity": localStorage.getItem("rotyquantity"),
                  "rotiname": localStorage.getItem("rotiname"),
                  "sabjiname": localStorage.getItem("sabjiname"),
                  "ricename": localStorage.getItem("ricename"),
                  "othername": localStorage.getItem("othername"),
                  "tfn": localStorage.getItem("tfn"),
                  "plm": localStorage.getItem("plm"),
                  "qty": localStorage.getItem("qty"),
                  "qntity": localStorage.getItem("qntity"),
                  "price": localStorage.getItem("price"),
                  //"paymentid": localStorage.getItem("paymentid"),
                  "unamell": localStorage.getItem("unamell")
                  }

                   Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/push_cancel.php",
            data: Object.toparams(dataObject)

          }  

                 $http(request).success(function(data){
      
       
        $state.go('app.cstmrhome');
        
             
})   
}

RazorpayCheckout.open(options, successCallback, cancelCallback)
   } 



$scope.cshdlivry = function(){
  $state.go('cashdelivery');
  $scope.show($ionicLoading);
}

$scope.changeaddress = function(){

  $state.go('chngeaddrs');

}
$scope.calll=function(diffDays,qtyy,tfnn,plnn,fprice,hprice)


{


    $scope.diffDays=diffDays;
    $scope.tfnn=tfnn;
    $scope.plnn=plnn;
    $scope.qtyy=qtyy;
    $scope.tfntype="Full";
    $scope.tfntypehalf="Half";

    $scope.Lunch="Lunch";
    $scope.dinner="Dinner";
    $scope.both="Both";
   
  if($scope.plnn===$scope.Lunch || $scope.plnn===$scope.dinner)
{
  $scope.plng=1;
}

if($scope.plnn===$scope.both)
{
   $scope.plng=2; 
}


if($scope.tfnn===$scope.tfntype)
{
   
    $scope.fulltfn=fprice;
}
if($scope.tfnn===$scope.tfntypehalf)
{
   $scope.fulltfn=hprice; 
}




$scope.pricep=($scope.qtyy*$scope.fulltfn*$scope.plng*$scope.diffDays);


localStorage.setItem("price",$scope.pricep);



}
$scope.cal=function(qty,tfnn,tym,fprice,hprice)


{
     
    $scope.tfnn=tfnn;
    $scope.tym=tym;
    $scope.qty=qty;
    $scope.tfntype="Full";
    $scope.tfntypehalf="Half";

    $scope.lunch="Lunch";
    $scope.dinner="Dinner";
  
   

if($scope.tfnn===$scope.tfntype)
{
   
    $scope.fulltfn=fprice;
}
if($scope.tfnn===$scope.tfntypehalf)
{
   $scope.fulltfn=hprice; 
}



$scope.price=($scope.qty*$scope.fulltfn);
localStorage.setItem("price",$scope.price);



}
  

$http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/daily_time.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (daily_time) {
   
    $scope.lunch_order = daily_time[0][2]; 
    localStorage.setItem("ltime", $scope.lunch_order);
    $scope.dinner_order = daily_time[0][4]; 
    localStorage.setItem("dtime", $scope.dinner_order);
    $scope.t_lunch = daily_time[0][7]; 
    localStorage.setItem("tlunch", $scope.t_lunch);
    $scope.t_dinner = daily_time[0][8]; 
    localStorage.setItem("tdinner", $scope.t_dinner);
   
    $scope.hide($ionicLoading);
   
});
 
   $scope.openPopover = function(qty,tfnn,tym,fprice,hprice) {
   $scope.HHmmss = $filter('date')(new Date(), 'HH');
   var today = new Date();

   $scope.HHmmss11 = $filter('date')(new Date(), 'h:mm a');
   $scope.cdate = $filter('date')(new Date(), 'yyyy-MM-dd');
  // $scope.cdatepls = $filter('date')(today.setDate(today.getDate()+1), 'yyyy-MM-dd');
   
  
   
   localStorage.setItem("tym",tym);
   localStorage.setItem("tfnn",tfnn);
   localStorage.setItem("qty",qty);
  
        $scope.name=name;
        $scope.qty=qty;
        $scope.tym=tym;
        $scope.tfnn=tfnn;
        $scope.Lunch="Lunch";
        $scope.Dinner="Dinner";

    
    
      var ltime = localStorage.getItem("ltime"); 
      var dtime = localStorage.getItem("dtime"); 
      var tlunch = localStorage.getItem("tlunch"); 
      var tdinner = localStorage.getItem("tdinner");
     if($scope.qty===null)
    {
      alert("select qty");    
      $cordovaToast.show('Select quanty', 'short', 'center');

    }

    else if($scope.tfnn===null)
    {

       alert("select tfn");
      $cordovaToast.show('Select tiffin', 'short', 'center');
    }
  

    else if($scope.tym===null)
    {
    alert("select time");
      $cordovaToast.show('Select time', 'short', 'center');
    }
   
     else if($scope.tym===$scope.Lunch && $scope.HHmmss>=tlunch)
    {
      
      $cordovaToast.show(ltime, 'long', 'center');
    }

      else if($scope.tym===$scope.Dinner && $scope.HHmmss>=tdinner)
    {
      
      $cordovaToast.show(dtime, 'long', 'center');
    }

    else {

     

    
   // $scope.full=1;
    //$scope.half=($scope.tifin*$scope.qty);
    $scope.cal(qty,tfnn,tym,fprice,hprice);
     $scope.show($ionicLoading);

    
    $state.go('confirmorder');
    $scope.hide($ionicLoading);
   // $scope.popover.show($event);
 }
  };

 

   $scope.plan= function(frm,too,qtyy,tfnn,plnn,fprice,hprice,name) {
   $scope.HHmmss = $filter('date')(new Date(), 'HH');
   $scope.HHmmss11 = $filter('date')(new Date(), 'h:mm a');
   $scope.cdate = $filter('date')((new Date(), 'yyyy-MM-dd'));
   var today = new Date();
   
   $scope.cdatepls = $filter('date')(today.setDate(today.getDate()+2), 'yyyy-MM-dd');
   
      localStorage.setItem("name",name);
      localStorage.setItem("frm",frm);
      localStorage.setItem("too",too);
      localStorage.setItem("tfnn",tfnn);
      localStorage.setItem("plnn",plnn);
      localStorage.setItem("qtyy",qtyy);
         $scope.plnn=plnn;
         $scope.name=name;
         $scope.qtyy=qtyy;
         $scope.frm=frm;
         $scope.tfnn=tfnn;
         $scope.too=too;
var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

var firstDate = new Date($scope.frm);

var secondDate = new Date($scope.too);

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
      
        $scope.Lunch="Lunch";
        $scope.Dinner="Dinner";
       

   $scope.calll(diffDays,qtyy,tfnn,plnn,fprice,hprice);
   if($scope.frm===undefined)
    {
      $cordovaToast.show('Select date', 'short', 'center');
      
    }
    else if($scope.too===undefined)
    {
    $cordovaToast.show('Select date', 'short', 'center');
    }
   

    else if($scope.qtyy===undefined)
    {
      
      $cordovaToast.show('Select quantity', 'short', 'center');
    }

    else if($scope.tfnn===undefined)
    {
       $cordovaToast.show('Select tiffin type', 'short', 'center');
    }
  

    else if($scope.plnn===undefined)
    {
       $cordovaToast.show('Select time', 'short', 'center');
    }
   
    else if($scope.frm<$scope.cdatepls)
    {
     
       $cordovaToast.show('Select valid date', 'short', 'center');
    }
    else if($scope.too<$scope.frm)
    {
       $cordovaToast.show('Select valid date', 'short', 'center');
    }
     else if($scope.too===$scope.frm)
    {
       $cordovaToast.show('Select valid date', 'short', 'center');
    }

    else {

     

   
   // $scope.full=1;
    //$scope.half=($scope.tifin*$scope.qty);
  
     $state.go('confirmplan');
   // $scope.popover1.show($event);
 }
  }
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
    $scope.order = function(id, qroti, roti, sabji, rice, other, fprice,hprice) {
     

     $state.go('order');

     localStorage.setItem("qroti", qroti);
     localStorage.setItem("roti", roti);
     localStorage.setItem("sabji", sabji);
     localStorage.setItem("rice", rice);
     localStorage.setItem("other", other);
     localStorage.setItem("fprice", fprice);
     localStorage.setItem("hprice", hprice);
}

  
  $scope.detail = function(id,name) {
 
              localStorage.setItem("id",id);
              localStorage.setItem("name",name);
              $state.go('detailtifin');
              $scope.show($ionicLoading);
   
   };

    $scope.frtg=localStorage.getItem("id");

    $http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/detailtifin.php",
    data: {
        angular_var: $scope.frtg // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (detailcxm) {
   $scope.detailcxm = detailcxm;
   $scope.hide($ionicLoading);

 })
                    

 
  
  $http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/tifindata.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (cxm) {
    $scope.cxm = cxm;
    $scope.hide($ionicLoading);
});

  $scope.Addorder = function(name,add1,add2,add3,mobnum,
rotyquantity,rotiname,sabjiname,ricename,othername,tfnn,tym,qntity,price) {

var myPopup = $ionicPopup.show({
   
     title: '<h4 style="text-align:-webkit-auto;"><center>CONFIRM ORDER?</center></h4><hr>',
    
     subTitle: '<h4 style="text-align:-webkit-auto; color:red;">Your tiffin will be deliver to delivery address given by you.</h4>',
   
    scope: $scope,
    buttons: [

              { text: '<b>CANCEL</b>'},
     
                {
                  text: '<b>CONFIRM</b>',
                  type: 'button-balanced button-clear',
                   onTap: function(e) {

                    $scope.show($ionicLoading); 
        localStorage.setItem("name",name);
        localStorage.setItem("add1",add1);
        localStorage.setItem("add2",add2);
        localStorage.setItem("add3",add3);
        localStorage.setItem("add4",mobnum);
        localStorage.setItem("rotyquantity",rotyquantity);
        localStorage.setItem("rotiname",rotiname);
        localStorage.setItem("sabjiname",sabjiname);
        localStorage.setItem("ricename",ricename);
        localStorage.setItem("othername",othername);
        localStorage.setItem("tfn",tfnn);
        localStorage.setItem("plm",tym);
        localStorage.setItem("paymentid","cash");
        localStorage.setItem("qntity",qntity);
        localStorage.setItem("price",price);

        var dataObject = {
                  "name": localStorage.getItem("name"),
                  "add1": localStorage.getItem("add1"),
                  "add2": localStorage.getItem("add2"),
                  "add3": localStorage.getItem("add3"),
                  "add4": localStorage.getItem("add4"),
                  "rotyquantity": localStorage.getItem("rotyquantity"),
                  "rotiname": localStorage.getItem("rotiname"),
                  "sabjiname": localStorage.getItem("sabjiname"),
                  "ricename": localStorage.getItem("ricename"),
                  "othername": localStorage.getItem("othername"),
                  "tfn": localStorage.getItem("tfn"),
                  "plm": localStorage.getItem("plm"),
                  "qty": localStorage.getItem("qty"),
                  "qntity": localStorage.getItem("qntity"),
                  "paymentid": localStorage.getItem("paymentid"),
                  "price": localStorage.getItem("price"),
                  "unamell": localStorage.getItem("unamell")
                  
                  }

                   Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/push.php",
            data: Object.toparams(dataObject)

          }  

                 $http(request).success(function(data){
           
       
        $state.go('app.cstmrhome');
        
        localStorage.removeItem("name");
        localStorage.removeItem("add1");
        localStorage.removeItem("add2");
        localStorage.removeItem("add3");
        localStorage.removeItem("add4");
        localStorage.removeItem("rotyquantity");
        localStorage.removeItem("rotiname");
        localStorage.removeItem("sabjiname");
        localStorage.removeItem("ricename");
        localStorage.removeItem("othername");
        localStorage.removeItem("tfn");
        localStorage.removeItem("plm");
        localStorage.removeItem("paymentid");
        localStorage.removeItem("qntity");
        localStorage.removeItem("price");
        localStorage.removeItem("qroti");
        localStorage.removeItem("roti");
        localStorage.removeItem("sabji");
        localStorage.removeItem("rice");
        localStorage.removeItem("other");
        localStorage.removeItem("tym");
        localStorage.removeItem("tfnn");
        localStorage.removeItem("qty");
          $cordovaToast.show('Your order has been placced', 'short', 'center');
     
 

             
})   
   
                
                      }
                }
      
             ]
       }); 
       
}

   
    $scope.Addtfn = function(roti,qroti,sabji,rice,other,pfull,phalf) {

  // Triggered in the login modal to cl$scope.noo=toString($scope.mno);
 

 

    if($scope.roti === undefined)
  {
       
         $cordovaToast.show('Enter roti/paratha', 'short', 'center');
  } 

   else if($scope.qroti === undefined)
  {
        
         $cordovaToast.show('Enter quantity of roti/paratha', 'short', 'center');
  } 
    else if($scope.sabji === undefined)
  {
        
         $cordovaToast.show('Enter sabji', 'short', 'center');
  } 
    else if($scope.rice === undefined)
  {
       
         $cordovaToast.show('Enter dal chawal or khichdi kadhi', 'short', 'center');
  } 
    else if($scope.other === undefined)
  {
         
         $cordovaToast.show('Enter other complimentary kit', 'short', 'center');
  } 
    
        else if($scope.pfull === undefined)
  {
         
         $cordovaToast.show('Enter For Your full Tiffin', 'short', 'center');
  } 

    else if($scope.phalf === undefined)
  {
        
         $cordovaToast.show('Enter For Your half Tiffin', 'short', 'center');
  } 

       

     
        else
       {
       
        $scope.show($ionicLoading);
       
        localStorage.setItem("roti",roti);
        localStorage.setItem("qroti",qroti);
        localStorage.setItem("sabji",sabji);
        localStorage.setItem("rice",rice);
        localStorage.setItem("other",other);
        localStorage.setItem("pfull",pfull);
        localStorage.setItem("phalf",phalf);
   

   var dataObject = {
                  "unamell": localStorage.getItem("unamell"),
                  "roti": localStorage.getItem("roti"),
                  "qroti": localStorage.getItem("qroti"),
                  "sabji": localStorage.getItem("sabji"),
                  "rice": localStorage.getItem("rice"),
                  "other": localStorage.getItem("other"),
                  "pfull": localStorage.getItem("pfull"),
                  "phalf": localStorage.getItem("phalf"),
                  "img": localStorage.getItem("img")
                  

   
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://aksharsoftwaresolutions.esy.es/dailyfood/posttifin.php",
            data: Object.toparams(dataObject)

          }     

          
          $scope.city="";
          $scope.area="";
          $scope.mno="";
          $scope.roti="";
          $scope.qroti="";
          $scope.sabji="";
          $scope.rice="";
          $scope.other="";
          $scope.pfull="";
          $scope.phalf="";

           //console.log(dataObject); 
          $http(request).success(function(data){
               //alert("successfully");
             // $cordovaToast.show('Income data added successfully!', 'long', 'center');
             $scope.hide($ionicLoading);
          $scope.ppup = localStorage.getItem("unamell");
              if($scope.ppup==="aksharsoft")
              {
              var myPopup = $ionicPopup.show({
   
     title: '<h4 style="text-align:-webkit-auto;">&nbsp;&nbsp;Your tiffin has been posted</h4>',
    
     subTitle: '<h4 style="text-align:-webkit-auto; color:red;">&nbsp;&nbsp;&nbsp;Tiffin is avilable to all the customer</h4>',
   
    scope: $scope,
    buttons: [
     
                {
                  text: '<b>OK</b>',
                  type: 'button-balanced button-clear',
                   onTap: function(e) {
                
                      }
                }
      
             ]
       }); 
       } 


       else{
        var myPopup = $ionicPopup.show({
   
     title: '<h4 style="text-align:-webkit-auto;">&nbsp;&nbsp;Your request has been submitted</h4>',
    
     subTitle: '<h4 style="text-align:-webkit-auto;">&nbsp;&nbsp;&nbsp;Daily food will contact you very soon</h4>',
   
    scope: $scope,
    buttons: [
     
                {
                  text: '<b>OK</b>',
                  type: 'button-balanced button-clear',
                   onTap: function(e) {
                
                      }
                }
      
             ]
       });

       }         
    });
  
}
        
     
     
 //$state.go('app.income');

       
}


$scope.cstm=localStorage.getItem("name");

$http({
    method: "post",
    url: "http://cssent.com/demo/coffee/tfnnotification.php",
    data: {
        angular_var: $scope.cstm // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function(tfn) {
  
   //   alert(tfn);
   
   })

      

  

       
   // An elaborate, custom popup



})


.controller('AdminrenderCtrl', function($scope, $ionicPopup, $interval, $cordovaToast, $ionicLoading, $stateParams, $http, $state) {



 $scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 600,
      showDelay: 0
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  };


$scope.orderdetail = function(id) {
 
              localStorage.setItem("id",id);
              $state.go('detailorder');
              $scope.show($ionicLoading);
   
   };

   setInterval(function () {
                    //Display the current time.
                  //alert("ggg");
                   $http({
                        method: "post",
                        url: "http://cssent.com/demo/coffee/fullorder.php",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (full) {
                     // $scope.hide($ionicLoading);
                      if(full[0][0]===null){
                      $scope.full=0;
                     }
                     else{
                       $scope.full = full[0][0];
                     }
                     
                    })

                  $http({
                        method: "post",
                        url: "http://cssent.com/demo/coffee/halforder.php",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (half)  {

                     // $scope.hide($ionicLoading);

                     if(half[0][0]===null){
                      $scope.half=0;
                     }
                     else{
                       $scope.half = half[0][0];
                     }
                      
                    })

                  $http({
                        method: "post",
                        url: "http://cssent.com/demo/coffee/totalorder.php",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (total) {
                    // $scope.hide($ionicLoading);
                     if(total[0][0]===null){
                      $scope.total=0;
                     }
                     else{
                       $scope.total = total[0][0];
                     }

                    
                    })

                    $http({
                        method: "post",
                        url: "http://cssent.com/demo/coffee/adminorderchk.php",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (atfn) {
                      $scope.hide($ionicLoading);
                       $scope.atfn = atfn;
                       
                       if(atfn!=0){
                        $scope.alrt=false;
                        }

                        else{
                          $scope.alrt=true;
                        }

                       
                     
                     })



                }, 1000);

})

.controller('AdminCtrl', function($scope, $ionicPopup, $interval, $filter, $cordovaToast, $ionicLoading, $stateParams, $http, $state) {


$scope.show = function() {
    $ionicLoading.show({
      template: ' <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 400,
      showDelay: 0
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  };

 

         
$http({
    method: "post",
    url: "http://cssent.com/demo/coffee/deliverorderchk.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (dlvr) {
 $scope.payment_method = dlvr[0][17];
  $scope.dlvr = dlvr;
  if(dlvr==""){
    $scope.ddd=true;
    $scope.vbv=true;
  }
  if($scope.payment_method=='cash'){
     $scope.payment_mode = "Cash On Delivery";
  }

  if($scope.payment_method!='cash'){
     $scope.payment_mode = "Online";
  }
  
})


 

  $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/fullorder_boy.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (fullboy) {
  
  if(fullboy[0][0]===null){
  $scope.fullboy=0;
 }
 else{
   $scope.fullboy = fullboy[0][0];
 }
})

$http({
    method: "post",
    url: "http://cssent.com/demo/coffee/halforder_boy.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (halfboy) {

 if(halfboy[0][0]===null){
  $scope.halfboy=0;
 }
 else{
   $scope.halfboy = halfboy[0][0];
 }
 
})

$http({
    method: "post",
    url: "http://cssent.com/demo/coffee/totalorder_boy.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (totalboy) {
 if(totalboy[0][0]===null){
  $scope.totalboy=0;
  localStorage.setItem("totalboy", 0);
 }
 else{
   $scope.totalboy = totalboy[0][0];
   localStorage.setItem("totalboy", 1);
 }
})

 


$http({
    method: "post",
    url: "http://cssent.com/demo/coffee/deliverorderchk.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (atfn_boy) {
  
   $scope.atfn_boy = atfn_boy;
  
    if(atfn_boy!=0){
    $scope.alrtboy=false;
    }

    else{
      $scope.alrtboy=true;
    }
 
 })

  
  

  $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/dashorderlist.php",
    // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (dashorder) {
   $scope.dashorder = dashorder;
   $scope.hide($ionicLoading);
   if(dashorder!=0){
    $scope.fvg=false;

   }
   else{
    $scope.fvg=true;
   
   }
 })

$scope.orderdetail_boy = function(id) {
 
              localStorage.setItem("id",id);
              $state.go('detailorder_boy');
              $scope.show($ionicLoading);
   
   };   

   $scope.plandetail = function(id) {
              localStorage.setItem("id",id);
              $state.go('detailplan');
   
   };

$scope.adminorderplanback = function() {
             
    $state.go('app.adminplanchk');
};

   

    $scope.frtg=localStorage.getItem("id");

    $http({
    method: "post",
    url: "http://cssent.com/demo/coffee/detailorder.php",
    data: {
        angular_var: $scope.frtg // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (detailcxm11) {
   
   $scope.detailcxm11 = detailcxm11;
   $scope.hide($ionicLoading);
 })


$scope.modify=function(admnper,price)
{
  
  $scope.price=price;

  $scope.per=(admnper*price)/100;

  $scope.price1=$scope.price-$scope.per;
 $scope.pay=true;
 $scope.payad=true;
  
}

$scope.takeorder = function(id) {

   
   //alert(price1);
  // alert(per);

  var myPopup = $ionicPopup.show({
   
     title: '<h4 style="text-align:-webkit-auto;"><center>CONFIRM ORDER?</center></h4><hr>',
    
     subTitle: '<h4 style="text-align:-webkit-auto; color:red;">This order will added to delivery boy page for delivery.</h4>',
   
    scope: $scope,
    buttons: [

              { text: '<b>CANCEL</b>'},
     
                {
                  text: '<b>CONFIRM</b>',
                  type: 'button-balanced button-clear',
                   onTap: function(e) {

                   
         $scope.show($ionicLoading);
        localStorage.setItem("id",id);
        
       

   var dataObject = {
                  "id": localStorage.getItem("id")
                 
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/takeorder.php",
            data: Object.toparams(dataObject)

          }     

         
           //console.log(dataObject); 
          $http(request).success(function(data){
         $scope.hide($ionicLoading); 
                 
        $state.go('app.adminorderchk');
         $cordovaToast.show('Order added for delivery', 'short', 'center');  

             

          })

                   }
                 }
               ]
             });
            }    
                


  $scope.deliverorder = function(id) {

   
   //alert(price1);
   
        $scope.show($ionicLoading);
        localStorage.setItem("id",id);

   var dataObject = {
                  "id": localStorage.getItem("id")
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://cssent.com/demo/coffee/deliverorder.php",
            data: Object.toparams(dataObject)

          }     

         
           //console.log(dataObject); 
          $http(request).success(function(data){
         $scope.hide($ionicLoading); 
         $state.go('deliverypage');  
          $cordovaToast.show('Order list updated', 'short', 'center');
  })
}


$scope.despatchedorder = function() {


$scope.check_order = localStorage.getItem("totalboy");


 if($scope.check_order==0){
    
      $cordovaToast.show('No order found', 'short', 'center'); 
 }  

 else{
  
 
var myPopup = $ionicPopup.show({
   
     title: '<h4 style="text-align:-webkit-auto;"><center>CONFIRM?</center></h4><hr>',
    
     subTitle: '<h4 style="text-align:-webkit-auto; color:red;">On confirm, all the orders change their status to "Dispatched".</h4>',
   
    scope: $scope,
    buttons: [

              { text: '<b>CANCEL</b>'},
     
                {
                  text: '<b>CONFIRM</b>',
                  type: 'button-balanced button-clear',
                   onTap: function(e) {

                   $http({
                    method: "post",
                    url: "http://cssent.com/demo/coffee/despatchedorder.php",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data) { 

                   $state.go($state.current, {}, {reload: true});
                   $cordovaToast.show('Status updated', 'short', 'center');

                  })
                
                      }
                }
   
             ]
       }); 
       
}

}






  
    $scope.detail = function(id) {
 
     

 
              localStorage.setItem("id",id);
              $scope.show($ionicLoading);
              $state.go('admindetailinfo');
   
   };

  //});
$scope.frtg=localStorage.getItem("id");

    $http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/admindetailtfn.php",
    data: {
        angular_var: $scope.frtg // $scope.angular_var is angular variable e.g. ng-model="angular_var"
    }, headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (detailcxm) {
   $scope.detailcxm = detailcxm;
   $scope.hide($ionicLoading);
 })


 $http({
    method: "post",
    url: "http://aksharsoftwaresolutions.esy.es/dailyfood/admintifindata.php",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (cxm) {
    $scope.cxm = cxm;
    $scope.hide($ionicLoading);

    if(cxm!=0){
      $scope.aaa=false;
    }
    else{
      $scope.aaa=true;
    }
                    
   });



$scope.accept = function(id) {

   
       $scope.show($ionicLoading);
        localStorage.setItem("id",id);
       

   var dataObject = {
                  "id": localStorage.getItem("id")
                  }
    

     Object.toparams = function ObjecttoParams(obj) {

        
            var p = [];
            for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
          };
    //call using http post  
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
          var request = {
            method: 'post',
            url: "http://aksharsoftwaresolutions.esy.es/dailyfood/confirmtfn.php",
            data: Object.toparams(dataObject)

          }     

         
           //console.log(dataObject); 
          $http(request).success(function(data){
            $scope.hide($ionicLoading);
        $cordovaToast.show('Order taken', 'short', 'center');
         $state.go('app.adminhome');
             

          })

       }



});


