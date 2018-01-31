/*
* jquery-backgroundMove master by sameera liyanage
* License MIT
$('element').backgroundMove();
*/
(function ($) {
    $.fn.backgroundMove = function (options) {
        var defaults = {
                movementStrength: '50'
            },
            options = $.extend(defaults, options);

        var $this = $(this);

        var movementStrength = options.movementStrength;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        $this.mousemove(function (e) {
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -0.5 - 25;
            var newvalueY = height * pageY * -0.3 - 10;
            $this.css("background-position", newvalueX + "px     " + newvalueY + "px");
        });

    }
})(jQuery);