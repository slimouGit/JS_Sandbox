var app = angular.module("tutorialApp", []);

app.controller("TutorialController", function($scope, $http) {
	$scope.showCities = false;
    $scope.cities = [];

    $scope.$watch("showCities", function() {
        if ($scope.showCities == true) {
            $http.get("cities.json").then(function(data){
                console.log(data);
                $scope.cities = data.data;
            }, function(error){
                alert("Ferhler");
            });
        }
    });

});