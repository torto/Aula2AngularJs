angular.module('cruj').service('IndexService', [function(){

  function somaDeDoisValores(a, b){
    return a + b;
  }

  function multiplicacaoDeDoisValores(a, b){
    return a * b;
  }

  return {
    somaDeDoisValores: somaDeDoisValores,
    multiplicacaoDeDoisValores: multiplicacaoDeDoisValores
  };

}]);
