angular.module('app')
    .controller('AdminController', ['$http' ,'$scope', '$location', 'FamilyService', 'UserAuthorizationService',

        function ($http ,$scope, $location, FamilyService, UserAuthorizationService) {

            var status ="submitted";

            var familyWishRecord= {
                "familyname": "J.Evans",
                "children": [
                    "bill",
                    "chill",
                    "sony"
                ],
                "wishlist": [
                    "car",
                    "ipad",
                    "ipod"
                ],
                "biography": " we are a family in cleveland, we have three...",
                "status": "approved"
            };


            $scope.status = status;
            $scope.familyname= familyWishRecord.familyname;
            $scope.biography = familyWishRecord.biography;

            $scope.wishlist = familyWishRecord.wishlist.toString();
            $scope.children = familyWishRecord.children.toString();


            $scope.getUserRole= function () {
                var userRole = UserAuthorizationService.getRole();
                return userRole;
            }


            $scope.declineWishList= function (f) {

                var data = JSON.stringify({
                    status: 'DECLINED',
                    username : f.username
                });

                $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/admin/status", data)
                    .success(function (data, status) {

                    });
                return true;
            }


            $scope.approveWishList= function (f) {

                var data = JSON.stringify({
                    status: 'APPROVED',
                    username : f.username
                });

                $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/admin/status", data)
                    .success(function (data, status) {

                    });
                return true;
            }


            var init = function () {


                var data = JSON.stringify({
                    family: 'all'
                });


                $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/admin/family", data)
                    .success(function (data, status) {

                        $scope.family = data.admindtos;

                        
                    });


            };

            init();



        }]);



