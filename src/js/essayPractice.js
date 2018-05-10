import './modules/header';

$(function () {
    $('.question-list li h5').click(function () {
        let par=$(this).closest('li')
        if (par.hasClass('show')) {
            par.removeClass('show').find('.essay-title').slideUp()
        } else {
            par.addClass('show').find('.essay-title').slideDown()
        }
    })
    $('.question-list .but').click(function () {
        let par = $(this).closest('li')
        par.find('.essay-title').slideUp(function () {
            par.off('click').find('.essay-content').slideDown().end().siblings().hide()
        })
    })
    $('.answer-content div').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        let n = $(this).index()
        $('.do-answer>div').eq(n).show().siblings().hide()
    })
    var x='';
    $('.cut').click(function () {
        if(x==''){
            pop('你没有选择任何单词','red')
        }
    });
    $('.essay-content').mousedown(()=>{
        if(x!=''){
            x=''
        }
    })
    $('.essay-content').mouseup(()=>{
        if(x==''){
            x=funGetSelectTxt();
        }
    });
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
})