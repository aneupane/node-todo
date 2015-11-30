'use strict';

/* Services */

angular.module('app')
    .factory('GiftService', function () {

        var gifts = { item : [] };

        return {
            getGifts: function () {
                return gifts.item;
            },
            addGifts: function (gift) {

                angular.forEach(gift, function (g) {
                    gifts.item.push(g.name);
                });
            }
        };
    });
