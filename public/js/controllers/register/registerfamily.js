
angular.module('donate')
    .controller('RegisterFamilyController',  ['$scope', '$modal' ,'$location','FamilyService','UserAuthorizationService',


        function ($scope ,$modal, $location , FamilyService , UserAuthorizationService) {

           var displayIndex= 0;

            $scope.displayIndex = displayIndex;

            var logintext= $scope.logintext;

            if(logintext !== 'Log Out'){
                $scope.logintext = 'Log In';
            }



            $scope.getWelcomeText = function(){
                var user = UserAuthorizationService.getUserName();

                if( user !== '' && user !== 'normal'){
                    $scope.welcometext = 'welcome ' + user +'!!!';
                    return true;
                }
                return false;
            };


            $scope.getNext= function(){
                displayIndex = $scope.displayIndex;
                displayIndex++;
                $scope.displayIndex=displayIndex;

            };

            $scope.getdisplayIndex= function(){
                var indexPost= $scope.displayIndex;
                return indexPost;
            }

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




            var myForm={};

            $scope.submitDonar= function () {

                $location.path('/register/donar/conformation');
            }


            var init = function () {
            };

            init();

        }]);



