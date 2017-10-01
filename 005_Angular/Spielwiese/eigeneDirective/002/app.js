"use strict";

let app = angular.module("directiveApp", [])

app.controller("directiveController", function($scope){
        $scope.title = "Test"
    });

app.directive("panelDirective", function(){
        return {
            restrict: "EAC",
            templateUrl: "template/panel.html",
            scope: {
                panelTitle: "@"
            }
        };
    });