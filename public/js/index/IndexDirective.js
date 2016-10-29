angular.module('cruj').directive('indexDirective', [function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'js/index/IndexTemplateDirective.html',
    scope:{
      variable: '@'
    },
    link: function(scope, elem, attrs){
      scope.retornoDirective = attrs.variableTwo;
    }
  }
}]);
