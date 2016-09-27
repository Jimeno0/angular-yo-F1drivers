angular.module('myApp')
  .config(['$locationProvider','$routeProvider', 
    function config($locationProvider, $routeProvider){
      $locationProvider.hashPrefix('!');

      $routeProvider.
      when('/drivers',{
        template:'<drivers-list></drivers-list>'
      }).
      when('/driver/:driverId',{
        template:'<driver-details></driver-details>'
      }).
      otherwise('/driver/:driverId');
      // otherwise('/drivers');
    }
  ]);