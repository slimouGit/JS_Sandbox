"use strict";

let app = angular.module("directiveApp", [])

app.controller("directiveController", function($scope){
        $scope.titel = "Titel"
    });

app.directive("panelDirective", function(){
        return {
          templateUrl: "template/panel.html"
        };
    });