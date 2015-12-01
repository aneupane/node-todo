angular.module('app')
    .controller('LoginController', ['$scope', '$modalInstance', '$http', '$location'
        , 'FamilyService', 'UserAuthorizationService',

        function ($scope, $modalInstance, $http, $location
        , FamilyService, UserAuthorizationService) {

            $scope.form = {};


            $scope.ok = function () {
                $modalInstance.close();
            };



            $scope.validatelogin = function () {


                var data = JSON.stringify({
                    username: $scope.form.username ,
                    password: $scope.form.password
                });

                 $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/userauth/validate", data)
                    .success(function (data, status) {

                        if( data.status === 'Success'){

                            UserAuthorizationService.setRole(data.role);
                            UserAuthorizationService.setUserName(data.username);

                            alert('successfully logged in ');
                            $modalInstance.close();

                        }else{

                            alert('login failed ');
                            $modalInstance.close();
                        }
                    })

            }


            $scope.$on('$routeChangeSuccess', function (e, current, previous) {
                $scope.currentRoute = current;
            });

            var init = function () {
            };

            init();

        }]);





