"use strict";

angular.module("controllerApp", [])

    .controller("mainCtrl", function($scope){
        $scope.hello_world = "Hello World"
    })

    .controller("subCtrl", function($scope) {
        $scope.hello_child = "Hello Child"
    })
