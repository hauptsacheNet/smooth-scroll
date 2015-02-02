(function ($) {
    "use strict";

    var $document = $(document);
    var $scrollElements = $('html, body');

    $document.on('click.smooth-scroll', 'a[href*="#"]:not([target])', function (e) {
        var linkElement = this;

        if (e.isDefaultPrevented()) {
            return;
        }

        // don't do anything if this link does not point at this page
        if (location.origin !== linkElement.origin || location.pathname !== linkElement.pathname) {
            return;
        }

        // find the target element
        var hash = linkElement.hash.replace(/^#/, '');
        var $target = $('#' + hash);

        var changeHash = function () {
            location.hash = linkElement.hash;
        };

        var scrollPosition = $target.offset() || {left: 0, top: 0};
        $scrollElements.animate({
            scrollLeft: scrollPosition.left,
            scrollTop: scrollPosition.top
        }, changeHash);

        e.preventDefault();
    });

})(jQuery);