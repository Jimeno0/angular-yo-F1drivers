angular.module('driverDetails')
  .component('driverDetails',{
    templateUrl:'app/driver-details/driver-details.template.html',
    controllerAs:'ctrl',
    controller: function driverDetailsController(ergastAPIservice, $routeParams){
      var self = this;
      self.id = $routeParams.id;

      ergastAPIservice.getDriverDetails(self.id).success(function (response){
        self.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
      });

      ergastAPIservice.getDriverRaces(self.id).success(function(response){
        self.races = response.MRData.RaceTable.Races;
      });
    }
  });