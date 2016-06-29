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
            closeCart.init($('.checkout-close'));
        }

        if( this.exists('.ini')){
            openCart.init($('.ini'));
        }

        if( this.exists('.verproj')){
            opencloseProj.init($('.verproj'));
        }

    }

} || {};

(function ($, window, undefined) {
    'use strict';

    $(document).ready(function () {
        makelove.init();
    });

})(jQuery, this);