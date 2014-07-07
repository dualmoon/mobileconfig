var mobileConfig = angular.module('mobileConfig', ['ui.bootstrap']);

mobileConfig.controller('GeneratorCtrl', function($scope){
   $scope.validUsername = /^[\w\.-]{2,25}$/; //alpha+underscore, period, and dash
   $scope.setup = {
      serverType: 'imap'
   };
});