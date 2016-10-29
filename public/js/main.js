angular.module('cruj', ['ngRoute']).config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'js/index/TemplateIndex.html',
    controller: 'IndexController'
  });


}]);
