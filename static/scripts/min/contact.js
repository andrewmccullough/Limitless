function email(){window.location.href="mailto:contact@limitlessdesign.io"}function positionpage(){var t=$("#splash").outerHeight(!0)+$("#splash").offset().top,i=$("body > .container").height();console.log(viewportheight-t),viewportheight-t>i?$("body > .container").css({opacity:1,top:(viewportheight+t-50)/2-i/2}):$("body > .container").css({opacity:1,top:$("#splash").outerHeight(!0)+$("#splash").offset().top})}function rotatewords(){function t(){0===i?($("#rotate span:nth-child(1)").css({"margin-top":0}),$("#rotate span:nth-child(2)").css({"margin-top":0}),i++):1===i?($("#rotate span:nth-child(1)").css({"margin-top":-109}),$("#rotate span:nth-child(2)").css({"margin-top":0}),i++):2===i&&($("#rotate span:nth-child(1)").css({"margin-top":-109}),$("#rotate span:nth-child(2)").css({"margin-top":-109}),i=0,j<12&&j++),setTimeout(function(){t()},3e3+1e3*j)}i=0,j=0,t()}$("#email").click(function(){email()}),$(document).ready(function(){viewportheight=window.innerHeight,positionpage(),rotatewords()}),$(window).resize(function(){viewportheight=window.innerHeight,positionpage()});