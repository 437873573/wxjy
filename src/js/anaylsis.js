import './modules/header';

$(function () {
    let collect = [], arr = [], tlist = $('.testlist ul');
    arr = $('.clicked').parent().attr('href');
    $(arr.split('&')).each((i, v) => {
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
        arr = '';
        collect = [];
        $(this).find('li').addClass('clicked').end().siblings().find('li').removeClass('clicked');
        $('.collect i').removeClass('icon-collection1').addClass('icon-collection');
        arr = $('.clicked').parent().attr('href');
        $(arr.split('&')).each((i, v) => {
            collect.push(v.split('=')[1])
            // console.log(collect)
        });
        $('.translation').hide()
    });
    $('.domark').click(() => {
        $('#domark').text($.trim($('.iframe').contents().find('.mymark').text()));
        $('.writeMark').show()
    });
    $('.writeMark .head p').click(() => {
        $('.writeMark').hide()
    });
    $('.repwrong').click(() => {
        $('.reportWrong').show()
    });
    $('.reportWrong .head p').click(() => {
        $('.reportWrong').hide()
    });

    //收藏
    $('.collect').click(() => {
        if ($('.collect i').hasClass('icon-collection')) {
            $.ajax({
                url: '/api/collect',
                type: 'POST',
                data: {test_topic_id: collect[1], test_volume_id: collect[0]},
                success: function (mess) {
                    if (mess.code == 0) {
                        pop('收藏成功')
                        $('.collect i').removeClass('icon-collection').addClass('icon-collection1')
                    }
                },
            })
        } else {
            pop('已添加收藏', '#fa8c16')
        }
    });

    //笔记提交
    $('.writeMarkBox .but').click(() => {
        let mark = $('#domark').val();
        // console.log($('.iframe').get(0))
        $('.writeMarkBox').hide();
        if (!mark) return;
        $.ajax({
            url: '/api/save_note',
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
                }
            },
        });
    });

    //报错
    $('.reportWrongBox .but').click(() => {
        let mark = $('.reportWrong textarea').val();
        // console.log($('.iframe').get(0))
        $('.reportWrongBox').hide()
        if (!mark) return
        $.ajax({
            url: '/api/report',
            type: 'POST',
            data: {
                content: mark,
                test_topic_id: collect[1],
                test_volume_id: collect[0]
            },
            success: function (mess) {
                if (mess && mess.code == 0) {
                    pop('提交成功，感谢您的帮助');
                }
            },
        })
    });

    //添加生词
    $('.translation .addWord').click(function () {
        if ($(this).attr('id') != 0) {
            if ($(this).hasClass('added')) return;
            $.ajax({
                url: '/api/word/mark',
                type: 'post',
                data: {word_id: $(this).attr('id')},
                success: function (mess) {
                    if (mess.code == 0) {
                        pop('添加成功');
                        $('.translation .but').addClass('added').text('已添加到生词本')
                    }
                }
            })
        }
    });
    //隐藏划词浮层
    $(document).click(function (e) {
        if (e.target !== $('.translate')[0] && $('.translate').css('display') == 'block') {
            $('.translate').hide()
        }
    });

    //显示历史记录（如果有）
    $('.translation .select input').click(() => {
        if ($('.selRec').is(':hidden')) {
            $.get('/api/word/history', function (mess) {
                if (mess && mess.code === 0 && mess.data.histories.length >= 1) {
                    $('.selRec ul').html('');
                    $.each(mess.data.histories, (i, v) => {
                        $(`<li class="clearfix">
                                <span class="fl">${v.word}</span>
                                <span class="fr">${v.total}人搜索过</span>
                            </li>`).appendTo('.selRec ul')
                    });
                    $('.selRec').show()
                }
            })
        }
    });
    //划词输入框查询单词功能
    $('.translation .select .btn').click(function () {
        let w = $(this).siblings('input').val();
        $.get('/api/word/query', {word: w, type: 'search'}, function (mess) {
            if (mess && mess.code === 0) {
                let tran = $('.translation'), data = mess.data.word;
                tran.find('.word b').html(w);
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
            }
            $('.selRec').hide()
        })
    });
    //关闭
    $('.translation .tran-close').click(() => $('.translation').hide());
    //清空历史记录
    $('.selRec .clearRec').click(() => {
        $.post('/api/word/clear');
        $('.selRec').hide()
    });
    //获取历史记录的单词
    $('.selRec ul').click(function (e) {
        if ($(e.target).hasClass('fl')) {
            let q = $(e.target).text();
            $('.translation .select input').val(q);
        }
        $('.selRec').hide()
    });
    //显示划词报错页面
    $('.translation .abut>span').click(() => $('.wordBug').show());
    //划词报错
    $('.wordBug .sub').click(function () {
        let id = $(this).closest('.translation').attr('id');
        let subtype = $('.translation input[name=type]:checked').val();
        let con = $('.translation .wordBug textarea').val();
        if (subtype && con) {
            $.post('/api/report', {type: 2, word_id: id, subtype: subtype, content: con});
        }
        $('.wordBug').hide()
    });
    //划词报错关闭
    $('.wordBug .o').click(() => $('.wordBug').hide());
    //添加单词笔记
    $('.translation .foot .doWordMark').click(() => {
        let w = $('.translation .wordMark p').html();
        $('.translation .addWordMark textarea').val(w);
        $('.addWordMark').show();
        $('.translation .foot').hide()
    });
    //提交笔记
    $('.addWordMark .sub').click(function () {
        let id = $(this).closest('.translation').attr('id');
        let con = $(this).siblings('textarea').val();
        $('.addWordMark').hide();
        $('.translation .foot').show();
        if (con == '') return;
        $.post('/api/word/mark', {word_id: id, note_content: con}, function (mess) {
            if (mess && mess.code == 0) {
                $('.translation .wordMark').show().find('p').html(con);
            }
        })
    });
    //关闭做笔记
    $('.addWordMark .o').click(() => {
        $('.addWordMark').hide();
        $('.translation .foot').show()
    });
    //展开详细考法（如果有）
    $('.translation .moreMeaning').click(function () {
        $(this).find('p').slideToggle()
    })
});






