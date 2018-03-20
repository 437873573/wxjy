//提示框动画
function pop(txt, color) {
    if(!$('.popprompt')[0]){
        $(`<div class="popprompt">看什么看，做题</div>`).appendTo('body')
    }
    let bg = color ? color : '#00e290'
    $('.popprompt').text('').text(txt).css('background', bg).removeClass('off').addClass('on')
    setTimeout(() => {
        $('.popprompt').removeClass('on').addClass('off')
    }, 2000)
}

export {pop}