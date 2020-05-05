$(function(){
    let dropdown = $(".button");
    let menu = $("nav .outside li:nth-child(2)");
    let menu2 = $("header .hidden .outside li:nth-child(2)");
    let secondary = $("nav .outside li .inside");
    let secondary2 = $("header .hidden .outside li .inside");
    let bottomNav = $("footer .nav2 li:nth-child(2)");

    $(dropdown).on("click", function(){
        $("nav").slideToggle();
    });
    $(menu).on("click", function() {
        $(secondary).slideToggle();
    });
    $(menu2).on("click", function() {
        $(secondary2).slideToggle();
    });
    $(bottomNav).on("click", function() {
        $(".bottom").slideToggle();
    });
});