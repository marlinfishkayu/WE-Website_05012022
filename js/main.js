(function() {
    $(".menu-btn").on("click", function() {
        $(".menu-btn").toggleClass("open");
        $(".sidebar").toggleClass("open");
        $(".game-show").removeClass("show");
    });
})();

/*---- Remove background when navbar on top ---*/
// Make sure they scroll more than delta
window.addEventListener("scroll", function() {
    var header = document.querySelector(".nav-wrap");

    header.classList.toggle("sticky", window.scrollY < 100);
});

/*--  Hide Header on on scroll down --*/

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".nav-item").outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $(".nav-item").removeClass("show").addClass("hidden");
        $(".menu-btn").removeClass("show").addClass("hidden");
        $(".nav-wrap").removeClass("nav-fixed");
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $(".nav-item").removeClass("hidden").addClass("show");
            $(".menu-btn").removeClass("hidden").addClass("show");
            $(".nav-wrap").addClass("nav-fixed");
        }
    }

    lastScrollTop = st;
}

/*-- hover menu area--*/
$(document).ready(function() {
    $(".nav-wrap").mouseover(function() {
        $(".nav-wrap").addClass("nav-fixed");
        return false;
    });
    $(".nav-wrap").mouseleave(function() {
        $(".nav-wrap").removeClass("nav-fixed");
    });
});

/*-- hover games menu --*/
$(document).ready(function() {
    $(".main-nav").mouseover(function() {
        $(".is_hover").removeClass("is_hover");
        $(".main-nav").addClass("is_hover");
        $(".nav-wrap").addClass("nav-fixed");
        $(".nav-wrap").removeClass("sticky");
        return false;
    });
    $(".main-nav").mouseleave(function() {
        $(".main-nav").removeClass("is_hover");
        $(".nav-wrap").removeClass("nav-fixed");
    });
});

//hover games menu bar

$("#gamesHover").hover(
    function() {
        $(".nav-wrap").removeClass("pointer");
        $(".game-menu").addClass("show");
        $(".nav-wrap").addClass("pointer");
    },
    function() {
        $(".game-menu").removeClass("show");
        $(".nav-wrap").removeClass("pointer");
    }
);
$(".game-icon-wrap").hover(
    function() {
        $(this).addClass("hover");
    },
    function() {
        $(this).removeClass("hover");
    }
);

/*-- side menu open sub menu --*/
$(".game-btn").click(function() {
    $(".game-show").toggleClass("show");
    $(".game-btn").toggleClass("rotate");
});
$(".livegame-btn").click(function() {
    $(this).closest(".game-item").children(".livegame-show").toggleClass("show");
    $(this).closest(".game-item").children(".livegame-btn").toggleClass("rotate");
});

/*-- side menu live games/ lotteries --*/
$(".tab-label").click(function() {
    // $(".tab-label").toggleClass("show");
    $(".tab-label").removeClass("show");
    $(this).addClass("show");
});

/*-- hover language menu arrow icon --*/

$(".language-tap").mouseover(function() {
    $(".language-tap").removeClass("active");
    $(this).addClass("active");
    return false;
});
$(".language-tap").mouseleave(function() {
    $(this).removeClass("active");
});


/*-- mobile side game menu add active --*/
$(".icon-lang").click(function() {
    $(".lang-dropdown").toggleClass("show");
    $(".nav-wrap").toggleClass("pointer");
    $(".nav-wrap").addClass("lang_hold");
    return false;
});

$(".icon-lang").click(function(event) {
    $("html").one("click", function() {
        $(".lang-dropdown").removeClass("show");
        $(".nav-wrap").removeClass("lang_hold");
        $(".nav-wrap").removeClass("pointer");
    });

    event.stopPropagation();
});
/*-- age language switch --*/
$(".age-restriction .icon-lang").click(function() {
    $(".main-nav .lang-dropdown").removeClass("show");
});



/*-- mobile side menu on scroll display gradient --*/

// var container1 = $('#tabContent1');
// // var container2 = $('#tabContent2');
// var tabsDirection = $('#tabsDirection');
// var initVal = container1.scrollLeft();
// var isScrolling = false;
// container1.scroll(function(e){
//     var curVal = container1.scrollLeft();
//     if (!isScrolling) {
//         $(window).one("mouseup", function(e){
//             isScrolling = false;
//         });
//     }    
//     if (curVal === initVal) return;
//     if (curVal > initVal) {
//         tabsDirection.removeClass("Scrolling-left");
//         tabsDirection.addClass("Scrolling-right");
        
