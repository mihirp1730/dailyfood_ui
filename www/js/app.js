// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngMessages', 'ngCordova', 'admobModule','ionic-ratings'])

.run(function($ionicPlatform, $timeout, $cordovaToast, $cordovaAdMob) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
            $cordovaToast.show('No Internet Connection', 'long', 'center');
             wait(2000);
            ionic.Platform.exitApp();
        
      }
    }

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
    }

    onDeviceReady();
    

      wait(7000);
       var adMobPosition = {
        BOTTOM_CENTER: 8
    };  
     
var options = {
            interstitialAdId: 'ca-app-pub-5635682528602900/2146312473',
            autoShow: true
             };

               try{
               
 $cordovaAdMob.createInterstitialView(options, function() {
                        admob.requestInterstitialAd({
                                'isTesting': true
                            },
                            function() {

                                 
                                admob.showAd(true);
                                 console.log('Show Interstitial Ad');
                            },
                            function(error) {
                                console.log('failed to request ad ' + error);
                            }
                        );
                    },
                    function() {
                        console.log('failed to create Interstitial view');
                    });

            } catch (e) {
             
                console.log("ALAS");
            }

 
    
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

   .state('admindetailinfo', {
    cache: 'false',
    url: '/admindetailinfo',
    templateUrl: 'templates/admindetailinfo.html',
     controller: 'AdminCtrl'
    
  })

     .state('signup', {
    cache: 'false',
    url: '/signup',
    templateUrl: 'templates/signup.html',
     controller: 'AppCtrl'
    
  })

       .state('verify_mobile', {
    cache: 'false',
    url: '/verify_mobile',
    templateUrl: 'templates/verify_mobile.html',
     controller: 'AppCtrl'
    
  })

      .state('forgot', {
    cache: 'false',
    url: '/forgot',
    templateUrl: 'templates/forgot.html',
     controller: 'AppCtrl'
    
  })



        .state('login', {
    cache: 'false',
    url: '/login',
    templateUrl: 'templates/login.html',
     controller: 'AppCtrl'
    
  })



        .state('homepage', {
    cache: 'false',
    url: '/homepage',
    templateUrl: 'templates/homepage.html',
     controller: 'HomeCtrl'
    
  })


        .state('deliverypage', {
    cache: 'false',
    url: '/deliverypage',
    templateUrl: 'templates/deliverypage.html',
     controller: 'AdminCtrl'
    
  })




           .state('order', {
    cache: 'false',
    url: '/order',
    templateUrl: 'templates/order.html',
     controller: 'DashCtrl'
    
  })

            .state('confirmorder', {
    cache: 'false',
    url: '/confirmorder',
    templateUrl: 'templates/confirmorder.html',
     controller: 'DashCtrl'
    
  })

                    .state('chngeaddrs', {
    cache: 'false',
    url: '/chngeaddrs',
    templateUrl: 'templates/chngeaddrs.html',
     controller: 'DashCtrl'
    
  })

                    .state('cashdelivery', {
    cache: 'false',
    url: '/cashdelivery',
    templateUrl: 'templates/cashdelivery.html',
     controller: 'DashCtrl'
    
  })

             .state('confirmplan', {
    cache: 'false',
    url: '/confirmplan',
    templateUrl: 'templates/confirmplan.html',
     controller: 'ConfCtrl'
    
  })

             .state('detailtifin', {
    cache: 'false',
    url: '/detailtifin',
    templateUrl: 'templates/detailtifin.html',
     controller: 'DashCtrl'
    
  })

         .state('dashdetailtifin', {
    cache: 'false',
    url: '/dashdetailtifin',
    templateUrl: 'templates/dashdetailtifin.html',
    controller: 'NavigateCtrl'
    
  })

         .state('detailorder', {
    cache: 'false',
    url: '/detailorder',
    templateUrl: 'templates/detailorder.html',
    controller: 'AdminCtrl'
    
  })

             .state('detailorder_boy', {
    cache: 'false',
    url: '/detailorder_boy',
    templateUrl: 'templates/detailorder_boy.html',
    controller: 'AdminCtrl'
    
  })

       .state('detailplan', {
    cache: 'false',
    url: '/detailplan',
    templateUrl: 'templates/detailplan.html',
    controller: 'AboutCtrl'
    
  })

      .state('allbill', {
    cache: 'false',
    url: '/allbill',
    templateUrl: 'templates/allbill.html',
    controller: 'BillCtrl'
    
  })
         .state('oneallbill', {
    cache: 'false',
    url: '/oneallbill',
    templateUrl: 'templates/oneallbill.html',
    controller: 'BillCtrl'
    
  })

         .state('betallbill', {
    cache: 'false',
    url: '/betallbill',
    templateUrl: 'templates/betallbill.html',
     controller: 'BillCtrl'
    
  })

          
        


          .state('thome', {
    cache: 'false',
    url: '/thome',
    templateUrl: 'templates/thome.html',
     controller: 'NavigateCtrl'
    
  })

           .state('review', {
    cache: 'false',
    url: '/review',
    templateUrl: 'templates/review.html',
     controller: 'ReviewCtrl'
    
  })

                  .state('addreview', {
    cache: 'false',
    url: '/addreview',
    templateUrl: 'templates/addreview.html',
     controller: 'ReviewCtrl'
    
  })

            .state('edit_review', {
    cache: 'false',
    url: '/edit_review',
    templateUrl: 'templates/edit_review.html',
     controller: 'ReviewCtrl'
    
  })


                .state('adminreviewdetail', {
    cache: 'false',
    url: '/adminreviewdetail',
    templateUrl: 'templates/adminreviewdetail.html',
     controller: 'ReviewCtrl'
    
  })

       .state('aboutus', {
    cache: 'false',
    url: '/aboutus',
    templateUrl: 'templates/aboutus.html',
     controller: 'AboutCtrl'
    
  })

          .state('contactus', {
    cache: 'false',
    url: '/contactus',
    templateUrl: 'templates/contactus.html',
     controller: 'AboutCtrl'
    
  })

             .state('privacy', {
    cache: 'false',
    url: '/privacy',
    templateUrl: 'templates/privacy.html',
     controller: 'AboutCtrl'
    
  })

                .state('terms', {
    cache: 'false',
    url: '/terms',
    templateUrl: 'templates/terms.html',
     controller: 'AboutCtrl'
    
  })


                .state('terms_signup', {
    cache: 'false',
    url: '/terms_signup',
    templateUrl: 'templates/terms_signup.html',
     controller: 'AboutCtrl'
    
  })

                   .state('refund', {
    cache: 'false',
    url: '/refund',
    templateUrl: 'templates/refund.html',
     controller: 'AboutCtrl'
    
  })

                .state('orderlist', {
    cache: 'false',
    url: '/orderlist',
    templateUrl: 'templates/orderlist.html',
     controller: 'BillCtrl'
    
  })

        

    .state('app', {
    url: '/app',
    cache: 'false',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  

   .state('app.manage_time', {
    url: '/manage_time',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/manage_time.html',
        controller: 'TimeCtrl'
      }
    }
  })

    .state('app.manage_deliverytime', {
    url: '/manage_deliverytime',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/manage_deliverytime.html',
        controller: 'DeliverytimeCtrl'
      }
    }
  })


    .state('app.manage_deliverytime1', {
    url: '/manage_deliverytime1',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/manage_deliverytime1.html',
        controller: 'DeliverytimeCtrl'
      }
    }
  })

    .state('app.orderhistory', {
    url: '/orderhistory',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/orderhistory.html',
        controller: 'TrackpreviousCtrl'
      }
    }
  })

     .state('app.manage_time1', {
    url: '/manage_time1',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/manage_time1.html',
        controller: 'TimeCtrl'
      }
    }
  })


    .state('app.admin_review', {
    url: '/admin_review',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/admin_review.html',
        controller: 'ReviewCtrl'
      }
    }
  })



 .state('app.adminorderchk', {
    url: '/adminorderchk',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/adminorderchk.html',
        controller: 'AdminrenderCtrl'

      }
    }
  })



 .state('app.adminreview', {
    url: '/adminreview',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/adminreview.html',
        controller: 'ReviewCtrl'

      }
    }
  })





 .state('app.list', {
    url: '/list',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/list.html',
        controller: 'BillCtrl'

      }
    }
  })



 .state('app.adminplanchk', {
    url: '/adminplanchk',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/adminplanchk.html',
        controller: 'AdminCtrl'

      }
    }
  })

  

   .state('app.adminhome', {
    url: '/adminhome',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/adminhome.html',
        controller: 'AdminCtrl'

      }
    }
  })



                .state('app.posttifin', {
    url: '/posttifin',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/posttifin.html',
        controller: 'DashCtrl'

      }
    }
  })


                .state('app.adminposttifin', {
    url: '/adminposttifin',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/adminposttifin.html',
        controller: 'DashCtrl'

      }
    }
  })

          


                .state('app.invoice', {
    url: '/invoice',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/invoice.html',
        controller: 'BillCtrl'

      }
    }
  })
       

                .state('app.tifinproviderhome', {
    url: '/tifinproviderhome',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/tifinproviderhome.html',
        controller: 'DashCtrl'

      }
    }
  })
       


   .state('app.userorderlist', {
      url: '/userorderlist',
      cache: 'false',
      views: {
        'menuContent': {
          templateUrl: 'templates/userorderlist.html',
          controller: 'TrackCtrl'
        }
      }
    })


    .state('app.cstmrhome', {
      url: '/cstmrhome',
      cache: 'false',
      views: {
        'menuContent': {
          templateUrl: 'templates/cstmrhome.html',
          controller: 'DashCtrl'
        }
      }
    })


    .state('app.deliveryboy', {
      url: '/deliveryboy',
      cache: 'false',
      views: {
        'menuContent': {
          templateUrl: 'templates/deliveryboy.html',
          controller: 'ReviewCtrl'
        }
      }
    })

 .state('app.plan', {
      url: '/plan',
      cache: 'false',
      views: {
        'menuContent': {
          templateUrl: 'templates/plan.html',
          controller: 'DashCtrl'
        }
      }
    })

  
      .state('app.tifinproviderplan', {
    url: '/tifinproviderplan',
    cache: 'false',
    views: {
      'menuContent': {
        templateUrl: 'templates/tifinproviderplan.html',
        controller: 'DashCtrl'
      }
    }
  })

 

   .state('app.adhome', {
      url: '/adhome',
      cache: 'false',
      views: {
        'menuContent': {
          templateUrl: 'templates/adhome.html',
           controller: 'NavigateCtrl'
        }
      }
    });



  
  // if none of the above states are matched, use this as the fallback
 


   
  

  $urlRouterProvider.otherwise('homepage');
});
