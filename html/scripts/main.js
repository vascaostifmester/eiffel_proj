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
// var agegate = {


//     init: function () {

//         //......

//     }

    

// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL19zY3JpcHRzL21haW4uanMiLCIuLi9fc2NyaXB0cy9hZ2VnYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEI7QUFDQSxRQUFRLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNyQjtBQUNBLFFBQVEsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3ZCO0FBQ0EsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFlBQVksRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDakMsZ0JBQWdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ2xDLFlBQVksQ0FBQztBQUNiLFFBQVEsRUFBRTtBQUNWO0FBQ0EsUUFBUSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxnQkFBZ0IsTUFBTSxDQUFDLElBQUksQ0FBQztBQUM1QixZQUFZLENBQUM7QUFDYixRQUFRLEVBQUUsQ0FBQztBQUNYO0FBQ0EsUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0I7QUFDQSxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRztBQUNuQztBQUNBLFFBQVEsQ0FBQztBQUNUO0FBQ0EsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUc7QUFDWjtBQUNBLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO0FBQ2pCO0FBQ0EsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLFFBQVEsUUFBUSxDQUFDLElBQUksR0FBRztBQUN4QjtBQUNBLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHO0FBQ2pDO0FBQ0EsUUFBUSxHQUFHLENBQUMsV0FBVyxFQUFFO0FBQ3pCLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUIsWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM5QixZQUFZLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ25DLFlBQVksU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7QUFDL0IsWUFBWSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUM5QixZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQy9CLFlBQVksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN0QyxRQUFRLEdBQUc7QUFDWCxJQUFJLEdBQUc7QUFDUDtBQUNBLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxFO0FDN0NmLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCO0FBQ0E7QUFDQSxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFCO0FBQ0EsRUFBRSxTQUFTLFFBQVE7QUFDbkI7QUFDQSxFQUFFLEtBQUssQ0FBQztBQUNSO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFrZWxvdmUgPSB7XG5cbiAgICAgICAgZGVidWc6IGZhbHNlLFxuXG4gICAgICAgIGVuZHBvaW50OiBudWxsLFxuXG4gICAgICAgIGxvZzogZnVuY3Rpb24gKHdoYXQpIHtcbiAgICAgICAgICAgIGlmIChtYWtlbG92ZS5kZWJ1Zykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdoYXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGV4aXN0czogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBpZiAoJChlbCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBcblxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIHRoaXMuYWdlZ2F0ZS5pbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfSB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCB3aW5kb3csIHVuZGVmaW5lZCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFrZWxvdmUuaW5pdCgpO1xuXG4gICAgICAgIHZhciBvd2wgPSAkKFwiI293bC1kZW1vXCIpO1xuXG4gICAgICAgIG93bC5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uIDogdHJ1ZSxcbiAgICAgICAgICAgIHNpbmdsZUl0ZW0gOiB0cnVlLFxuICAgICAgICAgICAgbmF2aWdhdGlvblRleHQgOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNlRHJhZyA6ICBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9QbGF5IDogICAzMDAwLFxuICAgICAgICAgICAgc3RvcE9uSG92ZXIgOiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNpdGlvblN0eWxlIDogXCJnb0Rvd25cIlxuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoalF1ZXJ5LCB0aGlzKTsiLCIvLyB2YXIgYWdlZ2F0ZSA9IHtcblxuXG4vLyAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXG4vLyAgICAgICAgIC8vLi4uLi4uXG5cbi8vICAgICB9XG5cbiAgICBcblxuLy8gfTsiXX0=