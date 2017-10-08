$(document).ready(function main(){
    $(".home-hline").addClass("animated fadeInLeft");
    $(".projects-hline, .blog-hline").addClass("animated fadeInRight");
    $(".anchor").addClass("animated fadeInDown");

    $(".pro1").hover(function(){
        $(".pro1").toggleClass("dark-pro1");
        $(".pro1-text").toggle();
    });

    $(".pro2").hover(function(){
        $(".pro2").toggleClass("dark-pro1");
        $(".pro2-text").toggle();
    });

});
