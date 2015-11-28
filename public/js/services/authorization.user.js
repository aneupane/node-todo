'use strict';

/* Services */

/* anonomous , admin , donar , family */

angular.module('app')
    .factory('UserAuthorizationService', function () {
        var role = {role: 'normal' , username : '' };

        return {
            getRole: function () {
                return role.role;
            },
            setRole: function (id) {
                role.role = id;
            },
            getUserName: function () {
                return role.username;
            },
            setUserName: function (id) {
                role.username = id;
            }

        };
    });
