"use strict";

angular.module("controllerApp", [])

    .controller("mainCtrl", function($scope){
        $scope.items = [
            {name: "Item 1"},
            {name: "Item 2"},
            {name: "Item 3"},
            {name: "Item 2"},
            {name: "Item 5"}
        ];
    })


