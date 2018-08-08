/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _prompt = __webpack_require__(2);

global.pop = _prompt.pop;
// 导航
var timer = null;
var loginInfo = $('.js-login-info');
var tipsUser = $('.js-tips-user');
loginInfo.on('mouseenter', function () {
    clearTimeout(timer);
    tipsUser.show();
    $.ajax({
        url: '/api/plan/info',
        data: {},
        success: function success(json) {
            if (json && json.plan) {
                var plan = json.plan;
                var today_complete_rate = plan.today_complete_rate;
                $('.circle circle[stroke-dasharray]').attr('stroke-dasharray', today_complete_rate * 2 + ' ' + (200 - today_complete_rate * 2));
                $('.circle span').html(today_complete_rate + '%');
            }
        }
    });
});
loginInfo.on('mouseleave', function () {
    timer = setTimeout(function () {
        tipsUser.hide();
    }, 300);
});

tipsUser.on('mouseenter', function () {
    clearTimeout(timer);
});

tipsUser.on('mouseleave', function () {
    timer = setTimeout(function () {
        tipsUser.hide();
    }, 300);
});

var btnSoso = $('.page-header__search .butn-soso');
btnSoso.on('click', function () {
    // console.info("RUN");
    var soso = $('.page-header__search input').val();
    if (soso && soso.length > 0) {
        window.open('/search?keywords=' + soso, '_blank');
        $('.page-header__search input').val('');
        // console.info(soso);
    }
});
$(".page-header__search input").keyup(function () {
    $(document).keypress(function (e) {
        // 回车键事件
        if (e.which == 13) {
            var soso = $('.page-header__search input').val();
            if (soso && soso.length > 0) {
                window.open('/search?keywords=' + soso, '_blank');
                // console.info(soso);
            }
        }
    });
});
if (location.hostname == 'localhost') {
    $.ajaxSetup({
        beforeSend: function beforeSend(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU0MDQ0MDQxZDA0M2RjMDgyYWJjNDA4OTg2OTlmZjc5ZjFmNzA0ZDgxNzEwNGYwYjVmYmYzY2ZjZjhmOWM4MTdiMzBhYjRiOWNmMTk3NDUyIn0.eyJhdWQiOiI2IiwianRpIjoiNTQwNDQwNDFkMDQzZGMwODJhYmM0MDg5ODY5OWZmNzlmMWY3MDRkODE3MTA0ZjBiNWZiZjNjZmNmOGY5YzgxN2IzMGFiNGI5Y2YxOTc0NTIiLCJpYXQiOjE1MjA2NzcxMDgsIm5iZiI6MTUyMDY3NzEwOCwiZXhwIjoxNTUyMjEzMTA4LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.3irFbm_3KpOt6F4RsqJBsNH6NnvagJqLbRX3gPl_8uCJySMYpBBvDTXtMTmNqxTg02qviGTkw2gQw0e366keWAwP9ShKHfZQlS3uOINUzNBciB5BUFwP7PdFpgyPXVs5aCSU48Bmwb-QAZEv2rrX5CYGF0cxYjvDRjFWrGJwSiED9lxRva78057ioFicMeGsdVZjacqjzHzEi4EQHbaYt3KgT6z3EucFXcxk5ZyB9wlaXtdfrJ1JlPA4rv4bN-m6AYUVXOFy_XKLUU2_13xYIL3a0qVCL6_xMQxIueHvdi-46gwvTIkKfmbJSSpOcfuuUp3SG0i7YA4d5XArXuGRKO4iQ8aFQ0KBh8ot5n5MfdSVK9ZpA5-Ym-5O1NSbcnxDHYWj2XGzwqoSQrLGP9R-ijX0eITN7rcGfnIEgHYTwgIya8O7Rd6qqvQ-QCgX5PuxSSwlvBKpf49ENJxrX_CQY0d8Fh0R6zB5orsEzR6wQhOhzTi0OJuTgRq6V9Qc91PGBZVJKwE3Xxip3Mcf3wxTKEKgAdBb-I5cSbVgeZJN4eIC5ik0ASLrSaroQyMLe9xT7OOCnm1vA-A6iEWJcx7NIzsrfhEtCgSDs11pnQr70ltgLSdYoWi8NwSXpo37EP4io8ozRCC2qnuE3TlfqMzgJ14AlgXmipySWhhVrhuKtzw");
            settings.url = "http://wxjy-mingyang.mion.cn" + settings.url;
        }
    });
} else {
    $.ajaxSetup({
        beforeSend: function beforeSend(xhr) {
            window.WXJY = WXJY || {};
            if (typeof WXJY.csrfToken !== 'undefined') {
                xhr.setRequestHeader("X-CSRF-TOKEN", WXJY.csrfToken);
            }
        }
    });
}
$.ajaxSetup({
    statusCode: {
        200: function _(mess) {
            if (!mess.code == 0) {
                (0, _prompt.pop)(mess.message, '#fa8c16');
            }
        },
        401: function _() {
            window.location.href = '/login';
        },
        500: function _() {
            (0, _prompt.pop)('网络异常，请稍后再试', 'red');
        }
    },
    error: function error(mess) {
        if (mess.error == 'Unauthenticated.') {
            window.location.href = '/login';
        }
    },
    withCredentials: true
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g;

// This works in non-strict mode
g = (function () {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//提示框动画


Object.defineProperty(exports, '__esModule', {
    value: true
});
function pop(txt, color) {
    if (!$('.popprompt')[0]) {
        $('<div class="popprompt">看什么看，做题</div>').appendTo('body');
    }
    var bg = color ? color : '#00e290';
    $('.popprompt').text('').text(txt).css('background', bg).removeClass('off').addClass('on');
    setTimeout(function () {
        $('.popprompt').removeClass('on').addClass('off');
    }, 2000);
}

exports.pop = pop;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


__webpack_require__(0);

$(function () {
    var id = $('.page-content').data('testVolumeId');
    //视频点赞操作
    $('.title-zan').click(function () {
        var that = this;
        if (!$(this).hasClass('added-zan')) {
            $.post('/api/volume/vote', { test_volume_id: id, vote_type: 1 }, function (mess) {
                if (mess && mess.code === 0) {
                    jia(that, 'icon-video-nozan-big', 'icon-video-zan-big');
                }
            });
        } else {
            $.post('/api/volume/vote', { test_volume_id: id, vote_type: 0 }, function (mess) {
                if (mess && mess.code === 0) {
                    jian(that, 'icon-video-zan-big', 'icon-video-nozan-big');
                }
            });
        }
    });

    getComment();

    //获取评论列表
    function getComment(num) {
        var order = $('.butn-sort').val();
        $.get('/api/volume/video/' + id, { page: num ? num : 1, order: order }, function (mess) {
            if (mess.code === 0 && !$.isEmptyObject(mess.data)) {
                if (mess.data.comments.total > 0) {
                    var data = mess.data.comments;
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
                        });
                    }
                    if (data.data.length > 0) {
                        var comments = data.data;
                        var lis = '';
                        $.each(comments, function (i, v) {

                            var children_html = '';
                            if (v.children.length > 0) {
                                children_html = '<ul class="advice-sub">';
                                $.each(v.children, function (i2, v2) {
                                    children_html += '<li>\n                                        <div class="left">\n                                            ' + (v2.user.avatar ? '<img src=' + v2.user.avatar + ' alt="">' : '<img src="/static/imgs/header.png" alt="">') + '\n                                        </div>\n                                        <div class="right">\n                                            <p class="title">' + v2.user.nickname + '</p>\n                                            <p>' + v2.content + '</p>\n                                        </div>\n                                    </li>';
                                });
                                children_html += '</ul>';
                            }
                            lis += '<li data-comment-id=' + v.id + '>\n                                    <div class="advice-par clearfix">\n                                        <div class="left">\n                                            ' + (v.user.avatar ? '<img src=' + v.user.avatar + ' alt="">' : '<img src="/static/imgs/header.png" alt="">') + '\n                                        </div>\n                                        <div class="right">\n                                            <p class="title">' + v.user.nickname + '</p>\n                                            <p>' + v.content + '</p>\n                                            <p class="foot">\n                                            ' + (v.is_voted ? '<span class="added-zan"><i class="icon-video-zan"></i> 赞同 <span>' + v.vote_count + '</span></span>' : '<span><i class="icon-video-nozan"></i> 赞同 <span>' + v.vote_count + '</span></span>') + '\n                                                <span><i class="icon-video-message"></i> 评论 <span class="connum">' + v.children.length + '</span></span>\n                                                <!--<span><i class="icon-video-share"></i> 分享 <span>2</span></span>-->\n                                                <span class="fr">' + v.created_at + '</span>\n                                            </p>\n                                        </div>\n                                        </div>\n                                        ' + children_html + '\n                                    </li>';
                        });

                        $(lis).appendTo('.commont-list ul');
                    }
                } else if (mess.code === 0 && mess.data.comments.total === 0) {
                    $('.page-navgator').hide();
                    $('.commont-list h3 span').text(0);
                    $('.commont-list ul').html('');
                    $('<span>暂无评论</span>').prependTo($('.commont-list'));
                }
            }
        });
    }

    //评论点赞
    $('.commont-list ul').on('click', '.foot>span:first-of-type', function () {
        var id = $(this).closest('li').data('commentId'),
            that = this;
        if (!$(this).hasClass('added-zan')) {
            $.post('/api/comment/vote', { comment_id: id, vote_type: 1 }, function (mess) {
                if (mess && mess.code === 0) {
                    jia(that, 'icon-video-nozan', 'icon-video-zan');
                }
            });
        } else {
            $.post('/api/comment/vote', { comment_id: id, vote_type: 0 }, function (mess) {
                if (mess && mess.code === 0) {
                    jian(that, 'icon-video-zan', 'icon-video-nozan');
                }
            });
        }
    });
    //参与评论
    $('.commont-list ul').on('click', '.foot>span:nth-of-type(2)', function () {
        var _this = this;

        if (!$(this).hasClass('s')) {
            $('<div class="advice-adv clearfix">\n                    <textarea placeholder=\'请输入内容\'></textarea>\n                    <p>提交</p>\n                </div>').insertAfter($(this).closest('.advice-par'));
            $(this).addClass('s').closest('.advice-par').siblings('.advice-adv').slideDown();
        } else {
            $(this).removeClass('s').closest('.advice-par').siblings('.advice-adv').slideUp(function () {
                return $(_this).closest('.advice-par').siblings('.advice-adv').remove();
            });
        }
    });
    //参与评论提交
    $('.commont-list ul').on('click', '.advice-adv p', function () {
        var comment = $('.advice-adv textarea').val();
        var pid = $(this).closest('li').data('commentId');
        var that = this;
        $.post('/api/volume/addComment', {
            content: comment,
            test_volume_id: id,
            pid: pid
        }, function (mess) {
            if (mess && mess.code === 0) {
                if ($.isEmptyObject(mess.data.comment)) {
                    return;
                }
                var $parent = $(that).closest('li');
                var $connum = $parent.find('.connum');
                var t = parseInt($connum.text());
                t++;
                $connum.text(t);

                $('.advice-sub', $parent).size() || $('.advice-par', $parent).after($('<ul/>', { 'class': 'advice-sub' }));

                $(that).parent().remove();
                $('<li>\n                    <div class="left">\n                        ' + (mess.data.comment.user.avatar ? '<img src=' + mess.data.comment.user.avatar + ' alt="">' : '<img src="/static/imgs/header.png" alt="">') + '\n                    </div>\n                    <div class="right">\n                        <p class="title">' + mess.data.comment.user.nickname + '</p>\n                        <p>' + mess.data.comment.content + '</p>\n                    </div>\n                </li>').prependTo($('.advice-sub', $parent));
                $connum.parent().removeClass('s');
            }
        });
    });
    //发表评论
    $('.form-wrapper input').click(function () {
        var c = $(this).siblings('textarea').val(),
            that = this;
        $.post('/api/volume/addComment', { test_volume_id: id, content: c }, function (mess) {
            if (mess.code === 0 && !$.isEmptyObject(mess.data)) {
                if (mess.data.comment) {
                    (function () {
                        var h = $('.commont-list').offset().top - 100;
                        $('html,body').animate({ 'scrollTop': h }, 800);
                        $(that).siblings('textarea').val('');
                        var comment = mess.data.comment;
                        var li = '<li class="newComment" data-comment-id=' + comment.id + '>\n                                    <div class="advice-par clearfix">\n                                    <div class="left">\n                                        ' + (comment.user.avatar ? '<img src=' + comment.user.avatar + ' alt="">' : '<img src="/static/imgs/header.png" alt="">') + '\n                                    </div>\n                                    <div class="right">\n                                        <p class="title">' + comment.user.nickname + '</p>\n                                        <p>' + comment.content + '</p>\n                                        <p class="foot">\n                                            <span><i class="icon-video-nozan"></i> 赞同 <span>0</span></span>\n                                            <span><i class="icon-video-message"></i> 评论 <span class="connum">0</span></span>\n                                            <!--<span><i class="icon-video-share"></i> 分享 <span>2</span></span>-->\n                                            <span class="fr">' + comment.created_at + '</span>\n                                        </p>\n                                    </div>\n                                    </div>\n                                </li>';
                        $('.commont-list>span').remove();
                        $(li).prependTo('.commont-list>ul');
                        var remC = setTimeout(function () {
                            return $(li).removeClass('newComment');
                        }, 2000);
                    })();
                }
            }
        });
    });

    //筛选条件改变
    $('.butn-sort').change(function () {
        getComment();
    });
    //分页
    $('.page-navgator a').click(function () {

        if ($(this).data('url')) {
            var getCaption = function getCaption(obj) {
                var index = obj.lastIndexOf("=");
                obj = obj.substring(index + 1, obj.length);
                return obj;
            };

            var h = $('.commont-list').offset().top - 100;
            $('html,body').animate({ 'scrollTop': h });

            var num = getCaption($(this).data('url'));
            getComment(num);
        }
    });

    function jia(that, c1, c2) {
        $(that).addClass('added-zan').find('span').text(parseInt($(that).find('span').text()) + 1).end().find('i').removeClass(c1).addClass(c2);
    }

    function jian(that, c1, c2) {
        $(that).removeClass('added-zan').find('span').text(parseInt($(that).find('span').text()) - 1).end().find('i').removeClass(c1).addClass(c2);
    }
});

/***/ })
/******/ ]);
//# sourceMappingURL=courseVideo.js.map