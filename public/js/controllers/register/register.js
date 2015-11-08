/* Controllers */

angular.module('register')
    .controller('RegisterDonarController' ,['$scope', '$location', function ( $scope, $location) {

        var init = function () {
        };

        init();

    }]);


angular.module('register')
    .controller('RegisterFamilyController', ['$scope','$location', 'FamilyService',

        function ($scope, $location , FamilyService) {
            $scope.register = register;

            function register() {
                var familyId={FamilyId : 12};
                FamilyService.setFamilyId(familyId);

                $location.path('/donate/familydonation');
            }
            var init = function () {
            };

            init();

        }]);


/*
$location.path('/builder/workouts/' + workout.name);*/
