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
    //视频点赞操作
    $('.title-zan').click(function () {
        let that = this;
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

    getComment();

    //获取评论列表
    function getComment(num) {
        let order = $('.butn-sort').val();
        $.get(`/api/volume/video/${id}`, {page: num ? num : 1, order: order}, function (mess) {
            if (mess.code === 0 && !$.isEmptyObject(mess.data)) {
                if (mess.data.comments.total > 0) {
                    let data = mess.data.comments;
                    $('.commont-list h3 span').text(data.total);
                    $('.commont-list ul').html('');
                    if (data.next_page_url || data.prev_page_url) {
                        $('.page-navgator').show();
                        $('.page-navgator a:first-child').attr({
                            'class': data.prev_page_url ? '' : 'disabled',
                            'data-url': data.prev_page_url
                        });
                        $('.page-navgator a:last-child').attr({
                            'class': data.next_page_url ? '' : 'disabled',
                            'data-url': data.next_page_url
                        })
                    }
                    if (data.data.length > 0) {
                        let comments = data.data;
                        let lis = '';
                        $.each(comments, (i, v) => {
                            lis += `<li>
                                    <div class="left">
                                        ${v.avatar ?
                                `<img src=${v.avatar} alt="">` :
                                `<img src="/static/imgs/header.png" alt="">`}
                                    </div>
                                    <div class="right">
                                        <p class="title">${v.nickname}</p>
                                        <p>${v.content}</p>
                                        <p class="foot" data-comment-id=${v.comment_id}>
                                        ${v.is_voted ?
                                `<span class="added-zan"><i class="icon-video-zan"></i> 赞同 <span>${v.vote_count}</span></span>` :
                                `<span><i class="icon-video-nozan"></i> 赞同 <span>${v.vote_count}</span></span>`}
                                            <!--<span><i class="icon-video-message"></i> 评论 <span>2</span></span>-->
                                            <!--<span><i class="icon-video-share"></i> 分享 <span>2</span></span>-->
                                            <span class="fr">${v.created_at}</span>
                                        </p>
                                    </div>
                                </li>`
                        });
                        $(lis).appendTo('.commont-list ul')
                    }
                } else if (mess.code === 0 && mess.data.comments.total === 0) {
                    $('.commont-list h3 span').text(0);
                    $('.commont-list ul').html(`<span>暂无评论</span>`)
                }
            }
        })
    }

    //评论点赞
    $('.commont-list ul').on('click', '.foot>span:first-of-type', function () {
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

    //发表评论
    $('.form-wrapper input').click(function () {
        let c = $(this).siblings('textarea').val(), that=this;
        $.post('/api/volume/addComment', {test_volume_id: id, content: c}, function (mess) {
            if (mess.code === 0 && !$.isEmptyObject(mess.data)) {
                if (mess.data.comment) {
                    let h = $('.commont-list').offset().top - 100;
                    $('html,body').animate({'scrollTop': h},800);
                    $(that).siblings('textarea').val('');
                    let comment = mess.data.comment;
                    let li = `<li class="newComment">
                            <div class="left">
                                ${comment.user.avatar ?
                        `<img src=${comment.user.avatar} alt="">` :
                        `<img src="/static/imgs/header.png" alt="">`}
                            </div>
                            <div class="right">
                                <p class="title">${comment.user.nickname}</p>
                                <p>${comment.content}</p>
                                <p class="foot" data-comment-id=${comment.id}>
                                    <span><i class="icon-video-nozan"></i> 赞同 <span>0</span></span>
                                    <!--<span><i class="icon-video-message"></i> 评论 <span>2</span></span>-->
                                    <!--<span><i class="icon-video-share"></i> 分享 <span>2</span></span>-->
                                    <span class="fr">${comment.created_at}</span>
                                </p>
                            </div>
                        </li>`;
                    $(li).prependTo('.commont-list ul');
                    let remC=setTimeout(()=>$(li).removeClass('newComment'),2000)
                }
            }
        })
    });

    //筛选条件改变
    $('.butn-sort').change(() => {
        getComment()
    });
    //分页
    $('.page-navgator a').click(function () {

        if ($(this).data('url')) {
            let h = $('.commont-list').offset().top - 100;
            $('html,body').animate({'scrollTop': h});

            function getCaption(obj) {
                let index = obj.lastIndexOf("=");
                obj = obj.substring(index + 1, obj.length);
                return obj;
            }

            let num = getCaption($(this).data('url'));
            getComment(num);

        }

    });

    function jia(that, c1, c2) {
        $(that).addClass('added-zan').find('span').text(parseInt($(that).find('span').text()) + 1).end().find('i').removeClass(c1).addClass(c2)
    }

    function jian(that, c1, c2) {
        $(that).removeClass('added-zan').find('span').text(parseInt($(that).find('span').text()) - 1).end().find('i').removeClass(c1).addClass(c2)
    }
});