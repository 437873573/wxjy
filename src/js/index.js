// import {LoginBabel} from './login/login-babel.js';

// new LoginBabel().$inject('#app');
import './lib/jquery.bxslide';
import './modules/header';
import {toTop} from "./modules/toTop";

$(function () {
    $('.bxslider').bxSlider();
    $('.dialog-wrapper .btn-close').click(()=>{
        $('.dialog-wrapper').hide()
    });
    $(window).scroll(function () {
        let t=$(this).scrollTop();
        if(t>332){
            $('.page-slide').fadeIn()
        }else{
            $('.page-slide').fadeOut()
        }
    });
    toTop();
    let i=0;
    $('.rank-list .tab a').hover(function () {
        $(this).addClass('current').siblings().removeClass('current');
        i=$(this).index();
        $('.cont').eq(i).show().siblings().hide();
        $('.cont ul').css('top',0)
    });
    $('.rank-list .more').click(()=>{
        let tlist=$('.rank-list .cont').eq(i).find('ul');
        let l = tlist.css('top');
        let tw = -parseInt(l) + 300;
        if (parseInt(tlist.css('height')) > 300 && tw < parseInt(tlist.css('height'))) {
            tlist.animate({top: `${parseInt(l) - 300}px`})
        }
    });
    var tlist=$('.col-msjs .bd .list');
    if (parseInt(tlist.css('width')) <= 1200) {
        tlist.css({'justifyContent':'space-around','width':'1200px'});
        $('.col-msjs .prev').hide();
        $('.col-msjs .next').hide();
    }
    $('.col-msjs .next').click(() => {
        let l = tlist.css('left');
        let tw = -parseInt(l) + 1200;
        if (parseInt(tlist.css('width')) > 1200 && tw < parseInt(tlist.css('width'))) {
            tlist.animate({left: `${parseInt(l) - 1200}px`})
        }
    });
    $('.col-msjs .prev').click(() => {
        let l = tlist.css('left');
        if (parseInt(tlist.css('width')) > 1200 && parseInt(l) < 0) {
            tlist.animate({left: `${parseInt(l) + 1200}px`})
        }
    });
});