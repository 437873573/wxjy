import './modules/header';

$(function () {
    $('.new-go').click(()=>{
        $('.reorco').show()
    });
    $('.reorco a').click(function (e) {
        e.stopPropagation();
        $('.reorco').hide()
    })
});