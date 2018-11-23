
var myapp = angular.module('timeApp', []);

myapp.controller('timeController', function($scope, $interval) {
    $scope.local_time = '';
    $scope.utc_time = '';
    console.log($scope.utc_time)
    $scope.updateTime = function() {
        let d = new Date();
        $scope.utc_time = d.getFullYear() +
            '/' + ('0' + parseInt(d.getUTCMonth() + 1)).slice(-2) +
            '/' + ('0' + d.getUTCDate()).slice(-2) +
            ' - ' + ('0' +d.getUTCHours()).slice(-2) +
            ':' + ('0' +d.getUTCMinutes()).slice(-2) +
            ':' + ('0' +d.getUTCSeconds()).slice(-2);
        $scope.local_time = d.getFullYear() +
            '/' + ('0' + parseInt(d.getMonth() + 1)).slice(-2) +
            '/' + ('0' + d.getDate()).slice(-2) +
            ' - ' + ('0' +d.getHours()).slice(-2) +
            ':' + ('0' +d.getMinutes()).slice(-2) +
            ':' + ('0' +d.getSeconds()).slice(-2);

    };
    $interval($scope.updateTime, 1000)

});