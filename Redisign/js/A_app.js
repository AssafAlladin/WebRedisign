$(function() {
    let menuToggler = $("nav button.navbar-toggler");
    let dropdownToggler = $("a.nav-link.dropdown-toggle");
    let animate = $(".submit");

    menuToggler.on("click", function(e) {
        e.preventDefault();
        let navigation = $(this).attr("data-target");
        $(navigation).toggleClass("open");
    });

    dropdownToggler.on("click", function(e) {
        e.preventDefault();
        $(this).siblings().toggleClass("open");
    });
    animate.on("click", function() {
        $(this).animate({borderBox: '0 0 0'})
    })
});
