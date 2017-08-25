$(document).ready(function main(){
    $(".home-hline").addClass("animated fadeInLeft");
    $(".projects-hline").addClass("animated fadeInRight");
    $(".anchor").addClass("animated fadeInDown");

    $(".pro1").hover(function(){
    $(".pro1").toggleClass("dark-pro1");
    $(".pro1-text").toggle();
    });

});
