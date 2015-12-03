'use strict';

/* Services */

angular.module('app')
    .factory('GiftService', function () {

        var gifts = { item : [] };

        return {
            getGifts: function () {
                return gifts.item;
            },setGifts: function (id) {
                 gifts.item =id;
            },
            addGifts: function (gift) {

                angular.forEach(gift, function (g) {
                    gifts.item.push(g.name);
                });
            }
        };
    });
