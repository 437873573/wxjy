import './modules/header';

$(function () {
    $('.question-list li h5').click(function () {
        let par=$(this).closest('li')
        if (par.hasClass('show')) {
            par.removeClass('show').find('.essay-title').slideUp()
        } else {
            let x=par.closest('ul').scrollTop()
            par.addClass('show').find('.essay-title').slideDown(function () {

            })

            var li_show_count = par.prevAll('.show').size();
            var li_hide_count = par.prevAll().size() - li_show_count;

            var y = li_show_count * 349 + li_hide_count * 69;


            // let y=x+280
            par.closest('ul').animate({scrollTop:y})
        }
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
})