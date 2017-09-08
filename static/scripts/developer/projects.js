$("#projects .project .preview img").click(function () {
    $(this).toggleClass("scale")
    $("#cover").toggleClass("active")
    $("body").toggleClass("locked")
})
$("#cover").click(function () {
    $("#projects .project .preview img").removeClass("scale")
    $("#cover").removeClass("active")
    $("body").removeClass("locked")
})

$(window).scroll(function () {
    var position = $(document).scrollTop()
    var viewport = window.innerHeight;
    var bottommost = position + viewport

    var start = $("#projects").offset().top

    if (position == 0) {
        $("#languages img, #tools img").css({
            "filter": 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
            "filter": "gray",
            "-webkit-filter": "grayscale(100%)"
        })
    } else if (position > 0 && position <= viewport * 0.2) {
        percent = 1 - (position / (viewport * 0.2))
        console.log(percent)

        $("#languages img, #tools img").css({
            "filter": 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
            "filter": "gray",
            "-webkit-filter": "grayscale(" + percent + ")"
        })
    } else if (position > viewport * 0.2) {
        $("#languages img, #tools img").css({
            "filter": "none",
            "-webkit-filter": "grayscale(0%)"
        })
    }

    if (bottommost < 1.2 * start) {
        $("#projects").css({
            "opacity"   :   "0"
        })
    } else if (bottommost >= 1.2 * start && bottommost < 1.4 * start) {
        var range = start * 1.4 - start * 1.2
        var now = bottommost - start * 1.2
        var percent = now / range

        $("#projects").css({
            "opacity"   :   percent
        })
    } else if (bottommost >= 1.4 * start) {
        $("#projects").css({
            "opacity"   :   "1"
        })
    }
})
