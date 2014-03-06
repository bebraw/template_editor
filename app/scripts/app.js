'use strict';

angular.module('templateEditorApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
      .otherwise({
        redirectTo: '/'
    });
});
