// import {LoginBabel} from './login/login-babel.js';

// new LoginBabel().$inject('#app');
import './lib/jquery.bxslide';

import './modules/header';


$(function () {
    $('.bxslider').bxSlider();
    $('.tab-item').click(function () {
        $(this).addClass("active").siblings().removeClass("active"); //切换选中的按钮高亮状态
        var index=$(this).index('.tab-item'); //获取被按下按钮的索引值，需要注意index是从0开始的
        $(".card-tab-cont").eq(index).show().siblings().hide();
    })
});