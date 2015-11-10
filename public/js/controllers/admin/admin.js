angular.module('app')
    .controller('AdminController', ['$scope', '$location', 'FamilyService', 'UserAuthorizationService',

        function ($scope, $location, FamilyService, UserAuthorizationService) {

            var status ="submitted"


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


            $scope.approveWishList= function () {

                $scope.status= "Approved";
                return true;
            }


            $scope.declineWishList= function () {
                $scope.status= "Declined";

                return true;
            }







            var init = function () {
            };

            init();

        }]);



