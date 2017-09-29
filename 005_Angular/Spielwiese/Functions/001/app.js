"use strict";

angular.module("controllerApp", [])
    .controller("myController", function($scope){
        $scope.alertVariable = function(){
            //$scope.testController = "testController"
            alert("Klappt");
        }
    })
