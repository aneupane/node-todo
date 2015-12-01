
angular.module('donate')
    .controller('RegisterFamilyController',  ['$http' ,'$scope', '$modal' ,'$location','FamilyService','UserAuthorizationService',


        function ( $http ,$scope ,$modal, $location , FamilyService , UserAuthorizationService) {


            var logintext= $scope.logintext;

            if(logintext !== 'Log Out'){
                $scope.logintext = 'Log In';
            }

            $scope.getUserRole= function () {
                var userRole = UserAuthorizationService.getRole();
                return userRole;
            };

            $scope.getWelcomeText = function(){
                var user = UserAuthorizationService.getUserName();

                if( user !== '' && user !== 'normal'){
                    $scope.welcometext = 'welcome ' + user +'!!!';
                    return true;
                }
                return false;
            };


            $scope.loginShow = function () {

                if($scope.logintext === 'Log Out'){
                    $scope.logintext = 'Log In';
                    LoginStatusService.setLoginText('Log In');
                    $scope.welcometext ='';
                    UserAuthorizationService.setRole('normal');
                    UserAuthorizationService.setUserName('normal');
                    alert('you are being logged out from the system');
                    return true;
                } else{
                    $scope.logintext = 'Log Out';
                    LoginStatusService.setLoginText('Log Out');
                    var dailog = $modal.open({
                        templateUrl: 'view/login/login.view.html',
                        controller: 'LoginController'
                    });
                }
            };


            var displayIndex= 0;

            $scope.displayIndex = displayIndex;

            $scope.getNext= function(){
                displayIndex = $scope.displayIndex;
                displayIndex++;
                $scope.displayIndex=displayIndex;

            };

            $scope.getdisplayIndex= function(){
                var indexPost= $scope.displayIndex;
                return indexPost;
            }

            $scope.loginShow = function () {

                if($scope.logintext === 'Log Out'){
                    $scope.logintext = 'Log In';
                    $scope.welcometext ='';
                    UserAuthorizationService.setRole('normal');
                    UserAuthorizationService.setUserName('normal');
                    alert('you are being logged out from the system');
                    return true;
                } else{
                    $scope.logintext = 'Log Out';
                    var dailog = $modal.open({
                        templateUrl: 'view/login/login.view.html',
                        controller: 'LoginController'
                    });
                }
            };




            var myForm={};

            $scope.submitFamily= function () {

                var childimage_0 ={};
                try{
                    childimage_0 = $scope.myForm.family.child0.name;
                }catch(err){
                    childimage_0 ='';
                }

                var childimage_1 ={};
                try{
                    childimage_1 = $scope.myForm.family.child1.name;
                }catch(err){
                    childimage_1 ='';
                }


                var childimage_2 ={};
                try{
                    childimage_2 = $scope.myForm.family.child2.name;
                }catch(err){
                    childimage_2 ='';
                }

                var wishlist1image_0 ={};
                try{
                    wishlist1image_0 = $scope.myForm.family.wishlist1_0.name;
                }catch(err){
                    wishlist1image_0 ='';
                }

                var wishlist2image_0 ={};
                try{
                    wishlist2image_0 = $scope.myForm.family.wishlist2_0.name;
                }catch(err){
                    wishlist2image_0 ='';
                }

                var wishlist3image_0 ={};
                try{
                    wishlist3image_0 = $scope.myForm.family.wishlist3_0.name;
                }catch(err){
                    wishlist3image_0 ='';
                }


                var wishlist1image_1 ={};
                try{
                    wishlist1image_1 = $scope.myForm.family.wishlist1_1.name;
                }catch(err){
                    wishlist1image_1 ='';
                }

                var wishlist2image_1 ={};
                try{
                    wishlist2image_1 = $scope.myForm.family.wishlist2_1.name;
                }catch(err){
                    wishlist2image_1 ='';
                }

                var wishlist3image_1 ={};
                try{
                    wishlist3image_1 = $scope.myForm.family.wishlist3_1.name;
                }catch(err){
                    wishlist3image_1 ='';
                }


                var wishlist1image_2 ={};
                try{
                    wishlist1image_2 = $scope.myForm.family.wishlist1_2.name;
                }catch(err){
                    wishlist1image_2 ='';
                }


                var wishlist2image_2 ={};
                try{
                    wishlist2image_2 = $scope.myForm.family.wishlist2_2.name;
                }catch(err){
                    wishlist2image_2 ='';
                }



                var wishlist3image_2 ={};
                try{
                    wishlist3image_2 = $scope.myForm.family.wishlist3_2.name;
                }catch(err){
                    wishlist3image_2 ='';
                }


                var data = JSON.stringify({

                    username: $scope.myForm.username,
                    password: $scope.myForm.password,
                    name: $scope.myForm.name,
                    street: $scope.myForm.street,
                    city: $scope.myForm.city,
                    zipcode: $scope.myForm.zipcode,
                    phoneno: $scope.myForm.phoneno,
                    emailaddress: $scope.myForm.emailaddress,
                    noofchildren : $scope.data.singleSelect,
                    biography : $scope.message,
                    profilepicture : $scope.myForm.family.familypic.name,

                    childname_0 :$scope.myForm.childname_0,
                    childname_1 :$scope.myForm.childname_1,
                    childname_2 :$scope.myForm.childname_2,

                    childimage_0 :childimage_0,
                    childimage_1 :childimage_1,
                    childimage_2 :childimage_2,


                    wishlist1_0 : $scope.myForm.wishlist1_0,
                    wishlist2_0 : $scope.myForm.wishlist2_0,
                    wishlist3_0 : $scope.myForm.wishlist3_0,


                    wishlist1image_0 : wishlist1image_0,
                    wishlist2image_0 : wishlist2image_0,
                    wishlist3image_0 : wishlist3image_0,




                    wishlist1_1 : $scope.myForm.wishlist1_1,
                    wishlist2_1 : $scope.myForm.wishlist2_1,
                    wishlist3_1 : $scope.myForm.wishlist3_1,




                    wishlist1image_1 : wishlist1image_1,
                    wishlist2image_1 : wishlist2image_1,
                    wishlist3image_1 : wishlist3image_1,




                    wishlist1_2 : $scope.myForm.wishlist1_2,
                    wishlist2_2 : $scope.myForm.wishlist2_2,
                    wishlist3_2 : $scope.myForm.wishlist3_2,


                    wishlist1image_2 : wishlist1image_2,
                    wishlist2image_2 : wishlist1image_2,
                    wishlist3image_2 : wishlist1image_2,



                    role : 'family'
                });


                $http.post("http://localhost:8090/ksu-capstone-project-app/rest/userservice/register/family", data)
                    .success(function (data, status) {

                    });



                $location.path('/register/family/conformation');
            }


            var init = function () {
            };

            init();


            $scope.$on('$routeChangeSuccess', function (e, current, previous) {
                $scope.currentRoute = current;
            });

        }]);



