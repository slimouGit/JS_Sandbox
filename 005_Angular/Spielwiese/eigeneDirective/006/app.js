"use strict";

let app = angular.module("directiveApp", [])

app.controller("directiveController", function($scope, $http){
    $http.get('data/contacts.json').then(function(contactResponse){
        $scope.contacts = contactResponse.data;
    });
});

app.directive("panelDirective", function(){
    return {
        restrict: "EAC",
        templateUrl: "template/panel.html",
        scope: {
            panelTitle: "@",
            panelContent: "@"
        },
        transclude: true
    };
});

app.directive("tableDirective", function(){
    return{
        templateUrl: "template/table.html",
        scope: {
            tableId: "@",
            tableForename: "@",
            tableSurname: "@",
            tablePhone: "@",
            tableEmail: "@"
        },
        transclude: true
    }
});