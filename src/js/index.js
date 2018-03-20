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
    toTop()
});