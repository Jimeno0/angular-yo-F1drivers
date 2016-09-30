angular.module('app')
  .config(['$locationProvider','$routeProvider', 
    function config($locationProvider, $routeProvider){
      
      $routeProvider
      .when('/drivers',{
        template:'<drivers-list></drivers-list>'
      })
      .when('/drivers/:id',{
        template:'<driver-details></driver-details>'
      })
      .otherwise('/drivers');
    }
  ]);