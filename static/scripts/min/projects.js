function logoscroll(){var o=$("#splash img").offset().top-10,t=o+$("#splash").height(),e=t-o,s=(t-viewporttop)/e;viewporttop>=o?$("#splash").css({opacity:s}):$("#splash").css({opacity:"1"})}function colorizescroll(){var o=0*viewportheight,t=.15*viewportheight,e=t-o,s=(t-viewporttop)/e;viewporttop>=o?$("#languages img, #tools img").css({filter:"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale\")",filter:"gray","-webkit-filter":"grayscale("+s+")"}):$("#languages img, #tools img").css({filter:"none","-webkit-filter":"grayscale(0%)"})}function languagescroll(){var o=$("#languages").offset().top-10,t=o+$("#languages").height()-10,e=t-o,s=(t-viewporttop)/e;viewporttop>=o&&viewporttop<t?$("#languages").css({opacity:s}):viewporttop>=t?$("#languages").css({opacity:"0"}):$("#languages").css({opacity:"1"})}function toolscroll(){var o=$("#tools").offset().top-10,t=o+$("#tools").height()-10,e=t-o,s=(t-viewporttop)/e;viewporttop>=o&&viewporttop<t?$("#tools").css({opacity:s}):viewporttop>=t?$("#tools").css({opacity:"0"}):$("#tools").css({opacity:"1"})}function projectscroll(){var o=$("#separator").offset().top+($("#separator").outerHeight()-$("#separator").height())/2+20,t=o+$("#separator").outerHeight()+.25*$("#projects").height(),e=t-o,s=1-(t-viewportbottom)/e;viewportbottom>=o&&viewportbottom<t?$("#separator, #projects").css({opacity:s}):viewportbottom>=t?$("#separator, #projects").css({opacity:1}):$("#separator, #projects").css({opacity:0})}$("#projects .project .preview img").click(function(){$(this).toggleClass("scale"),$("#cover").toggleClass("active"),$("body").toggleClass("locked")}),$("#cover").click(function(){$("#projects .project .preview img").removeClass("scale"),$("#cover").removeClass("active"),$("body").removeClass("locked")}),$(window).scroll(function(){viewportheight=window.innerHeight,viewporttop=$(document).scrollTop(),viewportbottom=viewporttop+viewportheight,logoscroll(),colorizescroll(),languagescroll(),toolscroll(),projectscroll()});