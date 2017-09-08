function email () {
    window.location.href = "mailto:contact@limitlessdesign.io";
}

$("#email").click(function () {
    //  If user clicks "Send me an email"
    email ()
})

function positionpage () {
    //  Horizontally and vertically centers container on load (logo, rotating headline, and button).
    //  If viewport is smaller than the container (mobile device), simply adds padding at the top.
    var containerheight =   $("body > .container").outerHeight()
    if (viewportheight - 80 > containerheight) {
        $("body > .container").css({
            "top"       :   viewportheight / 2 - containerheight / 2,
            "opacity"   :   1
        })
    } else {
        $("body > .container").css({
            "top"       :   50,
            "opacity"   :   1
        })
    }
}

function rotatewords () {
    //  Function triggered on load to repeatedly rotate words.
    i = 0 //  Which word to render. Resets after 2 [0 - 2].
    j = 0 //  How many cycles. Used to slow the rate of rotation.

    mechanics ()
    //  Actually rotates the words.
    function mechanics () {
        if (i === 0) {
            //  Renders first phrase, "...a question?"

            $("#rotate span:nth-child(1)").css({
                "margin-top":   0
            })
            $("#rotate span:nth-child(2)").css({
                "margin-top":   0
            })

            i ++

        } else if (i === 1) {
            //  Renders the second phrase, "...a project?"

            $("#rotate span:nth-child(1)").css({
                "margin-top":   -109
            })
            $("#rotate span:nth-child(2)").css({
                "margin-top":   0
            })

            i ++

        } else if (i === 2) {
            //  Renders the third phrase, "...an idea?"

            $("#rotate span:nth-child(1)").css({
                "margin-top":   -109
            })
            $("#rotate span:nth-child(2)").css({
                "margin-top":   -109
            })

            i = 0   //  Resets word counter.
            if (j < 12) {
                j ++    // Iterates cycle counter unless 12 or greater (capping rotation interval at 15 seconds total).
            }
        }
        setTimeout(function () {
            // Rotates again in 3 seconds + j seconds (completed cycles).
            mechanics ()
        }, 3000 + j * 1000)
    }
}

$(document).ready(function () {
    viewportheight  =   window.innerHeight;

    positionpage ()
    rotatewords ()
})

$(window).resize(function () {
    viewportheight  =   window.innerHeight;

    positionpage ()
})
