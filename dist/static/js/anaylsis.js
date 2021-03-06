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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

$(function () {
    var collect = [],
        arr = [],
        tlist = $('.testlist ul');
    arr = $('.clicked').data('url');
    $(arr.split('&')).each(function (i, v) {
        collect.push(v.split('=')[1]);
        // console.log(collect)
    });
    if (parseInt(tlist.css('width')) <= 860) {
        $('.testlist').css("width", '860px');
        $('.anaylsis>header .left .prev').hide();
        $('.anaylsis>header .left .next').hide();
    }
    $('.anaylsis .left .next').click(function () {
        var l = tlist.css('left');
        var tw = -parseInt(l) + 700;
        if (parseInt(tlist.css('width')) > 700 && tw < parseInt(tlist.css('width'))) {
            tlist.animate({ left: parseInt(l) - 700 + 'px' });
        }
    });
    $('.anaylsis .left .prev').click(function () {
        var l = tlist.css('left');
        if (parseInt(tlist.css('width')) > 700 && parseInt(l) < 0) {
            tlist.animate({ left: parseInt(l) + 700 + 'px' });
        }
    });
    $('.testlist ul li').click(function () {
        arr = '';
        collect = [];
        $(this).addClass('clicked').siblings().removeClass('clicked');
        $('.collect i').removeClass('icon-collection1').addClass('icon-collection');
        arr = $('.clicked').data('url');
        $(arr.split('&')).each(function (i, v) {
            collect.push(v.split('=')[1]);
            // console.log(collect)
        });
        $('.iframe')[0].contentWindow.location.replace(arr);
        var marked = $('.iframe').contents().find('.inner').data('mark');
        $('.translation').hide();
    });
    $('.domark').click(function () {
        $('#domark').text($.trim($('.iframe').contents().find('.mymark').text()));
        $('.writeMark').show();
    });
    $('.writeMark .head p').click(function () {
        $('.writeMark').hide();
    });
    $('.repwrong').click(function () {
        $('.reportWrong').show();
    });
    $('.reportWrong .head p').click(function () {
        $('.reportWrong').hide();
    });

    //收藏
    $('.collect').click(function () {
        if ($('.collect i').hasClass('icon-collection')) {
            $.ajax({
                url: '/api/collect',
                type: 'POST',
                data: { test_topic_id: collect[1], test_volume_id: collect[0] },
                success: function success(mess) {
                    if (mess.code == 0) {
                        pop('收藏成功');
                        $('.collect i').removeClass('icon-collection').addClass('icon-collection1');
                    }
                }
            });
        } else {
            pop('已添加收藏', '#fa8c16');
        }
    });

    //笔记提交
    $('.writeMarkBox .but').click(function () {
        var mark = $('#domark').val();
        // console.log($('.iframe').get(0))
        $('.writeMarkBox').hide();
        if (!mark) return;
        $.ajax({
            url: '/api/save_note',
            type: 'POST',
            data: {
                note_content: mark,
                test_topic_id: collect[1],
                test_volume_id: collect[0]
            },
            success: function success(mess) {
                if (mess.code == 0) {
                    pop('笔记添加成功');
                    $('.iframe').contents().find('.mymark').text(mark);
                }
            }
        });
    });

    //报错
    $('.reportWrongBox .but').click(function () {
        var mark = $('.reportWrong textarea').val();
        // console.log($('.iframe').get(0))
        $('.reportWrongBox').hide();
        if (!mark) return;
        $.ajax({
            url: '/api/report',
            type: 'POST',
            data: {
                content: mark,
                test_topic_id: collect[1],
                test_volume_id: collect[0]
            },
            success: function success(mess) {
                if (mess && mess.code == 0) {
                    pop('提交成功，感谢您的帮助');
                }
            }
        });
    });

    //添加生词
    $('.translation .addWord').click(function () {
        if ($(this).attr('id') != 0) {
            if ($(this).hasClass('added')) return;
            $.ajax({
                url: '/api/word/mark',
                type: 'post',
                data: { word_id: $(this).attr('id') },
                success: function success(mess) {
                    if (mess.code == 0) {
                        pop('添加成功');
                        $('.translation .but').addClass('added').text('已添加到生词本');
                    }
                }
            });
        }
    });

    //隐藏划词浮层
    $(document).click(function (e) {
        if (e.target !== $('.translate')[0] && $('.translate').css('display') == 'block') {
            $('.translate').hide();
        }
    });

    //显示历史记录（如果有）
    $('.translation .select input').click(function () {
        if ($('.selRec').is(':hidden')) {
            $.get('/api/word/history', function (mess) {
                if (mess && mess.code === 0 && mess.data.histories.length >= 1) {
                    $('.selRec ul').html('');
                    $.each(mess.data.histories, function (i, v) {
                        $('<li class="clearfix">\n                                <span class="fl">' + v.word + '</span>\n                                <span class="fr">' + v.total + '人搜索过</span>\n                            </li>').appendTo('.selRec ul');
                    });
                    $('.selRec').show();
                }
            });
        }
    });
    //划词输入框查询单词功能
    $('.translation .select .btn').click(function () {
        var w = $(this).siblings('input').val();
        $(this).siblings('input').val('');
        $.get('/api/word/query', { word: w, type: 'search' }, function (mess) {
            if (mess && mess.code === 0) {
                var tran = $('.translation'),
                    data = mess.data.word;
                tran.find('.word b').html(w);
                tran.find('.phonetics').attr('src', 'http://dict.youdao.com/dictvoice?audio=' + w);
                tran.attr('id', data.id);
                tran.find('.phonetic span').html(data.phonetic);
                tran.find('.meaning').html(data.interpretation);
                tran.find('.example div span').html(data.example);
                if (data.test_method != '') {
                    tran.find('.moreMeaning p').html(data.test_method);
                } else {
                    tran.find('.moreMeaning').hide();
                }
                if (data.note) {
                    tran.find('.wordMark p').html(data.note.note_content);
                } else {
                    tran.find('.wordMark').hide();
                }
                if (data.is_marked) {
                    tran.find('.addWord').attr('id', 0);
                    tran.find('.addWord').addClass('added').text('已添加到生词本');
                } else {
                    tran.find('.addWord').attr('id', data.id);
                    tran.find('.addWord').removeClass('added').text('添加到生词本');
                }
            }
            $('.selRec').hide();
        });
    });
    //关闭
    $('.translation .tran-close').click(function () {
        return $('.translation').hide();
    });
    //清空历史记录
    $('.selRec .clearRec').click(function () {
        $.post('/api/word/clear');
        $('.selRec').hide();
    });
    //获取历史记录的单词
    $('.selRec ul').click(function (e) {
        if ($(e.target).hasClass('fl')) {
            var q = $(e.target).text();
            $('.translation .select input').val(q);
        }
        $('.selRec').hide();
    });
    //显示划词报错页面
    $('.translation .abut>span').click(function () {
        return $('.wordBug').show();
    });
    //划词报错
    $('.wordBug .sub').click(function () {
        var id = $(this).closest('.translation').attr('id');
        var subtype = $('.translation input[name=type]:checked').val();
        var con = $('.translation .wordBug textarea').val();
        if (subtype && con) {
            $.post('/api/report', { type: 2, word_id: id, subtype: subtype, content: con });
        }
        $('.wordBug').hide();
    });
    //划词报错关闭
    $('.wordBug .o').click(function () {
        return $('.wordBug').hide();
    });
    //发音
    $('.translation .phonetic i').click(function () {
        return $('.phonetics')[0].play();
    });
    //添加单词笔记
    $('.translation .foot .doWordMark').click(function () {
        var w = $('.translation .wordMark p').html();
        $('.translation .addWordMark textarea').val(w);
        $('.addWordMark').show();
        $('.translation .foot').hide();
    });
    //提交笔记
    $('.addWordMark .sub').click(function () {
        var id = $(this).closest('.translation').attr('id');
        var con = $(this).siblings('textarea').val();
        $('.addWordMark').hide();
        $('.translation .foot').show();
        if (con == '') return;
        $.post('/api/word/mark', { word_id: id, note_content: con }, function (mess) {
            if (mess && mess.code == 0) {
                $('.translation .wordMark').show().find('p').html(con);
            }
        });
    });
    //关闭做笔记
    $('.addWordMark .o').click(function () {
        $('.addWordMark').hide();
        $('.translation .foot').show();
    });
    //展开详细考法（如果有）
    $('.translation .moreMeaning').click(function () {
        $(this).find('p').slideToggle();
    });
    drag();
    function drag() {
        var oDiv = $('.translation');
        oDiv.mousedown(function (e) {
            //鼠标按下，计算当前元素距离可视区的距离
            var disX = e.pageX - oDiv.offset().left;
            var disY = e.pageY - oDiv.offset().top;
            $(document).mousemove(function (e) {
                //通过事件委托，计算移动的距离
                var l = e.clientX - disX;
                var t = e.clientY - disY;
                //移动当前元素(限制在窗口内)
                var maxL = $(document).width() - oDiv.outerWidth(true);
                var maxT = $(document).height() - oDiv.outerHeight(true);
                l = l < 0 ? 0 : l > maxL ? maxL : l;
                t = t < 0 ? 0 : t > maxT ? maxT : t;
                oDiv.css({
                    'left': l + 'px',
                    "top": t + 'px'
                });
            });
            $(document).mouseup(function () {
                $(document).off('mousemove');
                $(document).off('mouseup');
            });
        });
    }
});

/***/ })
/******/ ]);
//# sourceMappingURL=anaylsis.js.map