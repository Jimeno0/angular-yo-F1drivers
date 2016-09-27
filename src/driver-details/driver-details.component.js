angular.module('driverDetails')
  .component('driverDetails',{
    templateUrl:'/driver-details/driver-details.template.html',
    controllerAs:'ctrl',
    controller: function driverDetailsController(ergastAPIservice, $routeParams){
      var self = this;
      self.id = $routeParams.driverId;
      



    }
  });