//     } else {
//         tabsDirection.removeClass("Scrolling-right");
//         tabsDirection.addClass("Scrolling-left");
        
//     }
//     initVal = curVal;
//     isScrolling = true;
// });


// container2.scroll(function(e){
//     var curVal = container2.scrollLeft();
//     if (!isScrolling) {
//         $(window).one("mouseup", function(e){
//             isScrolling = false;
//         });
//     }    
//     if (curVal === initVal) return;
//     if (curVal > initVal) {
//         tabsDirection.removeClass("Scrolling-left");
//         tabsDirection.addClass("Scrolling-right");
        
//     } else {
//         tabsDirection.removeClass("Scrolling-right");
//         tabsDirection.addClass("Scrolling-left");
        
//     }
//     initVal = curVal;
//     isScrolling = true;
// });



/*-- hover index our games diamond --*/

$(".our-gamaes-column").mouseover(function() {
    $(".our-gamaes-column").removeClass("active");
    $(this).addClass("active");
    return false;
});
$(".our-gamaes-column").mouseleave(function() {
    $(this).removeClass("active");
});

// diamond slider effect
$(document).ready(function() {
    $(".diamond-item").hover(
        function() {
            $(this).addClass("hovering");
        },
        function() {
            $(this).removeClass("hovering");
        }
    );
});

//hide nav menu for search
$(document).ready(function() {
    $(".search").click(function() {
        $(".menu-item").addClass("hide-item");
        $("#searchForm").addClass("active");
        $(".closeBtn").addClass("active");
        $(".nav-wrap").addClass("search-black");
        $(".search-container").addClass("search-block");
    });
    $(".closeBtn").click(function() {
        $(".menu-item").removeClass("hide-item");
        $("#searchForm").removeClass("active");
        $(".closeBtn").removeClass("active");
        $(".nav-wrap").removeClass("search-black");
        $(".search-container").removeClass("search-block");
        $(".search-input").val("");
    });
});

//Hero carousal
$("#slider-area").owlCarousel({
    autoplay: true,
    nav: true,
    margin: 10,
    lazyLoad: true,
    touchDrag: true,
    mouseDrag: true,
    autoPlay: 8000,
    smartSpeed: 1000, // duration of change of 1 slide
    paginationSpeed: 700,
    loop: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});

//with page indicator carousal
$(".news-slider")
    .on("initialized.owl.carousel changed.owl.carousel", function(e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $(".pagedot-counter").text(carousel.relative(carousel.current()) + 1 + "/" + carousel.items().length);
    })
    .owlCarousel({
        center: true,
        loop: false,
        margin: 20,
        items: 2,
        responsive: {
            0: {
                items: 1,
                navigation: true,
                nav: true,
                slideBy: 1, // <!-- HERE
            },
            1400: {
                items: 2,
                navigation: true,
                nav: true,
                slideBy: 2, // <!-- HERE
            },
            2100: {
                items: 3,
                navigation: true,
                nav: true,
                slideBy: 3, // <!-- HERE
            },
        },
        scrollPerPage: true,
        navigation: true,
    });

/*--  Diamond carousal --*/

$("#diamondCarousel").on("initialized.owl.carousel changed.owl.carousel", function(e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $(".dia-pagedot-counter").text(carousel.relative(carousel.current()) + 1 + "/" + carousel.items().length);
    })
    .owlCarousel({
        center: false,
        items: 1,
        loop: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                center: true,
                items: 1,
                navigation: true,
                nav: true,
                slideBy: 1, // <!-- HERE
            },
            768: {
                items: 2,
                navigation: true,
                nav: true,
                slideBy: 2, // <!-- HERE
            },
            1025: {
                items: 3,
                navigation: true,
                nav: true,
                slideBy: 3, // <!-- HERE
            },
            1800: {
                items: 3,
                navigation: true,
                nav: true,
                slideBy: 3, // <!-- HERE
            },
        },
        scrollPerPage: true,
        navigation: true,
    });

/*--  live studio hover scale --*/

//This function will fire every time the user mouses off of the image. It resets the translation back to 0.
$(".img-hover").mouseout(function() {
    $(this).css("transform", "translate(0px,0px)");
});

