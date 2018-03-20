import './modules/header';
$(function () {
    $('.clearSet').click(function () {
        if($(this).hasClass('clear')){
            let f1=$(this).removeClass('clear').find('i').animate({left:"-20px"},100)
            _clear(0,f1)
        }else{
            let f2=$(this).addClass('clear').find('i').animate({left:0},100)
            _clear(1,f2)
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
    function _clear(flag,fn) {
        $.ajax({
            url:'/wrong/clear',
            type:'post',
            data:{flag:flag},
            success:function (mess) {
                if(mess&&mess.code==0){
                    fn
                }
            }
        })
    }
});