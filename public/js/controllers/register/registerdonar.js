﻿
angular.module('donate')
    .controller('RegisterDonarController',  ['$scope', '$location','FamilyService','UserAuthorizationService',


        function ($scope , $location , FamilyService , UserAuthorizationService) {

            var myForm={};

            $scope.submitDonar= function () {
                $location.path('/register/donar/conformation');
            }


            var init = function () {
            };

            init();

        }]);



