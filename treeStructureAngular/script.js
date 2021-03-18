const myApp = angular.module('myApp', []);


myApp.controller('MainController', function ($scope, $http) {

    $http.get('/tree-data.json').then(function (data) {
        $scope.treeData = data.data;
    });

    $scope.showFolder = function (children) {
        if (children === undefined) return;

        for (let child of children) {
            child.visible = !child.visible;
        }
    }
});



