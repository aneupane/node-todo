'use strict';

/* Services */

/* anonomous , admin , donar , family */

angular.module('app')
    .factory('LoginStatusService', function () {
        var loginText = {text: 'Log In' };

        return {
            getLoginText: function () {
                return loginText.text;
            },
            setLoginText: function (id) {
                loginText.text = id;
            }
        };
    });
