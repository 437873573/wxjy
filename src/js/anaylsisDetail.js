import './modules/header'

$(function () {
    $('.iframe', window.parent.document).css('height', $('body').outerHeight() + 20);
    let play, audio = $('.audio').get(0);
    //音频播放
    $('.icon-mp3-play').click(function () {
        if(audio.readyState<4){
            pop('音频资源加载中，请稍等','#fa8c16');
            return
        }
        if (!$(this).hasClass('p')) {
            $(this).addClass('p icon-mp3-parse').removeClass('icon-mp3-play');
            audio.play();
            play = setInterval(() => {
                let tt = audio.duration, ct = audio.currentTime;
                if(parseInt(ct/2)===parseInt(tt/2)){
                    audio.currentTime=0;
                    audio.pause();
                    $('.icon-mp3-parse').removeClass('p icon-mp3-parse').addClass('icon-mp3-play');
                    clearInterval(play)
                }else{
                    $('.userright .rate').width(ct / tt * 280);
                }
            }, 1000)
        } else {
            $(this).removeClass('p icon-mp3-parse').addClass('icon-mp3-play');
            audio.pause();
            clearInterval(play)
        }
    });
    //音频静音
    $('.icon-volume').click(function () {
        if($(this).hasClass('no')){
            $(this).removeClass('no icon-novolume').addClass('icon-volume');
            audio.volume=1
        }else{
            $(this).addClass('no icon-novolume').removeClass('icon-volume');
            audio.volume=0
        }
    });
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
        let arr = $('.clicked', window.parent.document).parent().attr('href');
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
                    window.parent.pop('评论成功')
                    window.location.reload()
                } else {
                    window.parent.pop('评论失败，请重试', 'red')
                }
            }
        })
    });

    //点赞
    $('.feature span:first-of-type').click(function () {
        // console.log($(this).find('b').text())
        // console.log($(this).closest('li'))
        let zan = parseInt($(this).find('b').text())
        if ($(this).find('b').hasClass('zaned')) {
            return
        } else {
            zan++;
            $(this).find('b').text(`${zan}`).addClass('zaned')
            let id = $(this).closest('li').data().commentId
            $.ajax({
                url: '/api/comment/like',
                type: 'POST',
                data: {comment_id: id},
                success: function (mess) {
                }
            })
        }
    })

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
                let that=this
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
                                        let data = mess.data.word
                                        tran.css({"display": "block", "left": `${left}px`, "top": `${top}px`})
                                        tran.find('.word b').html(txt);
                                        tran.attr('id', data.id);
                                        tran.find('.phonetic span').html(data.phonetic);
                                        tran.find('.meaning div span').html(data.interpretation);
                                        tran.find('.example div span').html(data.example);
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