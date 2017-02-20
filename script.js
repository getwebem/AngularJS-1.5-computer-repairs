var app = angular.module('computer', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/main', {
        templateUrl: 'main.html',
        controller : 'MainController'
    })
    .otherwise({redirectTo:'/main'})
}])
.controller('MainController', ['$scope', function($scope){
    $scope.person = 'John Doe';
    console.log($scope);
 
}]);







