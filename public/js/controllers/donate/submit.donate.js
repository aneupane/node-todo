
angular.module('donate')
    .controller('SubmitDonateController',  ['$scope', '$location','FamilyService', 'UserAuthorizationService', 'LoginStatusService',

        function ($scope , $location , FamilyService , UserAuthorizationService ,LoginStatusService) {


            var logintext= LoginStatusService.getLoginText();

            if(logintext !== 'Log Out'){
                $scope.logintext = 'Log In';
                LoginStatusService.setLoginText(logintext);
            }else{
                $scope.logintext = logintext;
            }


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
                    $scope.welcometext ='';
                    UserAuthorizationService.setRole('normal');
                    UserAuthorizationService.setUserName('normal');
                    alert('you are being logged out from the system');
                    return true;
                } else{
                    $scope.logintext = 'Log Out';
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



