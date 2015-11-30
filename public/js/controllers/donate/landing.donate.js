
angular.module('donate')
    .controller('DonateController', ['$http' ,'$scope', '$location', 'FamilyService','GiftService',
        'UserAuthorizationService','LoginStatusService',

        function ($http,$scope ,$location, FamilyService , GiftService ,UserAuthorizationService ,LoginStatusService ) {


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

            var familydonation ={};






            $scope.submitDonate = function(){

                var data = JSON.stringify({

                    gift :  GiftService.getGifts(),
                    familyId : FamilyService.getFamilyId(),
                    userId : UserAuthorizationService.getUserName()

                });


                $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/donation/final/submit", data)
                    .success(function (data, status) {



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



