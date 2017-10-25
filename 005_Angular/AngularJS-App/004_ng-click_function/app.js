"use strict";

angular.module("controllerApp", [])

    .controller("mainCtrl", function($scope){
        $scope.items = [

        ];

        $scope.addItem = function(){
            $scope.items.push({
                name: $scope.newItem
            })

            $scope.newItem = ""
        }
    })


