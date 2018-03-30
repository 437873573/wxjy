import './modules/header'
$(function () {
    $('.times').click(function (e) {
        e.stopPropagation()
        if ($(this).is(':checked') == true) {
            $(this).closest('.words-item').addClass('checked')
        } else {
            $(this).closest('.words-item').removeClass('checked')
        }
    });
    $('.words-item').click(function () {
        if($(this).hasClass('hidden-info')){
            $(this).removeClass('hidden-info').find('.other').slideDown()
        }else{
            $(this).addClass('hidden-info').find('.other').slideUp()
        }
    });
    $('.alltimes').click(function (){
        if(!$(this).hasClass('all')){
            $(this).addClass('all')
            $('.words-item').each((i,v)=>{
                $(v).addClass('checked').find('.times').prop("checked",true)
            })
        }else{
            $(this).removeClass('all')
            $('.words-item').each((i,v)=>{
                $(v).removeClass('checked').find('.times').prop("checked",false)
            })
        }
    });
    $('.row-3 .title').click(function () {
        if($(this).hasClass('b')){
            $(this).addClass('d').removeClass('b').text('详细考法');
            $('.mean.detail').show();
            $('.mean.basis').hide()
        }else{
            $(this).addClass('b').removeClass('d').text('基础解义');
            $('.mean.basis').show();
            $('.mean.detail').hide()
        }
    })
});