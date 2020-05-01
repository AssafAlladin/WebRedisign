$(function(){
    let dropdown = $(".button");
    let menu = $("nav .outside li:nth-child(2)");
    let secondary = $("nav .outside li .inside");
    let bottomNav = $("footer .nav2 li:nth-child(2)");

    $(dropdown).on("click", function(){
        $("nav").slideToggle();
    });
    $(menu).on("click", function() {
        $(secondary).slideToggle();
    });
    $(bottomNav).on("click", function() {
        $(".bottom").slideToggle();
    });
});