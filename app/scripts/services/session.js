'use strict';

angular.module('qualifiedApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
