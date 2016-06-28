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

            if (this.exists('#owl-demo')){
                hero.init($('#owl-demo'));
            }

            if( this.exists('.checkout-close')){
                close.init($('.checkout-close'));
            }

            if( this.exists('.ini')){
                open.init($('.ini'));
            }

        }

    } || {};

(function ($, window, undefined) {
    'use strict';

    $(document).ready(function () {
        makelove.init();
    });

})(jQuery, this);