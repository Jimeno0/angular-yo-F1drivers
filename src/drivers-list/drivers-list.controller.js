angular.module('driversList')
.controller('DriversController', function DriversController (ergastAPIservice){
  var self = this;

  ergastAPIservice.getDrivers().success(function(response){

    self.drivers = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  });

  self.searchFiller = function(driver){
    var keyword = new RegExp(self.nameFilter,'i');
    return !self.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
  };

});