describe('drivers controller', function () {
  // beforeEach(module('app', function ($provide) {
  //   $provide.factory('app', function () {
  //     return {
  //       templateUrl: 'app/hello.html'
  //     };
  //   });
  // }));
  // it('should render hello world', angular.mock.inject(function ($rootScope, $compile) {
  //   var element = $compile('<app>Loading...</app>')($rootScope);
  //   $rootScope.$digest();
  //   var h1 = element.find('h1');
  //   expect(h1.html()).toEqual('Hello World!');
  // }));

  beforeEach(module('driversList'));

  describe('DriversController', function() {

      it('should create a `phones` model with 3 phones', inject(function($controller) {

        var scope = {};
        var ctrl = $controller('DriversController', {$scope: scope});

        expect(ctrl.drivers.length).toBe(3);
      }));

    });



});
