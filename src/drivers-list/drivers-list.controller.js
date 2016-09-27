angular.module('driversList')
.controller('DriversController', function DriversController ($scope){
  var self = this;
  self.drivers = [
  {name:'Alonso', country:'Spain'},
  {name:'Vettel', country:'Germany'},
  {name:'Button', country:'England'}
  ];
});