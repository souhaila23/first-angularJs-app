(function () {
'use strict';

  angular.module('muFirstApp', [])
  .controller('myFirstController', function ($scope) {
   $scope.name = "Yaakov";
   $scope.sayHello = function () {
     return "Hello coursera!";
   }
  })
})()
