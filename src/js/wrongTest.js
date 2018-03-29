import './modules/header';
$(function () {
    $('.clearSet').click(function () {
        if($(this).hasClass('clear')){
            $.post('/api/wrong/clear',{flag:0},function (mess) {
                if(mess&&mess.code==0){
                    $('.clearSet').removeClass('clear').find('i').animate({left:"-20px"},100)
                }
            })
        }else{
            $.post('/api/wrong/clear',{flag:1},function (mess) {
                if(mess&&mess.code==0){
                    $('.clearSet').addClass('clear').find('i').animate({left:0},100)
                }
            })
        }
    });
    $('.allWrong').click(function () {
        if($(this).hasClass('all')){
            $(this).removeClass('all');
            $('input[class="wrong"]').prop("checked",false)
        }else{
            $(this).addClass('all');
            $('input[class="wrong"]').prop("checked",true)
        }
    });
});