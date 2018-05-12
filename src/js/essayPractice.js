import './modules/header';

$(function () {
    $('.text-do textarea').keyup(function () {
        let x=$(this).val().length
        $('.answer-options .count span').text(x)
    })
    $('.answer-content div').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        let n = $(this).index()
        $('.do-answer>div').eq(n).show().siblings().hide()
    })
    $('.cut').click(()=>cut())
    $('.paste').click(()=>paste())
    $('.undo').click(()=>undo())
    $('.redo').click(()=>redo())
    function cut() {
        try{
            if(document.execCommand('cut',false,null)){
                document.execCommand('cut')
            }else{
                pop('当前浏览器不支持复制，请手动复制','red')
            }
        }catch (err){
            pop('当前浏览器不支持复制，请手动复制','red')
        }
    }
    function paste() {
        $('.do-answer textarea').focus()
        try{
            if(document.execCommand('paste',false,null)){
                document.execCommand('paste')
            }else{
                pop('当前浏览器不支持粘贴，请手动粘贴','red')
            }
        }catch (err){
            pop('当前浏览器不支持粘贴，请手动粘贴','red')
        }
    }
    function undo() {
        try{
            if(document.execCommand('undo',false,null)){
                document.execCommand('undo')
            }else{
                pop('当前浏览器不支持撤销，请手动撤销','red')
            }
        }catch (err){
            pop('当前浏览器不支持撤销，请手动撤销','red')
        }
    }
    function redo() {
        try{
            if(document.execCommand('redo',false,null)){
                document.execCommand('redo')
            }else{
                pop('当前浏览器不支持恢复，请手动恢复','red')
            }
        }catch (err){
            pop('当前浏览器不支持恢复，请手动恢复','red')
        }
    }



    //讨论与解析切换
    $('.discuss .left header div').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        // console.log(index)
        $('.discuss .left footer .content').eq(index).removeClass('hidden').siblings().addClass('hidden')
    });
    //评论
    $('.post p').click(() => {
        let comment = $('.post textarea').val();
        $.ajax({
            url: '/api/comment',
            type: 'POST',
            data: {
                content: comment,
                test_topic_id: collect[1],
                test_volume_id: collect[0]
            },
            success: function (mess) {
                if (mess.code == 0) {
                    pop('评论成功');
                    window.location.reload()
                }
            }
        })
    });

    //点赞
    $('.feature span:first-of-type').click(function () {
        // console.log($(this).find('b').text())
        // console.log($(this).closest('li'))
        let id = $(this).closest('li').data('commentId'), that = this;
        if (!$(this).hasClass('added-zan')) {
            $.post('/api/comment/vote', {comment_id: id, vote_type: 1}, function (mess) {
                if (mess && mess.code === 0) {
                    jia(that, 'icon-video-nozan', 'icon-video-zan')
                }
            })
        } else {
            $.post('/api/comment/vote', {comment_id: id, vote_type: 0}, function (mess) {
                if (mess && mess.code === 0) {
                    jian(that, 'icon-video-zan', 'icon-video-nozan')
                }
            })
        }
    });

    function jia(that, c1, c2) {
        $(that).addClass('added-zan').find('b').text(parseInt($(that).find('b').text()) + 1).end().find('i').removeClass(c1).addClass(c2)
    }

    function jian(that, c1, c2) {
        $(that).removeClass('added-zan').find('b').text(parseInt($(that).find('b').text()) - 1).end().find('i').removeClass(c1).addClass(c2)
    };
    //参与评论文本区展开
    $('.feature span:nth-of-type(2)').click(function () {
        let h = $('body').outerHeight()
        if (!$(this).hasClass('s')) {
            $(`<div class="advice-adv clearfix">
                    <textarea placeholder='请输入内容'></textarea>
                    <p>提交</p>
                </div>`).insertAfter($(this).closest('.advice-par'))
            $(this).addClass('s').closest('.advice-par').siblings('.advice-adv').slideDown()
            $('.iframe', window.parent.document).animate({height: h + 182}, 500);
        } else {
            $(this).removeClass('s').closest('.advice-par').siblings('.advice-adv').slideUp(() => {
                $(this).closest('.advice-par').siblings('.advice-adv').remove();
            });
            $('.iframe', window.parent.document).animate({height: h - 142}, 500);
        }
    });
    //参与评论提交
    $('.advice').on('click', '.advice-adv p', function () {
        let comment = $('.advice-adv textarea').val();
        let id = $(this).closest('li').data('commentId'), that = this;
        $.post('/api/comment', {
            content: comment,
            test_topic_id: collect[1],
            test_volume_id: collect[0],
            pid: id
        }, function () {
            window.location.reload()
        })
    });
})