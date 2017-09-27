/**
 * Created by salim on 26.09.2017.
 */
"use strict";

angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/about', {templateUrl: 'sites/about.html'})
            .when('/contact', {templateUrl: 'sites/contact.html'})
            .otherwise({redirectTo: '/'});
    })
