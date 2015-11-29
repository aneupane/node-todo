
angular.module('donate')
    .controller('RegisterDonarController',  ['$http' , '$scope', '$location','FamilyService','UserAuthorizationService',


        function ($http ,$scope , $location , FamilyService , UserAuthorizationService) {

            var myForm={};









            $scope.submitDonar= function () {

              /*  var data = JSON.stringify({
                    userName: $scope.myForm.username,
                    passWord: $scope.myForm.password,
                    role : 'donar'
                });

                $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/register", data)
                    .success(function (data, status) {

                    });*/


                $location.path('/register/donar/conformation');
            }


            var init = function () {
            };

            init();

        }]);



