"use strict";

let myApp = angular.module("myApp", []);

    myApp.controller("mainCtrl", function($scope){
        $scope.listName = "Zutaten";
        $scope.items = [
            {name: "Dinkel-Vollkornmehl"},
            {name: "Wuerfel Hefe"},
            {name: "geschaelte Tomaten"},
            {name: "Mozzarella"},
            {name: "Mais"}
        ];

        $scope.addItem = function(){
            $scope.items.push({
                name: $scope.newItem
            })

            $scope.newItem = ""
        }
    })


