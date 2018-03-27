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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
    console.info("RUN");
    var soso = $('.page-header__search input').val();
    if (soso && soso.length > 0) {
        window.open('/search?keywords=' + soso, '_blank');
        console.info(soso);
    }
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

$(function () {
    $('.iframe', window.parent.document).css('height', $('body').outerHeight() + 20);
    var play = undefined,
        audio = $('.audio').get(0);
    $('.icon-mp3-play').click(function () {
        if (!$(this).hasClass('p')) {
            $(this).addClass('p');
            audio.play();
            play = setInterval(function () {
                var tt = audio.duration,
                    ct = audio.currentTime;
                $('.userright .rate').width(ct / tt * 280);
            }, 1000);
        } else {
            $(this).removeClass('p');
            audio.pause();
            clearInterval(play);
        }
    });
    //讨论与解析切换
    $('.discuss .left header div').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        // console.log(index)
        $('.discuss .left footer .content').eq(index).removeClass('hidden').siblings().addClass('hidden');
    });
    //评论
    $('.post p').click(function () {
        var comment = $('.post textarea').val();
        var collect = [];
        var arr = $('.clicked', window.parent.document).parent().attr('href');
        $(arr.split('&')).each(function (i, v) {
            collect.push(v.split('=')[1]);
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
            success: function success(mess) {
                if (mess.code == 0) {
                    window.parent.pop('评论成功');
                    window.location.reload();
                } else {
                    window.parent.pop('评论失败，请重试', 'red');
                }
            }
        });
    });
    //点赞
    $('.feature span:first-of-type').click(function () {
        // console.log($(this).find('b').text())
        // console.log($(this).closest('li'))
        var zan = parseInt($(this).find('b').text());
        if ($(this).find('b').hasClass('zaned')) {
            return;
        } else {
            zan++;
            $(this).find('b').text('' + zan).addClass('zaned');
            var id = $(this).closest('li').data().commentId;
            $.ajax({
                url: '/api/comment/like',
                type: 'POST',
                data: { comment_id: id },
                success: function success(mess) {}
            });
        }
    });

    //划词翻译
    function selectWord(eleShare, eleContainer) {
        function funGetSelectTxt() {
            var txt = "";
            if (document.selection) {
                txt = document.selection.createRange().text; // IE
            } else {
                    txt = document.getSelection();
                }
            var t = txt.toString().split(' ').shift();
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
            var left = pw - 1200 >= 0 ? (pw - 1200) / 2 + e.clientX - 40 : e.clientX - 40,
                top = e.clientY + sh + 240;
            // var left = e.clientX + 300, top = e.clientY + sh + 240
            if (txt) {
                $.ajax({
                    // url:'http://wxjy-mingyang.mion.cn/api/word/query',
                    url: '/api/word/query',
                    data: { word: txt },
                    success: function success(mess) {
                        if (mess.code === 0 && mess.data.word) {
                            var data = mess.data.word;
                            eleShare.css({ "display": "block", "left": left + 'px', "top": top + 'px' });
                            eleShare.find('.word b').html(txt);
                            eleShare.find('.phonetic span').html(data.phonetic);
                            eleShare.find('.meaning div span').html(data.interpretation);
                            eleShare.find('.example div span').html(data.example);
                            if (data.is_marked) {
                                eleShare.find('.but').attr('id', 0);
                                eleShare.find('.but').text('已添加到生词本');
                            } else {
                                eleShare.find('.but').attr('id', data.id);
                                eleShare.find('.but').text('添加到生词本');
                            }
                        } else {
                            eleShare.css("display", "none");
                        }
                    }
                });
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

    function hoverWord(tran, ele) {
        ele.mouseover(function (e) {
            if (tran.css('display') == 'none') {
                e = e || window.event;
                var txt = $(this).text(),
                    pw = window.parent.document.documentElement.clientWidth,
                    sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                var left = pw - 1200 >= 0 ? (pw - 1200) / 2 + e.clientX - 40 : e.clientX - 40,
                    top = e.clientY + sh + 240;
                if (txt) {
                    $.ajax({
                        url: '/api/word/query',
                        data: { word: txt },
                        success: function success(mess) {
                            if (mess.code === 0 && mess.data.word) {
                                var data = mess.data.word;
                                tran.css({ "display": "block", "left": left + 'px', "top": top + 'px' });
                                tran.find('.word b').html(txt);
                                tran.find('.phonetic span').html(data.phonetic);
                                tran.find('.meaning div span').html(data.interpretation);
                                tran.find('.example div span').html(data.example);
                                if (data.is_marked) {
                                    tran.find('.but').attr('id', 0);
                                    tran.find('.but').addClass('added').text('已添加到生词本');
                                } else {
                                    tran.find('.but').attr('id', data.id);
                                    tran.find('.but').removeClass('added').text('添加到生词本');
                                }
                            } else {
                                tran.css("display", "none");
                            }
                        }
                    });
                } else {
                    tran.css("display", "none");
                }
            }
        });
    };
    var translate = $('.translation', window.parent.document);
    hoverWord(translate, $('.inner>section .translate'));
    $(document).click(function (e) {
        if (e.target !== translate[0] && translate.css('display') == 'block') {
            translate.hide();
        }
    });
});

/***/ })
/******/ ]);
//# sourceMappingURL=anaylsisDetail.js.map