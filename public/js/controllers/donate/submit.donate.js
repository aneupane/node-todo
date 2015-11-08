
angular.module('donate')
    .controller('SubmitDonateController',  ['$scope', '$location','FamilyService',

        function ($scope , $location , FamilyService) {


            $scope.submitDonate = function(){
                $scope.path('/donate/conformation');
            };


            var init = function () {
            };

            init();

        }]);



