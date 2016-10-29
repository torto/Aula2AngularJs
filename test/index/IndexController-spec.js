describe('IndexController', function() {
  var $scope;

  beforeEach(module('cruj'));
  beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('IndexController', {
          $scope: $scope
      });
  }));

  it('somaDeDoisValores e retorno', function(){
    var a = $scope.somaDeDoisValores(1,2);
    expect(a).toEqual(3);
    expect($scope.retorno).toEqual(3);
  });


});
