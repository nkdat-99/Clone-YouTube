$(document).ready(function() {
    try {
        youTubeJS = new YouTubeJS();
    } catch (e) {
        console.log(e);
    }

    $('[data-toggle="tooltip"]').tooltip();

    /**
     * Date: 3/12/2020
     * Timeout Event Responsive Menu
     * */
    var timeout;
    $(window).resize(function() {

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(menu_responsive, 10);
    });

    if ($(window).width() <= 1280) {
        if ($(this).width() <= 1280) {
            document.getElementById("contentId").className = "content-max";
            $('#menuIdSmall').show();
            $(".menu").css("left", "-240px")
        }
    }
})

class YouTubeJS {
    constructor() {
        try {
            this.initEvents();
        } catch (e) {
            console.log(e);
        }
    }

    initEvents() {
        $('#btnIconMenu').click(this.slideOnClick.bind(this));
        $('.modal-menu').click(this.closeMenuOnClick.bind(this));
    }

    /**
     * Date: 3/12/2020
     * Responsive Menu
     * */
    slideOnClick() {
        var x = document.getElementById("contentId");
        var y = document.getElementById("menuId");
        if ($(window).width() > 1280) {
            $(".menu").css("position") === "fixed";
            if ($(".menu").css("left") === "0px") {
                $(".menu").css("left", "-240px")
                x.className = "content-max";
                $('#menuIdSmall').show();
            } else {
                $('#menuIdSmall').hide();
                $(".menu").css("left", "0px")
                x.className = "content";
            }
        } else {
            $(".menu").css("position") === "absolute";
            if ($(".menu").css("margin-left") === "0px") {
                $('.menu').animate({ 'marginLeft': "240px" });
                $('.modal-menu').show();
                $('.modal-menu').animate({ 'opacity': "50%" });
                $("body").css("overflow-y", "hidden");
            } else {
                $('.menu').animate({ 'marginLeft': "0px" });
                $('.modal-menu').animate({ 'opacity': "0%" });
                $('.modal-menu').hide();
                $("body").css("overflow-y", "auto");
            }
        }
    }

    closeMenuOnClick() {
        $('.menu').animate({ 'marginLeft': "0px" });
        $('.modal-menu').animate({ 'opacity': "0%" });
        $('.modal-menu').hide();
        $("body").css("overflow-y", "auto");
    }
}

/**
 * Date: 3/12/2020
 * Responsive Menu
 * */
function menu_responsive() {
    if ($(window).width() <= 1280) {
        document.getElementById("contentId").className = "content-max";
        $('#menuIdSmall').show();
        $(".menu").css("left", "-240px")
    } else {
        document.getElementById("contentId").className = "content";
        $('#menuIdSmall').hide();
        $(".menu").css("position") === "fixed";
        $(".menu").css("left", "0px")
        $('.menu').css('margin-left', "0px");
        $('.modal-menu').animate({ 'opacity': "0%" });
        $('.modal-menu').hide();
        $("body").css("overflow-y", "auto");
    }
}