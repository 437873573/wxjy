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
    let id = $('.page-content').data('testVolumeId');
    $('.title-zan').click(function () {
        let id = $(this).parent().data('testVolumeId'), that = this;
        if (!$(this).hasClass('added-zan')) {
            $.post('/api/volume/vote', {test_volume_id: id, vote_type: 1}, function (mess) {
                if (mess && mess.code === 0) {
                    jia(that, 'icon-video-nozan-big', 'icon-video-zan-big')
                }
            })
        } else {
            $.post('/api/volume/vote', {test_volume_id: id, vote_type: 0}, function (mess) {
                if (mess && mess.code === 0) {
                    jian(that, 'icon-video-zan-big', 'icon-video-nozan-big')
                }
            })
        }
    });
    $('.foot>span:first-of-type').click(function () {
        let id = $(this).parent().data('commentId'), that = this;
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
    $('.form-wrapper input').click(function () {
        let id = $(this).parent().data('testVolumeId'), c = $(this).siblings('textarea').val();
        $.post('/api/volume/addComment', {test_volume_id: id, content: c})
    });
    getComment();

    function getComment() {
        $.get(`/api/volume/video/${id}`, function (mess) {
            if (mess.code === 0 && mess.data.comments.total > 0) {
                let data = mess.data.comments;
                $('.commont-list h3 span').text(data.total);
                $('.commont-list ul').html('');
                if (data.next_page_url || data.prev_page_url) {

                }
                if (data.data.length > 0) {
                    let comments = data.data;
                    let lis = '';
                    $.each(comments, (i, v) => {
                        let user = v.user, comment = v.comment_votes;
                        lis += `<li>
                                    <div class="left">
                                        ${user.avatar ?
                                        `<img src=${user.avatar} alt="">` :
                                        `<img src="/static/imgs/header.png" alt="">`}
                                    </div>
                                    <div class="right">
                                        <p class="title">${user.nickname}</p>
                                        <p>${v.content}</p>
                                        <p class="foot" data-comment-id="1">
                                            <!--未赞(默认)-->
                                            <span><i class="icon-video-nozan"></i> 赞同 <span>2</span></span>
                                            <!--已赞-->
                                            <span><i class="icon-video-zan"></i> 赞同 <span>2</span></span>
                                            <!--<span><i class="icon-video-message"></i> 评论 <span>2</span></span>-->
                                            <!--<span><i class="icon-video-share"></i> 分享 <span>2</span></span>-->
                                            <span class="fr">${v.created_at}</span>
                                        </p>
                                    </div>
                                </li>`});
                    $(lis).appendTo('.commont-list ul')
                }
            } else if (mess.code === 0 && mess.data.comments.total === 0) {
                $('.commont-list h3 span').text(0);
                $('.commont-list ul').html(`<span>暂无评论</span>`)
            }
        })
    }

    function jia(that, c1, c2) {
        $(that).addClass('added-zan').find('span').text(parseInt($(that).find('span').text()) + 1).end().find('i').removeClass(c1).addClass(c2)
    }

    function jian(that, c1, c2) {
        $(that).removeClass('added-zan').find('span').text(parseInt($(that).find('span').text()) - 1).end().find('i').removeClass(c1).addClass(c2)
    }
});