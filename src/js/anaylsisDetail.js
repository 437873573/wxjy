import './modules/header'
import './lib/mathquill.min'

$(function () {
    $('.iframe', window.parent.document).css('height', $('body').outerHeight() + 20);
    let marked = $('.inner').data('mark');
    $('.collect i', window.parent.document).attr('class', `${marked ? 'icon-collection1' : 'icon-collection'}`);
    let play, audio = $('.audio').get(0);
    //数学公式
    var MQ = MathQuill.getInterface(2);
    $('.mathquill-embedded-latex').each((i, v) => {
        MQ.StaticMath(v);
    });
    $('.mathquill-embedded-latex').css('width', 'auto')
    //音频播放
    $('.icon-mp3-play').click(function () {
        if (audio.readyState < 4) {
            pop('音频资源加载中，请稍等', '#fa8c16');
            return
        } else {
            $('.audio-time').find('.dur').text(`${format(audio.duration)}`);
        }
        if (!$(this).hasClass('p')) {
            $(this).addClass('p icon-mp3-parse').removeClass('icon-mp3-play');
            audio.play();
            play = setInterval(() => {
                let tt = audio.duration, ct = audio.currentTime;
                if (parseInt(ct / 2) === parseInt(tt / 2)) {
                    ct = audio.currentTime = 0;
                    // $('.audio-time').find('.cur').text(`${format(ct)}`);
                    audio.pause();
                    $('.icon-mp3-parse').removeClass('p icon-mp3-parse').addClass('icon-mp3-play');
                    $('.userright .progress .rate').css('width', 0);
                    clearInterval(play)
                } else {
                    $('.userright .rate').width(ct / tt * 280);
                }
                $('.audio-time').find('.cur').text(`${format(ct)}`);
            }, 1000)
        } else {
            $(this).removeClass('p icon-mp3-parse').addClass('icon-mp3-play');
            audio.pause();
            clearInterval(play)
        }
    });
    let tag = false, left = 0, bgleft = 0;
    //鼠标点击进度条
    $('.userright .progress').click(function (e) {
        if (!audio.paused) {
            bgleft = $(this).offset().left;
            left = e.pageX - bgleft;
            if (left <= 0) {
                left = 0;
            } else if (left > 280) {
                left = 280;
            }
            // $('.progress_btn').css('left', left);
            $('.userright .progress .rate').css('width', left);
            audio.currentTime = left / 280 * audio.duration;
            $('.audio-time').find('.cur').text(`${format(audio.currentTime)}`);
        }
    });

    //时间展示
    function format(time) {
        time = time | 0;
        const minute = time / 60 | 0;
        const second = _pad(time % 60);
        return `${_pad(minute)}:${second}`
    }

    function _pad(num, n = 2) {
        let len = num.toString().length;
        while (len < n) {
            num = "0" + num;
            len++
        }
        return num
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
        let collect = [];
        let arr = $('.clicked', window.parent.document).data('url');
        $(arr.split('&')).each((i, v) => {
            collect.push(v.split('=')[1])
            // console.log(collect)
        });
        // console.log(comment,collect.topicId,collect.volumeId)
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
                    window.parent.pop('评论成功');
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
        let h=$('body').outerHeight()
        if (!$(this).hasClass('s')) {
            $(`<div class="advice-adv clearfix">
                    <textarea placeholder='请输入内容'></textarea>
                    <p>提交</p>
                </div>`).insertAfter($(this).closest('.advice-par'))
            $(this).addClass('s').closest('.advice-par').siblings('.advice-adv').slideDown()
            $('.iframe', window.parent.document).animate({height:h + 182},500);
        } else {
            $(this).removeClass('s').closest('.advice-par').siblings('.advice-adv').slideUp(()=>{
                $(this).closest('.advice-par').siblings('.advice-adv').remove();
            });
            $('.iframe', window.parent.document).animate({height:h-142},500);
        }
    });
    //参与评论提交
    $('.advice').on('click','.advice-adv p',function () {
        let comment = $('.advice-adv textarea').val();
        let collect = [];
        let arr = $('.clicked', window.parent.document).data('url');
        let id = $(this).closest('li').data('commentId');
        $(arr.split('&')).each((i, v) => {
            collect.push(v.split('=')[1])
        });
        $.post('/api/comment', {
            content: comment,
            test_topic_id: collect[1],
            test_volume_id: collect[0],
            pid: id
        }, function () {
            window.location.reload()
        })
    });

    //划词翻译
    function selectWord(eleShare, eleContainer) {
        function funGetSelectTxt() {
            var txt = "";
            if (document.selection) {
                txt = document.selection.createRange().text;    // IE
            } else {
                txt = document.getSelection();
            }
            let t = txt.toString().split(' ').shift()
            return t;
        };
        eleContainer.mouseup(function (e) {
            e = e || window.event;
            var txt = funGetSelectTxt(),
                pw = window.parent.document.documentElement.clientWidth,
                sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            // var left = (e.clientX - 40 < 0) ? e.clientX + 20 : e.clientX - 40,
            //     top = (e.clientY - 40 < 0) ? e.clientY + sh + 20 : e.clientY + sh - 40;
            // console.log(pw)
            var left = pw - 1200 >= 0 ? (pw - 1200) / 2 + e.clientX - 40 : e.clientX - 40, top = e.clientY + sh + 240;
            // var left = e.clientX + 300, top = e.clientY + sh + 240
            if (txt) {
                $.ajax({
                    // url:'http://wxjy-mingyang.mion.cn/api/word/query',
                    url: '/api/word/query',
                    data: {word: txt},
                    success: function (mess) {
                        if (mess.code === 0 && mess.data.word) {
                            let data = mess.data.word
                            eleShare.css({"display": "block", "left": `${left}px`, "top": `${top}px`})
                            eleShare.find('.word b').html(txt)
                            eleShare.find('.phonetic span').html(data.phonetic)
                            eleShare.find('.meaning div span').html(data.interpretation)
                            eleShare.find('.example div span').html(data.example)
                            if (data.is_marked) {
                                eleShare.find('.but').attr('id', 0)
                                eleShare.find('.but').text('已添加到生词本')
                            } else {
                                eleShare.find('.but').attr('id', data.id)
                                eleShare.find('.but').text('添加到生词本')
                            }
                        } else {
                            eleShare.css("display", "none");
                        }
                    }
                })
            } else {
                eleShare.css("display", "none");
            }
        });
        // eleShare.click(function () {
        //     alert(1)
        // });
    };
    // selectWord($('.translation', window.parent.document), $('.inner>section'))
    //新移词翻译
    let timer = null;

    function hoverWord(tran, ele) {
        ele.hover(
            function (e) {
                let that = this
                timer = setTimeout(function () {
                    if (tran.css('display') == 'none') {
                        e = e || window.event;
                        var txt = $(that).text(),
                            pw = window.parent.document.documentElement.clientWidth,
                            sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                        var left = pw - 1200 >= 0 ? (pw - 1200) / 2 + e.clientX - 40 : e.clientX - 40,
                            top = e.clientY + sh + 240;
                        if (txt) {
                            $.ajax({
                                url: '/api/word/query',
                                data: {word: txt},
                                success: function (mess) {
                                    if (mess.code === 0 && mess.data.word) {
                                        let data = mess.data.word;
                                        tran.css({"display": "block", "left": `${left}px`, "top": `${top}px`});
                                        tran.find('.select input').val('');
                                        tran.find('.word b').html(txt);
                                        tran.attr('id', data.id);
                                        tran.find('.phonetic span').html(data.phonetic);
                                        tran.find('.meaning div span').html(data.interpretation);
                                        tran.find('.example div span').html(data.example);
                                        tran.find('.selRec,.wordBug,.addWordMark').hide();
                                        tran.find('.foot').show();
                                        if (data.test_method != '') {
                                            tran.find('.moreMeaning p').html(data.test_method)
                                        } else {
                                            tran.find('.moreMeaning').hide()
                                        }
                                        if (data.note) {
                                            tran.find('.wordMark p').html(data.note.note_content);
                                        } else {
                                            tran.find('.wordMark').hide()
                                        }
                                        if (data.is_marked) {
                                            tran.find('.addWord').attr('id', 0);
                                            tran.find('.addWord').addClass('added').text('已添加到生词本')
                                        } else {
                                            tran.find('.addWord').attr('id', data.id);
                                            tran.find('.addWord').removeClass('added').text('添加到生词本')
                                        }
                                    } else {
                                        tran.css("display", "none");
                                    }
                                }
                            })
                        } else {
                            tran.css("display", "none");
                        }
                    }
                }, 300)
            },
            function () {
                clearTimeout(timer)
            }
        )
    };
    let translate = $('.translation', window.parent.document)
    hoverWord(translate, $('.inner>section .translate'))
    $(document).click(function (e) {
        if (e.target !== translate[0] && translate.css('display') == 'block') {
            translate.hide()
        }
    });
})