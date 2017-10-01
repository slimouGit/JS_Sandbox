var app = angular.module("tutorialApp", []);

app.controller("TutorialController", function($scope) {
	$scope.showGermanCities = false;

    $scope.citiesGermany = [];

    $scope.$watch("showGermanCities", function() {

        if ($scope.showGermanCities == true) {

            var request = new XMLHttpRequest();

            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {

                    console.log(request.responseText);
                    $scope.citiesGermany = JSON.parse(request.responseText);
                    $scope.$apply();

                }
            };

            request.open("GET", "citiesGermany.json", true);
            request.send();
        }
    });
});