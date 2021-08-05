$(function() {
    var $page = $('html, body');
    $('a[href*="#header"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1200);
        return false;
    });

    AOS.init();


    $(function() {
        $(".header__burger").click(function() {
            $(this).toggleClass("active");
        });

    });
    $(function() {

        $(".header__burger").click(function() {
            $('.rightside-menu').toggleClass('menu-up');
        });
    });
    $(function() {

        $(".header__burger-menu").click(function() {
            $('.rightside-menu').toggleClass('menu-up');
        });
    });




})