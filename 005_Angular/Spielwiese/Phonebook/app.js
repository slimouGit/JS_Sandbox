"use strict";

angular.module('contactApp', [])

    .controller('ContactsCtrl', function($scope, $http){
        $http.get('contacts.json').then(function(contactsResponse) {
            $scope.contacts = contactsResponse.data;
        });
    });