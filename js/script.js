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
    $('.discounts-page, .orange-page, .box-page, .farmer-page, .about-page').fadeOut(800);
});

//首頁點擊phone,home出現資訊

function showphone() {
    document.getElementById("showinfo").innerHTML = "04-12345678";
}
function showaddress() {
    document.getElementById("showinfo").innerHTML = "台中市豐原區水源路中坑巷3號";
}