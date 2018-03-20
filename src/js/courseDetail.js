import './lib/jquery.bxslide';

import './modules/header';


$(function () {
    $('.bxslider').bxSlider();
    $('.tab-item').click(function () {
        $(this).find('a').addClass('active').end().siblings().find('a').removeClass('active')
        let i=$(this).index()
        $('.cont-item').eq(i).show().siblings().hide()
    })
});