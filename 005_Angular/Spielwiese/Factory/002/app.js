let app = angular.module('myApp', []);

app.controller('formController', function($scope, userService) {
    $scope.addUser = function() {
        userService.addUser($scope.username, $scope.email);
        $scope.username = "";
        $scope.email = "";
    }
});

app.controller('userListController', function($scope, userService) {
    $scope.users = userService.users;
});

app.factory("userService", function () {
    var privateUserList = [];
    return {
        users: function () {
            return [].concat(privateUserList);
        },
        addUser: function (username, email) {
            privateUserList.push({username: username, email: email});
        }
    };
})