angular.module('myApp')
.controller('demo02Ctrl', ['$scope', function($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';

    $scope.type = ['类别1','类别2','类别3','类别4'];

    $scope.disabled = true;
    $scope.change = function (ss) {
        $scope.disabled = false;
    }
}]);