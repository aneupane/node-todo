
angular.module('donate')
    .controller('DonateController', ['$http' ,'$scope', '$location', 'FamilyService','GiftService',
        'UserAuthorizationService','LoginStatusService',

        function ($http,$scope ,$location, FamilyService , GiftService ,UserAuthorizationService ,LoginStatusService ) {

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

            var familydonation ={};


            $scope.submitDonate = function(){

                var data = JSON.stringify({

                    gift :  GiftService.getGifts(),
                    familyId : FamilyService.getFamilyId(),
                    userId : UserAuthorizationService.getUserName()

                });


                $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/donation/final/submit", data)
                    .success(function (data, status) {
                        var emptyGift =[];
                        GiftService.setGifts(emptyGift);

                    });

                $location.path('/donate/conformation');

            };


            $scope.getGiftUpdate = function(gift) {
                GiftService.addGifts(gift);
                var giftsreceived = GiftService.getGifts();
                $scope.gifts = giftsreceived;
            };



            var init = function () {

                var familyId =  FamilyService.getFamilyId();

                var data = JSON.stringify({
                    familyId: familyId
                });


                $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/donation/wishlist", data)
                    .success(function (data, status) {

                        $scope.familyWish = data.wishes;

                    });


            };

            init();


        }]);



