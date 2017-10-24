"use strict";

angular.module("functionApp", [])
    .controller("functionController", function($scope){

        $scope.headline = "Liste";
        $scope.items = [];

        $scope.addItem = function(){
            $scope.items.push($scope.newItem);
            $scope.newItem = "";
        }
    })