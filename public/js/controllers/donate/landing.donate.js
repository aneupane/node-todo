
angular.module('donate')
    .controller('DonateController', ['$scope', '$location', 'FamilyService',

        function ($scope ,$location, FamilyService ) {

            var familydonation ={};

            $scope.doDecorate= function () {

                alert('Hello');
            };


            $scope.submitDonate = function(){
                $location.path('/donate/conformation');
            };

            //var id ="123";  //FamilyService.getFamilyId();

            var id =FamilyService.getFamilyId();

             familydonation= [
                {
                    "familyid": "123",
                    "payload": [
                        {
                            "childname": "jerry",
                            "wishlist": [
                                "car0",
                                "photo0",
                                "ipad0"
                            ]
                        },
                        {
                            "childname": "berry",
                            "wishlist": [
                                "car",
                                "photo2",
                                "ipad2"
                            ]
                        },
                        {
                            "childname": "cerry",
                            "wishlist": [
                                "car",
                                "photo1",
                                "ipad1"
                            ]
                        }
                    ]
                },
                {
                    "familyid": "887",
                    "payload": [
                        {
                            "childname": "jerry",
                            "wishlist": [
                                "bcar0",
                                "bphoto0",
                                "bipad0"
                            ]
                        },
                        {
                            "childname": "berry",
                            "wishlist": [
                                "bcar",
                                "bphoto2",
                                "bipad2"
                            ]
                        },
                        {
                            "childname": "cerry",
                            "wishlist": [
                                "bcar",
                                "bphoto1",
                                "bipad1"
                            ]
                        }
                    ]
                },
                {
                    "familyid": "324",
                    "payload": [
                        {
                            "childname": "jerry",
                            "wishlist": [
                                "acar0",
                                "aphoto0",
                                "aipad0"
                            ]
                        },
                        {
                            "childname": "berry",
                            "wishlist": [
                                "acar",
                                "aphoto2",
                                "aipad2"
                            ]
                        },
                        {
                            "childname": "cerry",
                            "wishlist": [
                                "acar",
                                "aphoto1",
                                "iapad1"
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



