// var options = {
//   "controls": true,
//   "autoplay": false,
//   "preload": "auto",
//   "loop": false,
//   width: 1200,
//   height: 616,
//   controlBar: {
//     captionsButton: false,
//     chaptersButton: false,
//     playbackRateMenuButton: true,
//     LiveDisplay: true,
//     subtitlesButton: false,
//     remainingTimeDisplay: true,
//
//     progressControl: true,
//   }
// };
//
// var player = videojs('my-player', options, function onPlayerReady() {
//   videojs.log('Your player is ready!');
//
//   // In this context, `this` is the player that was created by Video.js.
//   this.play();
//
//   // How about an event listener?
//   this.on('ended', function () {
//     videojs.log('Awww...over so soon?!');
//   });
// });
//
// $('.js-more-class').on('click', function (e) {
//   e.preventDefault();
//   $('.js-video-right').toggleClass('show');
// })
import './modules/header'
$(function () {
    $('.title-zan').click(function () {
        let id=$(this).parent().data('testVolumeId'),that=this;
        if(!$(this).hasClass('added-zan')){
            $.post('/volume/vote',{test_volume_id:id,vote_type:1},function (mess) {
                if(mess&&mess.code===0){jia(that,'icon-video-nozan-big','icon-video-zan-big')}
            })
        }else{
            $.post('/volume/vote',{test_volume_id:id,vote_type:0},function (mess) {
                if(mess&&mess.code===0){jian(that,'icon-video-zan-big','icon-video-nozan-big')}
            })
        }
    });
    $('.foot>span:first-of-type').click(function () {
        let id=$(this).parent().data('commentId'),that=this;
        if(!$(this).hasClass('added-zan')){
            $.post('/comment/vote',{comment_id:id,vote_type:1},function (mess) {
                if(mess&&mess.code===0){jia(that,'icon-video-nozan','icon-video-zan')}
            })
        }else{
            $.post('/comment/vote',{comment_id:id,vote_type:0},function (mess) {
                if(mess&&mess.code===0){jian(that,'icon-video-zan','icon-video-nozan')}
            })
        }
    });
    $('.form-wrapper input').click(function () {
        let id=$(this).parent().data('testVolumeId'),c=$(this).siblings('textarea').val();
        $.post('/volume/addComment',{test_volume_id:id,content:c},()=>window.location.reload())
    });
    function jia(that,c1,c2) {
        $(that).addClass('added-zan').find('span').text(parseInt($(that).find('span').text())+1).end().find('i').removeClass(c1).addClass(c2)
    }
    function jian(that,c1,c2) {
        $(that).removeClass('added-zan').find('span').text(parseInt($(that).find('span').text())-1).end().find('i').removeClass(c1).addClass(c2)
    }
});