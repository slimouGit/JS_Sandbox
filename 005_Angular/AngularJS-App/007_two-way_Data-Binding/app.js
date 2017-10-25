"use strict";

let myApp = angular.module('myApp', []);

myApp.controller('mainCtrl', function($scope) {

    $scope.verfuegbar = "ja";
    $scope.stueck = 3;

    $scope.buyProduct = function() {

        $scope.stueck--;

        if($scope.stueck <= 0) {
            $scope.verfuegbar = "nein";
        }

    };

});



