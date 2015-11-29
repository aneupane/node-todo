angular.module('app')
    .controller('FaqController', ['$scope','$modal', '$location', 'FamilyService',
        'UserAuthorizationService','LoginStatusService',

        function ($scope,$modal, $location, FamilyService, UserAuthorizationService, LoginStatusService) {




            $scope.$on('$routeChangeSuccess', function (e, current, previous) {
                $scope.currentRoute = current;
            });

        }]);



