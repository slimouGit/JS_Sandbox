var app = angular.module("tutorialApp", []);

app.controller("TutorialController", function($scope, $timeout) {
    $scope.showPanel = false;

    $scope.$watch("showPanel", function(newValue, oldValue) {

        console.log(newValue, oldValue);
        if(newValue == true) {
            $timeout(function() {
                $scope.showPanel = false;
            }, 1000);
        }
    });

    //----------------------------------------------------------------------------

    $scope.testValue = false;

    $scope.$watch("testValue", function(){
        console.log("value changed: " + $scope.testValue);
        $timeout(function(){
            $scope.testValue = false;
        },2000);
    });

});