
angular.module('donate')
    .controller('DonateController', ['$scope', '$location', 'FamilyService',
        'UserAuthorizationService','LoginStatusService',

        function ($scope ,$location, FamilyService ,UserAuthorizationService ,LoginStatusService ) {


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

            $scope.doDecorate= function () {

                alert('Hello');
            };


            $scope.submitDonate = function(){
                $location.path('/donate/conformation');
            };


            $scope.getGiftUpdate = function(selectedGift) {
                $scope.giftList = $scope.selectedGift;
                // use $scope.selectedItem.code and $scope.selectedItem.name here
                // for other stuff ...
            }


            //var id ="123";  //FamilyService.getFamilyId();

            var id =FamilyService.getFamilyId();

             familydonation= [
                {
                    "familyid": "123",
                    "payload": [
                        {
                            "childname": "jerry",
                            "wishlist": [
                                "ipad",
                                "headphone",
                                "iphone"
                            ]
                        },
                        {
                            "childname": "berry",
                            "wishlist": [
                                "ps4",
                                "xbox",
                                "ipad"
                            ]
                        },
                        {
                            "childname": "sherry",
                            "wishlist": [
                                "ps4",
                                "xbox",
                                "iphone"
                            ]
                        }
                    ]
                }
            ];



            var family = function (id) {

                var result = null;
                angular.forEach(familydonation, function (family) {
                    if (family.familyid === id) result = angular.copy(family.payload);
                });

                return result;
            };


            var familyList = family(id);


            $scope.familyWish = familyList;




            var init = function () {
            };

            init();

        }]);



