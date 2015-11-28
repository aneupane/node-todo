angular.module('app')
    .controller('LoginController', ['$scope', '$modalInstance', '$http', '$location'
        , 'FamilyService', 'UserAuthorizationService',

        function ($scope, $modalInstance, $http, $location
        , FamilyService, UserAuthorizationService) {

            $scope.form = {};


            $scope.ok = function () {
                $modalInstance.close();
            };

            $scope.register = function () {
                $modalInstance.close();

                var dailog = $modal.open({
                    templateUrl: 'register/register.view.html',
                    controller: RegisterLoginController
                });
            }


            $scope.validatelogin = function () {

                if ($scope.form.username === 'admin' && $scope.form.password === 'admin') {


                    UserAuthorizationService.setRole("admin");
                    UserAuthorizationService.setUserName('admin');
                    alert('success');
                    $modalInstance.close();
                    return true;
                }



                if ($scope.form.username === 'donar' && $scope.form.password === 'donar') {


                    UserAuthorizationService.setRole("donar");
                    UserAuthorizationService.setUserName("donar");
                    alert('success');
                    $modalInstance.close();
                    return true;
                }



                if ($scope.form.username === 'normal' && $scope.form.password === 'normal') {


                    UserAuthorizationService.setRole("normal");
                    UserAuthorizationService.setUserName("normal");
                    alert('success');
                    $modalInstance.close();
                    return true;
                }


                if ($scope.form.username === 'family' && $scope.form.password === 'family') {


                    UserAuthorizationService.setRole("family");
                    UserAuthorizationService.setUserName("family");

                    alert('success');

                    $modalInstance.close();
                    return true;
                }




                var data = JSON.stringify({
                    userName: $scope.form.username
                    , passWord: $scope.form.password
                });

               /* $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/userauth", data)
                    .success(function (data, status) {
                        alert('successfully logged in ');
                        $modalInstance.close();
                    })*/

            }


            $scope.$on('$routeChangeSuccess', function (e, current, previous) {
                $scope.currentRoute = current;
            });

            var init = function () {
            };

            init();

        }]);





