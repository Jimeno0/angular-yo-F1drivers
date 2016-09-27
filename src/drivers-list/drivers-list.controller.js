angular.module('driversList')
.controller('DriversController', function DriversController (ergastAPIservice){
  var self = this;

  ergastAPIservice.getDrivers().success(function(response){

    self.drivers = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    console.log(response.MRData.StandingsTable.StandingsLists[0].DriverStandings);

  });

});