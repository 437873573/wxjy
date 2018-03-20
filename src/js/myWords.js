import './modules/header'
$(function () {
    $('.times').click(function (e) {
        e.stopPropagation()
        if ($(this).is(':checked') == true) {
            $(this).closest('.words-item').addClass('checked hidden-info').find('.row-4').show()
        } else {
            $(this).closest('.words-item').removeClass('checked').find('.row-4').hide()
        }
    })
    $('.words-item').click(function () {
        if($(this).hasClass('hidden-info')){
            $(this).removeClass('hidden-info').find('.row-4').hide().end().find('.my-notes').show()
        }else{
            $(this).addClass('hidden-info').find('.my-notes').hide()
        }
    })
    $('.alltimes').click(function (){
        if(!$(this).hasClass('all')){
            $(this).addClass('all')
            $('.words-item').each((i,v)=>{
                $(v).addClass('checked hidden-info').find('.row-4').show().end().find('.times').prop("checked",true).end().find('.my-notes').hide()
            })
        }else{
            $(this).removeClass('all')
            $('.words-item').each((i,v)=>{
                $(v).removeClass('checked').find('.row-4').hide().end().find('.times').prop("checked",false)
            })
        }
    })
})