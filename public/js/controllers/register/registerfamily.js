
angular.module('donate')
    .controller('RegisterFamilyController',  ['$scope', '$location','FamilyService','UserAuthorizationService',


        function ($scope , $location , FamilyService , UserAuthorizationService) {

            var myForm={};

            $scope.submitDonar= function () {
                $scope.donarName = $scope.myForm.donar.name;

                $location.path('/register/donar/conformation');
            }


            var init = function () {
            };

            init();

        }]);



