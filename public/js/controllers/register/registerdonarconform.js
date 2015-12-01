
angular.module('donate')
    .controller('RegisterDonarConformationController',  ['$scope', '$location',
        'FamilyService','UserAuthorizationService','LoginStatusService',

        function ($scope , $location , FamilyService , UserAuthorizationService , LoginStatusService) {

            var logintext= LoginStatusService.getLoginText();

            if(logintext === 'Log Out'){
                $scope.logintext = logintext;
            }else{
                $scope.logintext = 'Log In';
            }

            $scope.getUserRole= function () {
                var userRole = UserAuthorizationService.getRole();
                return userRole;
            };

            $scope.getWelcomeText = function(){
                var user = UserAuthorizationService.getUserName();

                if( user !== '' && user !== 'normal'){
                    $scope.welcometext = 'welcome ' + user +'!!!';
                    return true;
                }
                return false;
            };

            $scope.loginShow = function () {

                if($scope.logintext === 'Log Out'){
                    $scope.logintext = 'Log In';
                    LoginStatusService.setLoginText('Log In');
                    $scope.welcometext ='';
                    UserAuthorizationService.setRole('normal');
                    UserAuthorizationService.setUserName('normal');
                    alert('you are being logged out from the system');
                    return true;
                } else{
                    $scope.logintext = 'Log Out';
                    LoginStatusService.setLoginText('Log Out');
                    var dailog = $modal.open({
                        templateUrl: 'view/login/login.view.html',
                        controller: 'LoginController'
                    });
                }
            };

            $scope.getUserRole= function () {
                var userRole = UserAuthorizationService.getRole();
                return userRole;
            }


            var init = function () {
            };

            init();

        }]);