$(".studio-card").hover(
    function() {
        $(this).addClass("hovering-slide");
    },
    function() {
        $(this).removeClass("hovering-slide");
    }
);

/*-- All Live Game popular game slider--*/
$("#popularCarousel").owlCarousel({
    loop: true,
    lazyLoad: true,
    nav: true,
    autoWidth: true,
    items: 1,
    nav: true,
    lazyLoadEager: 4,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: true,
            items: 1,
            navigation: true,
            nav: true,
            slideBy: 1, // <!-- HERE
        },
        768: {
            items: 1,
            navigation: true,
            nav: true,
            slideBy: 1, // <!-- HERE
        },
    },
    scrollPerPage: true,
    navigation: true,
});

/*-- All Live Game new release game slider--*/

$("#newReleaseCarousel").owlCarousel({
    loop: true,
    lazyLoad: true,
    // margin:10,
    nav: true,
    autoplay: false,
    autoWidth: true,
    items: 1,
    nav: true,
    lazyLoadEager: 4,
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: true,
            items: 1,
            navigation: true,
            nav: true,
            slideBy: 1, // <!-- HERE
        },
        768: {
            items: 3,
            navigation: true,
            autoWidth: true,
            nav: true,
            slideBy: 3, // <!-- HERE
        },
    },
    scrollPerPage: true,
    navigation: true,
});

/*-- Add class to popular-game-carousel slider when hover --*/
$(document).ready(function() {
    $(".pg-slide").hover(function() {
        $(this).toggleClass("hovering");
    });
});

/*-- Add class to about content list --*/
$(".about-list-wrap a").click(function() {
    $(".about-list-wrap a").removeClass("selected");
    $(this).addClass("selected");
});

/*-- Add class to about content list --*/
$("#Event-slider").owlCarousel({
    loop: true,
    nav: true,
    item: 1,
    center: true,
    margin: 30,
    responsive: {
        0: {
            items: 1,
            navigation: true,
            nav: true,
            slideBy: 1, // <!-- HERE
        },
        768: {
            items: 1,
            navigation: true,
            nav: true,
            slideBy: 1, // <!-- HEREE
        },
    },
    scrollPerPage: true,
    navigation: true,
});

// event slider with page indicator carousal
$("#EventSlider")
    .on("initialized.owl.carousel changed.owl.carousel", function(e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $("#event-page").text(carousel.relative(carousel.current()) + 1 + "/" + carousel.items().length);
    })
    .owlCarousel({
        center: true,
        loop: false,
        margin: 20,
        items: 2,
        responsive: {
            0: {
                items: 1,
                navigation: true,
                nav: true,
                slideBy: 1, // <!-- HERE
            },
            1400: {
                items: 1,
                navigation: true,
                nav: true,
                slideBy: 1, // <!-- HERE
                center: false,
            },
            2100: {
                items: 1,
                navigation: true,
                nav: true,
                slideBy: 1, // <!-- HERE
                center: false,
            },
        },
        scrollPerPage: true,
        navigation: true,
    });

/*-- studioCarousel --*/

$("#studioCarousel").owlCarousel({
    loop: false,
    margin: 10,
    center: true,
    responsive: {
        0: {
            items: 2,
            center: true,
            nav: false,
            slideBy: 1, // <!-- HERE
        },
        600: {
            items: 3,
            center: true,
            nav: false,
            slideBy: 1, // <!-- HERE
        },
        1000: {
            center: false,
            items: 5,
            navigation: false,
            nav: false,
            autoWidth: true,
            slideBy: 1, // <!-- HERE
        },
    },
});

$("#news-area").owlCarousel({
    loop: false,
    autoplay: false,
    nav: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});

/*--  show less button --*/

(function() {
    $(".showless_btn").on("click", function() {
        $(this).toggleClass("active");
        $(".showless-wrap").toggleClass("open");

        let showKey = $("#hideBtn").attr("key");

        if (showKey == "show_more") {
            $("#hideBtn").attr("key", "show_less");
            switch (lang) {
                case (lang = "EN"):
                    $("#hideBtn").text("SHOW LESS");
                    break;
                case (lang = "TC"):
                    $("#hideBtn").text("更少");
                    break;
                case (lang = "SC"):
                    $("#hideBtn").text("更少");
                    break;
            }
        } else {
            $("#hideBtn").attr("key", "show_more");
            switch (lang) {
                case (lang = "EN"):
                    $("#hideBtn").text("SHOW MORE");
                    break;
                case (lang = "TC"):
                    $("#hideBtn").text("更多");
                    break;
                case (lang = "SC"):
                    $("#hideBtn").text("更多");
                    break;
            }
        }
    });
})();

