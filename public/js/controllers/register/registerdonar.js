
angular.module('donate')
    .controller('RegisterDonarController',  ['$http' , '$scope', '$location','FamilyService','UserAuthorizationService',


        function ($http ,$scope , $location , FamilyService , UserAuthorizationService) {

            var myForm={};


            $scope.submitDonar= function () {

                var data = JSON.stringify({
                    username: $scope.myForm.username,
                    password: $scope.myForm.password,
                    name: $scope.myForm.name,
                    street: $scope.myForm.street,
                    city: $scope.myForm.city,
                    zipcode: $scope.myForm.zipcode,
                    phoneno: $scope.myForm.phoneno,
                    emailaddress: $scope.myForm.emailaddress,
                    profilepicture: $scope.myForm.donar.picture.name,
                    role : 'donar'
                });


                $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/register/donar", data)
                    .success(function (data, status) {

                    });
                
                $location.path('/register/donar/conformation');
            }


            var init = function () {
            };

            init();

        }]);



