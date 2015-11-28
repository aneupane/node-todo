angular.module('app')
    .controller('HomeController', ['$scope','$modal', '$location', 'FamilyService', 'UserAuthorizationService',

        function ($scope,$modal, $location, FamilyService, UserAuthorizationService) {

            var logintext= $scope.logintext;
            if(logintext !== 'Log Out'){
                $scope.logintext = 'Log In';
            }

            $scope.getUserRole= function () {
                var userRole = UserAuthorizationService.getRole();
                return userRole;
            };

            $scope.loginShow = function () {

                if($scope.logintext === 'Log Out'){
                    $scope.logintext = 'Log In';
                    $scope.welcometext ='';
                    UserAuthorizationService.setRole('normal');
                    UserAuthorizationService.setUserName('normal');
                    alert('you are being logged out from the system');
                    return true;
                } else{
                    $scope.logintext = 'Log Out';
                    var dailog = $modal.open({
                        templateUrl: 'view/login/login.view.html',
                        controller: 'LoginController'
                    });

                }
            };



            $scope.$on('$routeChangeSuccess', function (e, current, previous) {
                $scope.currentRoute = current;
            });

        }]);



