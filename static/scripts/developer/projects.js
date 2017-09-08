$("#projects .project .preview img").click(function () {
    // If visitor clicks on preview image, scale to fullscreen, show cover behind image, and lock scrolling.
    // If visitor clicks fullscreen preview image, revert to normal size, hide cover, and unlock scrolling.

    $(this).toggleClass("scale")
    $("#cover").toggleClass("active")
    $("body").toggleClass("locked")
})

$("#cover").click(function () {
    // If visitor clicks cover behind fullscreen preview image, revert to normal size, hide cover, and unlock scrolling.

    $("#projects .project .preview img").removeClass("scale")
    $("#cover").removeClass("active")
    $("body").removeClass("locked")
})

function logoscroll () {

    var startfade   =   $("#splash img").offset().top - 10
    var endfade     =   startfade + $("#splash").height()
    var faderange   =   endfade - startfade

    var percent     =   (endfade - viewporttop) / faderange //  x if fading out.

    if (viewporttop >= startfade) {

        //  If top of viewport is past [10% of the viewport height], fade out logo.
        $("#splash").css({
            "opacity"   :   percent
        })

    } else {

        $("#splash").css({
            "opacity"   :   "1"
        })

    }

}

function colorizescroll () {

    var startfade   =   viewportheight * 0.00
    var endfade     =   viewportheight * 0.20
    var faderange   =   endfade - startfade

    var percent     =   (endfade - viewporttop) / faderange //  x if fading out.

    if (viewporttop >= startfade) {

        //  If top of viewport is past [0 pixels], colorize icons.
        $("#languages img, #tools img").css({
            "filter"        :   'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
            "filter"        :   "gray",
            "-webkit-filter":   "grayscale(" + percent + ")"
        })

    } else {

        $("#languages img, #tools img").css({
            "filter"        :   "none",
            "-webkit-filter":   "grayscale(0%)"
        })

    }

}

function languagescroll () {

    var startfade   =   $("#languages").offset().top - 10
    var endfade     =   startfade + $("#languages").height() - 10
    var faderange   =   endfade - startfade

    var percent     =   (endfade - viewporttop) / faderange //  x if fading out.

    if (viewporttop >= startfade && viewporttop < endfade) {

        //  If top of viewport is past [the distance from the languages list to the top], fade out logo.
        $("#languages").css({
            "opacity"   :   percent
        })

    } else if (viewporttop >= endfade) {

        $("#languages").css({
            "opacity"   :   "0"
        })

    } else {

        $("#languages").css({
            "opacity"   :   "1"
        })

    }

}

function toolscroll () {

    var startfade   =   $("#tools").offset().top - 10
    var endfade     =   startfade + $("#tools").height() - 10
    var faderange   =   endfade - startfade

    var percent     =   (endfade - viewporttop) / faderange //  x if fading out.

    if (viewporttop >= startfade && viewporttop < endfade) {

        //  If top of viewport is past [the distance from the tools list to the top], fade out logo.
        $("#tools").css({
            "opacity"   :   percent
        })

    } else if (viewporttop >= endfade) {

        $("#tools").css({
            "opacity"   :   "0"
        })

    } else {

        $("#tools").css({
            "opacity"   :   "1"
        })

    }

}

function projectscroll () {

    var startfade   =   $("#separator").offset().top + ($("#separator").outerHeight() - $("#separator").height()) / 2 + 20
    var endfade     =   startfade + $("#separator").outerHeight() + $("#projects").height() * 0.25

    var faderange   =   endfade - startfade

    var percent     =   1 - (endfade - viewportbottom) / faderange //   1 - x if fading in.

    if (viewportbottom >= startfade && viewportbottom < endfade) {

        //  If bottom of viewport is between [60% and 25% of the viewport before the end], fade in "... is limitless".
        $("#separator, #projects").css({
            "opacity"   :   percent
        })

    } else if (viewportbottom >= endfade) {

        //  If bottom of viewport is past [25% of the viewport before the end], fully fade in "... is limitless".
        $("#separator, #projects").css({
            "opacity"   :   1
        })

    } else {

        $("#separator, #projects").css({
            "opacity"   :   0
        })

    }

}

$(window).scroll(function () {

    //  The height of the viewport.
    viewportheight  =   window.innerHeight;

    //  The distance from the top of the viewport to the top of the document.
    viewporttop     =   $(document).scrollTop()

    //  The distance from the bottom of the viewport to the top of the doucment.
    viewportbottom  =   viewporttop + viewportheight

    logoscroll ()
    colorizescroll ()
    languagescroll ()
    toolscroll ()
    projectscroll ()

})
