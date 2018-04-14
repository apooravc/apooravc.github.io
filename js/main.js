$(document).ready(function () {
    $(".blog").on("mousedown", function() {
        $(".blog").css("background-color", "#fff");
        $(".blog-text").css("color", "#03a87c");
    });

    $(".blog").on("mouseup", function() {
        $(".blog").css("background-color", "#03a87c");
        $(".blog-text").css("color", "#fff");
    });

    $(".blog").on("click", function() {
        window.open("https://medium.com/@apoorvc");
    });

    $(".footer").on("click", function() {
        window.open("https://github.com/apooravc/apooravc.github.io");
    });

    $("ul.nav-list>li").eq(0).on("click", function() {
        $("html, body").animate({
            scrollTop: $("#home").offset().top
        }, 700);
    });

    $("ul.nav-list>li").eq(1).on("click", function() {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, 700);
    });

    $("ul.nav-list>li").eq(2).on("click", function() {
        $("html, body").animate({
            scrollTop: $("#blog").offset().top
        }, 700);
    });

    $("ul.nav-list>li").eq(3).on("click", function() {
        $("html, body").animate({
            scrollTop: $("#projects").offset().top
        }, 700);
    });


    var visible = false;
    $("a.toggleButton").click(function() {
        if (visible === false) {
            $(".header").removeClass("slide-left").addClass("slide-right");
            $(".main").removeClass("slide-left").addClass("slide-right");
            $(".footer").removeClass("slide-left").addClass("slide-right");
            visible = true;
        } else {
            $(".header").removeClass("slide-right").addClass("slide-left");
            $(".main").removeClass("slide-right").addClass("slide-left");
            $(".footer").removeClass("slide-right").addClass("slide-left");
            visible = false;
        }
        return false;
    });

    $(".nav-list>li>a").on("click", function() {
        $(".header").removeClass("slide-right").addClass("slide-left");
        $(".main").removeClass("slide-right").addClass("slide-left");
        $(".footer").removeClass("slide-right").addClass("slide-left");
        visible = false;
    });
});


