import './modules/header'
$(function () {
    $('.allnotes').click(function (){
        if(!$(this).hasClass('all')){
            $(this).addClass('all')
            $('.item').each((i,v)=>{
                $(v).find('.note').prop("checked",true)
            })
        }else{
            $(this).removeClass('all')
            $('.item').each((i,v)=>{
                $(v).find('.note').prop("checked",false)
            })
        }
    })
})