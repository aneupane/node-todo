'use strict';

/* Services */

angular.module('app')
    .factory('FamilyService', function () {
        var data =
        {
            FamilyId: ''
        };

        return {
            getFamilyId: function () {
                return data.FamilyId;
            },
            setFamilyId: function (id) {
                data.FamilyId = id;
            }
        };
    });
