//  There are three primary elements on the page that involve Javascript.
//      1) #splash, which contains the large logo at the top of the page.
//      2) #headline, which contains the rotating sentence "... is limitless".
//      3) #introduction, which contains a brief paragraph introducing the designer.

//  There are two primary types of function used to manipulate these elements.
//      1) position{element} () functions, like positionintroduction (). These position elements.
//      2) scroll{element} () functions, like scrollintroduction (). These fade elements in and out and rotate words on scroll.

function positionlogo () {
    //  Vertically and horizontally centers logo, then fades in.
    $("#splash img").css({
        "top"           :   $("#splash").outerHeight() / 2 - $("#splash img").outerHeight() / 2,
        "left"          :   $("#splash").outerWidth() / 2 - $("#splash img").outerWidth() / 2,
        "opacity"       :   1
    })
}


function positionintroduction () {
    //  Vertically and horizontally centers designer introduction.
    $("#introduction .container").css({
        "top"           :   $("#introduction").outerHeight() / 2 - $("#introduction .container").outerHeight() / 2,
        "left"          :   $("#introduction").outerWidth() / 2 - $("#introduction .container").outerWidth() / 2,
        "opacity"       :   1
    })
}

function positionheadline () {
    //  Vertically centers "... is limitless" between the bottom of the logo and the top of the introduction.

    var top     =   $("#splash").outerHeight() / 2 - $("#splash img").outerHeight() / 2
    var bottom  =   $("#introduction").outerHeight() / 2 - $("#introduction .container").outerHeight() / 2

    if (top < bottom) {
        $("#headline").css({
            "margin-top"    :   bottom - top
        })
    } else {
        $("#headline").css({
            "margin-bottom" :   top - bottom
        })
    }
}

$(document).ready(function () {
    viewportheight  =   window.innerHeight;

    positionlogo ()
    positionintroduction ()
    positionheadline ()
})

$(window).resize(function () {
    viewportheight  =   window.innerHeight;
    
    positionlogo ()
    positionintroduction ()
    positionheadline ()
})

function logoscroll () {

    var startfade   =   $("#splash img").offset().top - 10
    var endfade     =   startfade + $("#splash img").height()
    var faderange   =   endfade - startfade

    var percent     =   (endfade - viewporttop) / faderange //  x if fading out.

    if (viewporttop >= startfade) {

        //  If top of viewport is past [25% of the viewport height], fade out logo.
        $("#splash").css({
            "opacity"   :   percent
        })

    } else {

        $("#splash").css({
            "opacity"   :   "1"
        })

    }

    if (viewporttop > 0) {

        //  If top of viewport is past [0 pixels from the top of the document], fade out "Keep Scrolling" prompt.
        $("#prompt").css({
            "opacity"   :   "0"
        })

    } else {

        $("#prompt").css({
            "opacity"   :   "1"
        })

    }

}

function headlinescroll () {
    var startfade   =   $("#headline").offset().top + 10
    var endfade     =   startfade + $("#headline").height()
    var faderange   =   endfade - startfade

    var percent     =   1 - (endfade - viewportbottom) / faderange //   1 - x if fading in.

    if (viewportbottom >= startfade && viewportbottom < endfade) {

        //  If bottom of viewport is between [1.10 and 1.20 times the viewport], fade in "... is limitless".
        $("#headline").css({
            "opacity"   :   percent
        })

    } else if (viewportbottom >= endfade) {

        //  If bottom of viewport is past [1.20 times the viewport], fully fade in "... is limitless".
        $("#headline").css({
            "opacity"   :   1
        })

    } else {

        $("#headline").css({
            "opacity"   :   0
        })

    }
}

function introductionscroll () {

    var startfade   =   $("#introduction .container").offset().top + 10
    var endfade     =   startfade + $("#introduction .container").height()

    var faderange   =   endfade - startfade

    var percent     =   1 - (endfade - viewportbottom) / faderange //   1 - x if fading in.

    if (viewportbottom >= startfade && viewportbottom < endfade) {

        //  If bottom of viewport is between [60% and 25% of the viewport before the end], fade in "... is limitless".
        $("#introduction").css({
            "opacity"   :   percent
        })

    } else if (viewportbottom >= endfade) {

        //  If bottom of viewport is past [25% of the viewport before the end], fully fade in "... is limitless".
        $("#introduction").css({
            "opacity"   :   1
        })

    } else {

        $("#introduction").css({
            "opacity"   :   0
        })

    }

}

function rotatewords () {
    var startrotate =   $("#headline").offset().top + 10
    var endrotate   =   null

    var first       =   startrotate + viewportheight * 0.40 //  "the web is limitless" to "code..."
    var second      =   startrotate + viewportheight * 0.40 + viewportheight * 0.40 //  "code is limitless" to "design..."

    if (viewportbottom < first) {

        //  span:nth-child(1)....."the web" [is limitless]
        //  span:nth-child(2)....."code" [is limitless]
        //  span:nth-child(3)....."design" [is limitless]

        //  No negative upper margins
        //  Showing "the web is limitless."
        $("#rotate span:nth-child(1)").css({
            "margin-top":   0
        })
        $("#rotate span:nth-child(2)").css({
            "margin-top":   0
        })

    } else if (viewportbottom >= first && viewportbottom < second) {

        //  One negative upper margin on first span, pulling "the web" out and "code" in
        //  Showing "code is limitless."
        $("#rotate span:nth-child(1)").css({
            "margin-top":   -109
        })
        $("#rotate span:nth-child(2)").css({
            "margin-top":   0
        })

    } else if (viewportbottom >= second) {

        //  Two negative upper margins on first and second spans, pulling "the web" and "code" out and "design" in.
        //  Showing "design is limitless"
        $("#rotate span:nth-child(1)").css({
            "margin-top":   -109
        })
        $("#rotate span:nth-child(2)").css({
            "margin-top":   -109
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
    headlinescroll ()
    introductionscroll ()
    rotatewords ()

})
