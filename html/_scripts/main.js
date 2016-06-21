var makelove = {

        debug: false,

        endpoint: null,

        log: function (what) {
            if (makelove.debug) {
                console.log(what);
            }
        },

        exists: function (el) {
            if ($(el).length > 0) {
                return true;
            }
        }, 

        init: function () {

            // this.agegate.init();

        }

    } || {};

(function ($, window, undefined) {
    'use strict';

    $(document).ready(function () {
        makelove.init();

        var owl = $("#owl-demo");

        owl.owlCarousel({
            navigation : true,
            singleItem : true,
            navigationText : false,
            mouseDrag :  false,
            autoPlay :   3000,
            stopOnHover : true,
            transitionStyle : "goDown"
        });
    });

})(jQuery, this);