(function ($) {
    "use strict";

    var $document = $(document);
    var $scrollElements = $('html, body');

    $document.on('click.smooth-scroll', 'a[href*="#"]:not([target])', function (e) {
        var target = e.target;

        // don't do anything if this link does not point at this page
        if (location.origin !== target.origin || location.pathname !== target.pathname) {
            return false;
        }

        // find the target element
        var hash = target.hash.replace(/^#/, '');
        var $target = $('#' + hash);

        var changeHash = function () {
            location.hash = target.hash;
        };

        var scrollPosition = $target.offset() || {left: 0, top: 0};
        $scrollElements.animate({
            scrollLeft: scrollPosition.left,
            scrollTop: scrollPosition.top
        }, changeHash);

        e.preventDefault();
    });

})(jQuery);