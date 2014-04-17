'use strict';

angular.module('qualifiedApp')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
