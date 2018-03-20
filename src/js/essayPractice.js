
import './modules/header';
$(function () {
    $('.question-list li').click(function () {
        if($(this).hasClass('show')){
            $(this).removeClass('show').find('.essay-title').slideUp()
        }else {
            $(this).addClass('show').find('.essay-title').slideDown()
        }

    })
})