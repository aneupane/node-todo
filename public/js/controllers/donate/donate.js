
angular.module('donate')
    .controller('StoreController',  ['$scope', '$location','FamilyService','UserAuthorizationService',

        function ($scope , $location , FamilyService , UserAuthorizationService) {


            $scope.getUserRole= function () {
                var userRole = UserAuthorizationService.getRole();
                return userRole;
            }


            $scope.doDecorate= function (product) {

                var p= product.name;

                $scope.myStyle = {
                    "border-style": "solid",
                    "border-width": "2px 10px 4px 20px",
                    "border-color":"#4a4a4a"
                };

                alert(String(p));
            };


            $scope.getFamily = function (){

                var familyId= "123";
                FamilyService.setFamilyId(familyId);

                $location.path('/donate/familydonation');

            };


            $scope.submitDonate = function(){
                $scope.path('/donate/conformation');
            };


            $scope.products
                = [{
                name: 'John Family',
                description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
                shine: 8,
                price: "Cleveland",
                rarity: 7,
                color: '#CCC',
                faces: 14,
                images: [
                    "images/john.jpg"

                ]
            }, {
                name: 'John Family',
                description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
                shine: 9,
                price: "cleveland",
                rarity: 6,
                color: '#EEE',
                faces: 12,
                images: [
                    "images/john.jpg"
                ]
            }, {
                name: 'John Family',
                description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
                shine: 70,
                price: "cleveland",
                rarity: 2,
                color: '#000',
                faces: 6,
                images: [
                    "images/john.jpg"
                ]
            }];

            var init = function () {
            };

            init();

        }]);



