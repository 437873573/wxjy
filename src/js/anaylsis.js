import './modules/header';
$(function () {
    let collect=[], arr=[], tlist = $('.testlist ul');
    arr = $('.clicked').parent().attr('href');
    $(arr.split('&')).each((i,v)=>{
        collect.push(v.split('=')[1])
        // console.log(collect)
    });
    if (parseInt(tlist.css('width')) < 700) {
        $('.icon-butn-left').css('display', 'none');
        $('.icon-burn-right').css('display', 'none')
    }
    $('.anaylsis .left .next').click(() => {
        let l = tlist.css('left');
        let tw = -parseInt(l) + 700;
        if (parseInt(tlist.css('width')) > 700 && tw < parseInt(tlist.css('width'))) {
            tlist.animate({left: `${parseInt(l) - 700}px`})
        }
    });
    $('.anaylsis .left .prev').click(() => {
        let l = tlist.css('left');
        if (parseInt(tlist.css('width')) > 700 && parseInt(l) < 0) {
            tlist.animate({left: `${parseInt(l) + 700}px`})
        }
    });
    $('.testlist ul a').click(function () {
        arr='';collect=[];
        $(this).find('li').addClass('clicked').end().siblings().find('li').removeClass('clicked');
        $('.collect i').removeClass('icon-collection1').addClass('icon-collection');
        arr = $('.clicked').parent().attr('href');
        $(arr.split('&')).each((i,v)=>{
            collect.push(v.split('=')[1])
            // console.log(collect)
        });
        $('.translation').hide()
    });
    $(document).click((e)=>{
        if(e.target==$('.writeMarkBox').get(0)){
            $('.writeMarkBox').hide()
        }else if(e.target==$('.reportWrongBox').get(0)){
            $('.reportWrongBox').hide()
        }
    })
    $('.domark').click(() => {
        $('#domark').text($.trim($('.iframe').contents().find('.mymark').text()));
        $('.writeMarkBox').show()
    });
    $('.writeMark .head p').click(() => {
        $('.writeMarkBox').hide()
    });
    $('.repwrong').click(() => {
        $('.reportWrongBox').show()
    });
    $('.reportWrong .head p').click(() => {
        $('.reportWrongBox').hide()
    });

    //收藏
    $('.collect').click(() => {
        if($('.collect i').hasClass('icon-collection')){
            $.ajax({
                url: '/collect',
                type: 'POST',
                data: {test_topic_id: collect[1] ,test_volume_id: collect[0]},
                success: function (mess) {
                    if (mess.code == 0) {
                        pop('收藏成功')
                        $('.collect i').removeClass('icon-collection').addClass('icon-collection1')
                    } else {
                        pop('网络原因，请重新收藏', 'red')
                    }
                },
            })
        }else{
            pop('已添加收藏','#fa8c16')
        }
    });

    //笔记提交
    $('.writeMarkBox .but').click(() => {
        let mark = $('#domark').val();
        // console.log($('.iframe').get(0))
        $.ajax({
            url: '/save_note',
            type: 'POST',
            data: {
                note_content: mark,
                test_topic_id: collect[1],
                test_volume_id: collect[0],
            },
            success: function (mess) {
                if (mess.code == 0) {
                    pop('笔记添加成功');
                    $('.iframe').contents().find('.mymark').text(mark)
                    $('.writeMarkBox').hide()
                } else {
                    pop('网络原因，请重新添加提交', 'red')
                    $('.writeMarkBox').hide()
                }
            },
            error:function () {
                pop('网络原因，请稍后再试', 'red')
                $('.writeMarkBox').hide()
            }
        })
    });

    //报错
    $('.reportWrongBox .but').click(() => {
        let mark = $('.reportWrong textarea').val();
        // console.log($('.iframe').get(0))
        $.ajax({
            url: '/report',
            type: 'POST',
            data: {
                content: mark,
                test_topic_id: collect[1],
                test_volume_id: collect[0]
            },
            success: function (mess) {
                if (mess.code == 0) {
                    pop('报错成功，感谢您的支持');
                    $('.reportWrongBox').hide()
                } else {
                    pop('网络原因，请重新添加提交', 'red')
                    $('.reportWrongBox').hide()
                }
            },
            error:function () {
                pop('网络原因，请稍后再试', 'red')
                $('.reportWrongBox').hide()
            }
        })
    });

    //添加生词
    $('.translation .but').click(function () {
        if($(this).attr('id')!=0){
            $.ajax({
                url:'/word/mark',
                type:'post',
                data:{word_id:$(this).attr('id')},
                success:function (mess) {
                    if(mess.code==0){
                        pop('添加成功');
                        $('.translation .but').addClass('added').text('已添加到生词本')
                    }else{
                        pop('添加失败，请重试','red')
                    }
                }
            })
        }
    })
    
    $(document).click(function (e){
        if (e.target !== $('.translate')[0] && $('.translate').css('display') == 'block') {
            $('.translate').hide()
        }
    })
})






