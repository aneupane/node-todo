
angular.module('donate')
    .controller('DonateController', ['$scope', '$location', 'FamilyService', 'UserAuthorizationService',

        function ($scope ,$location, FamilyService ,UserAuthorizationService ) {


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



