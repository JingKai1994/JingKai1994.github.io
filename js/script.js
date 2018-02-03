$(window).load(function () {

    $('#preloader').delay(350).fadeOut('slow', function () {
        $('.discounts-page, .orange-page, .box-page, .farmer-page, .about-page, .parallaxBg').hide();
    });
});



$(document).ready(function () {
    // menu設定
    //點擊menu>div logo.menu往左右移 並隱藏homepage.css
    $('.menu > div').on('click', function () {

        var logoWidth = $('.logo').width(),
            menuWidth = $('.menu').width();

        $('.logo').animate({
            left: '-' + logoWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.homepage').css({
                visibility: 'hidden'
            });
        });

    });

    $('.logo h1').on('click', function () {

        var logoWidth = $('.logo').width(),
            menuWidth = $('.menu').width();

        $('.logo').animate({
            left: '-' + logoWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.homepage').css({
                visibility: 'hidden'
            });
        });
        $('.parallaxBg').fadeIn(1200);
    });
    // 點擊選單出現各畫面

    $('.menu div.discounts').on('click', function () {
        $('.discounts-page').fadeIn(1200);
    });

    $('.menu div.oranges').on('click', function () {
        $('.orange-page').fadeIn(1200);
    });

    $('.menu div.gift').on('click', function () {
        $('.box-page').fadeIn(1200);
    });

    $('.menu div.activity').on('click', function () {
        $('.farmer-page').fadeIn(1200);

    });
    $('.menu div.about').on('click', function () {
        $('.about-page').fadeIn(1200);
    });

    // 點擊關閉按鈕,隱藏畫面,logo.menu出現

    $('.close-btn').on('click', function () {
        $('.homepage').css({
            visibility: 'visible'
        });
        $('.logo, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.discounts-page, .orange-page, .box-page, .farmer-page, .about-page, .parallaxBg').fadeOut(800);

        var parallaxWidth = $('.parallaxBg').width();
        // $('.parallaxBg').animate({
        //     left: parallaxWidth
        // }, 1500, 'easeOutQuart');

    });

    //背景視差

    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 30;

    function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

        $('.parallaxBg').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });

        window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function (e) {

        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
        lFollowY = (10 * lMouseY) / 100;

    });

    moveBackground();

});

//首頁點擊phone,home出現資訊
function showphone() {
    document.getElementById("showinfo").innerHTML = "04-12345678";
}

function showaddress() {
    document.getElementById("showinfo").innerHTML = "台中市豐原區水源路中坑巷3號";
}
function prev() {
    document.getElementById("welcome").style.visibility = "visible";
    document.getElementById("nightbg").style.visibility = "hidden";
}
function next() {
    document.getElementById("welcome").style.visibility = "hidden";
    document.getElementById("nightbg").style.visibility = "visible";
}