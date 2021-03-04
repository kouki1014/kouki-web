$(function(){
    "use strict";
    $('.c-hamburger__menu').on('click', function () {
        $('.c-hamburger__menu, .nav, .p-header__navlink, link').toggleClass('show');
    });
    $(window).scroll(function (){
        $('#c-section__head--name').each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
        })
    });
    $(window).scroll(function (){
        $('#c-section__body--myimg').each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
        })
    });
    $(window).scroll(function (){
        $('#c-section__body--profile').each(function(){
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight/5){
                $(this).addClass("fade_on");
            } else {
                $(this).removeClass("fade_on");
            }
        })
    });
    $("input").hover(function(){
        $(this).css("border-color","blue")
    },
    function(){
        $(this).css("border-color","#5a5a5a");
    });
    $("textarea").hover(function(){
        $(this).css("border-color","blue");
    },
    function(){
        $(this).css("border-color","#5a5a5a");
    });
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:5000,
        arrow:true,
    });
    $("#img1").click(function(){
        $(".modal1").fadeTo(500, 0.9);
    });
    $(".modal-close").click(function(){
        $(".modal1").fadeOut(400);
    });
    $(".modal-around").click(function(){
        $(".modal1").fadeOut(400);
    });
    $("#img2").click(function(){
        $(".modal2").fadeTo(500, 0.9);
    });
    $(".modal-close").click(function(){
        $(".modal2").fadeOut(400);
    });
    $(".modal-around").click(function(){
        $(".modal2").fadeOut(400);
    });
    $("#img3").click(function(){
        $(".modal3").fadeTo(500, 0.9);
    });
    $(".modal-close").click(function(){
        $(".modal3").fadeOut(400);
    });
    $(".modal-around").click(function(){
        $(".modal3").fadeOut(400);
    });
});