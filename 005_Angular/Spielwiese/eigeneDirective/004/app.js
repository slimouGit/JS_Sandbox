"use strict";

let app = angular.module("directiveApp", [])

app.controller("directiveController", function($scope){
        $scope.title = "Test";
        $scope.desc = {
            title: "Directive",
            cont: "Panel"
        };
        $scope.onSubmitButton = function(a){
            alert(a);
        };
    });

app.directive("panelDirective", function(){
        return {
            restrict: "EAC",
            templateUrl: "template/panel.html",
            scope: {
                panelTitle: "@",
                panelContent: "@",
                desc: "=",
                onSubmit: "&"
            }
        };
    });