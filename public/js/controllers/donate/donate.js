angular.module('donate')
    .controller('StoreController', ['$http' ,'$scope', '$modal', '$location',
        'FamilyService', 'UserAuthorizationService', 'LoginStatusService',

        function ($http ,$scope, $modal, $location, FamilyService, UserAuthorizationService, LoginStatusService) {


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

            $scope.updateFamily= function(family){

                var familyId = family.username;

                FamilyService.setFamilyId(familyId);

                return true;
            };


            $scope.loginShow = function () {

                if ($scope.logintext === 'Log Out') {
                    $scope.logintext = 'Log In';
                    $scope.welcometext = '';
                    UserAuthorizationService.setRole('normal');
                    UserAuthorizationService.setUserName('normal');
                    alert('you are being logged out from the system');
                    return true;
                } else {
                    $scope.logintext = 'Log Out';
                    var dailog = $modal.open({
                        templateUrl: 'view/login/login.view.html',
                        controller: 'LoginController'
                    });
                }
            };





            $scope.getFamily = function () {

                $location.path('/donate/familydonation');

            };




            var init = function () {


                var data = JSON.stringify({
                    family: 'approved'
                });


                $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/donation/famalies", data)
                    .success(function (data, status) {


                        $scope.familyList = data.familyList;


                    });


            };

            init();


        }]);



