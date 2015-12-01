'use strict';

angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngMessages', 'register', 'login', 'donate', 'todoController']).
config(function ($routeProvider, $sceDelegateProvider) {


    $routeProvider.when('/Home',
        {
            templateUrl: 'view/landing/home.html',
            topNav: 'view/header/header.html',
            controller: 'HomeController'
        });




    $routeProvider.when('/ProfileFamily',
        {
            templateUrl: 'view/profile/family-profile.html',
            topNav: 'view/header/header.html',
            controller: 'FamilyProfileController'
        });

    $routeProvider.when('/ProfileDonar',
        {
            templateUrl: 'view/profile/donar-profile.html',
            topNav: 'view/header/header.html',
            controller: 'DonarProfileController'
        });


    $routeProvider.when('/Faq',
        {
            templateUrl: 'view/landing/faq.html',
            topNav: 'view/header/header.html',
            controller: 'FaqController'
        });



    $routeProvider.when('/Donate',
        {
            topNav: 'view/header/header.html',
            templateUrl: 'view/landing/donate.html',
            controller: 'StoreController'
        });

    $routeProvider.when('/Admin', {
        templateUrl: 'view/landing/admin.html',
        topNav: 'view/header/header.html',
        controller: 'AdminController'
    });

    $routeProvider.when('/Contact', {
        templateUrl: 'view/landing/contact.html',
        topNav: 'view/header/header.html',
        controller: 'ContactUsController'
    });

    $routeProvider.when('/AboutUs', {
        templateUrl: 'view/landing/aboutus.html',
        topNav: 'view/header/header.html',
        controller: 'AboutUsController'
    });

    $routeProvider.when('/Register', {
        templateUrl: 'view/landing/register.html',
        topNav: 'view/header/header.html',
        controller: 'RegisterController'
    });


    $routeProvider.when('/register/family', {
        topNav: 'view/header/header.html',
        templateUrl: 'view/register/family.html',
        controller: 'RegisterFamilyController'
    });

    $routeProvider.when('/register/conformation', {
        templateUrl: 'view/register/conformation.html'
    });


    $routeProvider.when('/register/donar', {
        topNav: 'view/header/header.html',
        templateUrl: 'view/register/donar.html',
        controller: 'RegisterDonarController'
    });

    $routeProvider.when('/register/donar/conformation', {
        topNav: 'view/header/header.html',
        templateUrl: 'view/register/conformation.html',
        controller: 'RegisterDonarConformationController'
    });

    $routeProvider.when('/register/family/conformation', {
        topNav: 'view/header/header.html',
        templateUrl: 'view/register/family-conform.html',
        controller: 'RegisterFamilyConformationController'
    });

    $routeProvider.when('/donate/familydonation', {
        topNav: 'view/header/header.html',
        templateUrl: 'view/donate/family-wishlist.html',
        controller: 'DonateController'
    });

    $routeProvider.when('/donate/conformation', {
        topNav: 'view/header/header.html',
        templateUrl: 'view/donate/donate-conformation.html',
        controller: 'SubmitDonateController'
    });

    $routeProvider.when('/contact/contact-conformation', {
        templateUrl: 'view/contact/contact-conformation.html',
        topNav: 'view/header/header.html',
        controller: 'ContactSubmitController'
    });

    $routeProvider.otherwise({redirectTo: '/Home'});

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://!*.youtube.com/!**']);
});


angular.module('register', []);
angular.module('login', []);
angular.module('donate', []);
angular.module('todoController', []);
