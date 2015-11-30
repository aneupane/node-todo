angular.module('donate')
    .controller('StoreController', ['$http' ,'$scope', '$modal', '$location',
        'FamilyService', 'UserAuthorizationService', 'LoginStatusService',

        function ($http ,$scope, $modal, $location, FamilyService, UserAuthorizationService, LoginStatusService) {


            var logintext = LoginStatusService.getLoginText();

            if (logintext !== 'Log Out') {
                $scope.logintext = 'Log In';
                LoginStatusService.setLoginText(logintext);
            } else {
                $scope.logintext = logintext;
            }


            $scope.getUserRole = function () {
                var userRole = UserAuthorizationService.getRole();
                return userRole;
            };

            $scope.getWelcomeText = function () {
                var user = UserAuthorizationService.getUserName();

                if (user !== '' && user !== 'normal') {
                    $scope.welcometext = 'welcome ' + user + '!!!';
                    return true;
                }
                return false;
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


            $scope.doDecorate = function (product) {

                var p = product.name;

                var styleProduct = 'myStyle_' + product.price;

                $scope.myStyle = {
                    "border-style": "solid",
                    "border-width": "2px 10px 4px 20px",
                    "border-color": "#4a4a4a"
                };

            };


            $scope.getFamily = function () {

                var familyId = "123";
                FamilyService.setFamilyId(familyId);

                $location.path('/donate/familydonation');

            };


            $scope.products
                = [{
                id: '123',
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
                id: '345',
                name: 'Dave Family',
                description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
                shine: 9,
                price: "chattanooga",
                rarity: 6,
                color: '#EEE',
                faces: 12,
                images: [
                    "images/john.jpg"
                ]
            }, {
                id: '989',
                name: 'kelly Family',
                description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
                shine: 70,
                price: "Nashville",
                rarity: 2,
                color: '#000',
                faces: 6,
                images: [
                    "images/john.jpg"
                ]
            }];


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



