'use strict';

angular.module('app')
    .controller('RootController', ['$scope', '$modal', '$http', function ($scope, $modal, $http) {

        $scope.loginShow = function () {
            var dailog = $modal.open({
                templateUrl: 'view/login/login.view.html',
                controller: 'LoginController',
                size: 'lg'
            });
        };

        $scope.$on('$routeChangeSuccess', function (e, current, previous) {
            $scope.currentRoute = current;
        });

    }]);
