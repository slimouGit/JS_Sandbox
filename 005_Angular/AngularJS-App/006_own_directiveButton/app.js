"use strict";

let myApp = angular.module("myApp", []);

    myApp.controller("mainCtrl", function($scope){

    })

    myApp.directive("myButton", function(){
        return {
            redirect: 'E,A',
            transclude: true,
            replace: true,
            templateUrl: 'button-template.html',
            link: function(scope, element, attrs){
                //do something
            }
        };
    });