/*-- Add live game column when hover in All Live Game page --*/

$(document).ready(function() {
    $(".game-item-wrap").mouseover(function() {
        $(".game-item-wrap").removeClass("hovering");
        $(this).addClass("hovering");
        return false;
    });
    $(".game-item-wrap").mouseleave(function() {
        $(".game-item-wrap").removeClass("hovering");
    });
});

/*-- Thank you for subscribe popup  --*/

$('#mce-success-response').on('DOMSubtreeModified', function() {
    $("#thankyou-popup").addClass("show");
    // $("#mce-success-response").hide();
});
$(".thanyou-close-btn").click(function() {
    $("#thankyou-popup").removeClass("show");
});
$(".thanyou-close-btn").click(function() {
    $("#thankyou-popup").removeClass("show");
});

const myList = document.querySelector('#mce-EMAIL');
const observer = new MutationObserver(mutations => {
    mutations.forEach(record => {
        if (myList.attr('aria-invalid') === true) {
            myerror.classList.add("show-error");
            console.log("invalid")
            $("#mce-success-response").hide();
        } else {
            myerror.removeClass("show-error");
        }
    });
});


/*--  cookie popup --*/

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", function() {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(function() {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 1500);

/*--  age popup --*/

const ageContainer = document.querySelector(".age-restriction");
const ageAboveButton = document.querySelector(".ageAbove-btn");
const ageUnderButton = document.querySelector(".ageUnder-btn");
const warning = document.querySelector(".ageWarning");
var over18 = localStorage.getItem('ageOver18'); 

ageAboveButton.addEventListener("click", function() {
    ageContainer.classList.remove("active");
    localStorage.setItem("ageOver18", "true");
});
ageUnderButton.addEventListener("click", function() {
    ageContainer.classList.add("active","error");
    warning.classList.add("active");
    localStorage.setItem("ageOver18", "false");
});

setTimeout(function() { 
    if (over18 === 'true') { // Check if it's equal to the string true
        ageContainer.classList.remove("active");
    } else {
        ageContainer.classList.add("active");
    }
}, 1500);


/*-- What's New Timeline add odd/even class start --*/
$(document).ready(function() {
    $(".timeline li:nth-child(even)").addClass("right-frame");
    $(".timeline li:nth-child(odd)").addClass("left-frame");
});

//check the odd / even of timeline item with filter
$(document).ready(function() {
    $("#filterAnn").click(function() {
        $(".timeline ul li").removeClass("left-frame right-frame");
        $(".announcement").filter(":odd").addClass("right-frame");
        $(".announcement").filter(":even").addClass("left-frame");
    });
    $("#filterAll").click(function() {
        $(".timeline ul li").removeClass("left-frame right-frame");
        $(".timeline li").filter(":odd").addClass("right-frame");
        $(".timeline li").filter(":even").addClass("left-frame");
    });
    $("#filterEve").click(function() {
        $(".timeline ul li").removeClass("left-frame right-frame");
        $(".events").filter(":odd").addClass("right-frame");
        $(".events").filter(":even").addClass("left-frame");
    });
    $("#filterGam").click(function() {
        $(".timeline ul li").removeClass("left-frame right-frame");
        $(".games").filter(":odd").addClass("right-frame");
        $(".games").filter(":even").addClass("left-frame");
    });
});

/*-- What's New Timeline add odd/even class end --*/

/*-- What's New Timeline filter function start --*/
$(document).ready(function() {
    $(".filter-item").click(function() {
        const value = $(this).attr("data-filter");

        if (value == "all") {
            $(".filter").show("1000");
        } else {
            $(".filter")
                .not("." + value)
                .hide("3000");
            $(".filter")
                .filter("." + value)
                .show("3000");
        }
    });
    $(".filter-item").click(function() {
        $(".filter-item a").removeClass("active");
        $(this).children("a").addClass("active");
    });
});
/*-- What's New Timeline filter function end --*/