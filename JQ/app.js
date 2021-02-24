$(function () {


    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let data
    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });



    /* Nav Toggles */
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    /* modal   */


    const dmodal = $("[data-modal]");
    dmodal.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalid = $this.data("modal");


        $(modalid).addClass("eee");
        $("body").addClass("no-scroll");



    });


    const xmodal = $("[data-webp]");
    xmodal.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let xodalid = $this.parents(".modal");


        $(xodalid).removeClass("eee");
        $("body").removeClass("no-scroll");


    });


});