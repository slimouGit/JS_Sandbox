let app = angular.module("serviceApp", [])

app.controller("service-controller", function($scope, serviceFactory){
    $scope.serviceFactory = serviceFactory;
});

app.controller("service-controller2", function($scope, serviceFactory){
    $scope.serviceFactory = serviceFactory;
});

app.factory("serviceFactory", function(){
    return {
        myServiceValue: 42
    }
});