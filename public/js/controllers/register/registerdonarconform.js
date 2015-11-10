
angular.module('donate')
    .controller('RegisterDonarConformationController',  ['$scope', '$location','FamilyService','UserAuthorizationService',

        function ($scope , $location , FamilyService , UserAuthorizationService) {


            $scope.getUserRole= function () {
                var userRole = UserAuthorizationService.getRole();
                return userRole;
            }


            var init = function () {
            };

            init();

        }]);



