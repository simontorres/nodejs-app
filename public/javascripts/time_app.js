
var myapp = angular.module('timeApp', []);

myapp.controller('timeController', function($scope, $interval) {
    $scope.local_time = '';
    $scope.utc_time = '';
    console.log($scope.utc_time)
    $scope.updateTime = function() {
        let d = new Date();
        $scope.utc_time = d.getFullYear() +
            '/' + d.getUTCMonth() +
            '/' + d.getUTCDate() +
            ' - ' + d.getUTCHours() +
            ':' + d.getUTCMinutes() +
            ':' + d.getUTCSeconds();
        $scope.local_time = d.getFullYear() +
            '/' + d.getMonth() +
            '/' + d.getDate() +
            ' - ' + d.getHours() +
            ':' + d.getMinutes() +
            ':' + d.getSeconds();

    };
    $interval($scope.updateTime, 1000)

});