angular.module('cruj').controller('IndexController', ['$scope', function($scope) {

  $scope.retorno = '';
  $scope.somaDeDoisValores = function(a,b){
    $scope.retorno = a + b;
    return a+b;
  }

}]);
