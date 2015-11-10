﻿
angular.module('donate')
    .controller('SubmitDonateController',  ['$scope', '$location','FamilyService', 'UserAuthorizationService',

        function ($scope , $location , FamilyService , UserAuthorizationService) {


            $scope.getUserRole= function () {
                var userRole = UserAuthorizationService.getRole();
                return userRole;
            }



            $scope.submitDonate = function(){
                $scope.path('/donate/conformation');
            };


            var init = function () {
            };

            init();

        }]);



