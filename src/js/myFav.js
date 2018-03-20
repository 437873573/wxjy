import './modules/header'
$(function () {
    $('.allfavs').click(function (){
        if(!$(this).hasClass('all')){
            $(this).addClass('all')
            $('.item').each((i,v)=>{
                $(v).find('.fav').prop("checked",true)
            })
        }else{
            $(this).removeClass('all')
            $('.item').each((i,v)=>{
                $(v).find('.fav').prop("checked",false)
            })
        }
    })
})