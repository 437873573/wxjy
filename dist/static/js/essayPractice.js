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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

__webpack_require__(0);

var _modulesCountableMin = __webpack_require__(14);

var _modulesCountableMin2 = _interopRequireDefault(_modulesCountableMin);

window.Countable = _modulesCountableMin2['default'];
$(function () {
    $('.text-do textarea').keyup(function () {
        _modulesCountableMin2['default'].count($(this)[0], function (counter) {
            $('.text-do .count span').text(counter.words);
        });
    });
    $('.countDown i').click(function () {
        if (!$(this).hasClass('show')) {
            $(this).addClass('show').text('Show').siblings().hide();
        } else {
            $(this).removeClass('show').text('Hide').siblings().show();
        }
    });
    $('.answer-content div').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var n = $(this).index();
        $('.do-answer>div').eq(n).show().siblings().hide();
    });
    $('.cut').click(function () {
        return cut();
    });
    $('.paste').click(function () {
        return paste();
    });
    $('.undo').click(function () {
        return undo();
    });
    $('.redo').click(function () {
        return redo();
    });
    function cut() {
        try {
            if (document.execCommand('cut', false, null)) {
                document.execCommand('cut');
            } else {
                pop('当前浏览器不支持复制，请手动复制', 'red');
            }
        } catch (err) {
            pop('当前浏览器不支持复制，请手动复制', 'red');
        }
    }
    function paste() {
        $('.do-answer textarea').focus();
        try {
            if (document.execCommand('paste', false, null)) {
                document.execCommand('paste');
            } else {
                pop('当前浏览器不支持粘贴，请手动粘贴', 'red');
            }
        } catch (err) {
            pop('当前浏览器不支持粘贴，请手动粘贴', 'red');
        }
    }
    function undo() {
        try {
            if (document.execCommand('undo', false, null)) {
                document.execCommand('undo');
            } else {
                pop('当前浏览器不支持撤销，请手动撤销', 'red');
            }
        } catch (err) {
            pop('当前浏览器不支持撤销，请手动撤销', 'red');
        }
    }
    function redo() {
        try {
            if (document.execCommand('redo', false, null)) {
                document.execCommand('redo');
            } else {
                pop('当前浏览器不支持恢复，请手动恢复', 'red');
            }
        } catch (err) {
            pop('当前浏览器不支持恢复，请手动恢复', 'red');
        }
    }

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
                    pop('评论成功');
                    window.location.reload();
                }
            }
        });
    });

    //点赞
    $('.feature span:first-of-type').click(function () {
        // console.log($(this).find('b').text())
        // console.log($(this).closest('li'))
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

    function jia(that, c1, c2) {
        $(that).addClass('added-zan').find('b').text(parseInt($(that).find('b').text()) + 1).end().find('i').removeClass(c1).addClass(c2);
    }

    function jian(that, c1, c2) {
        $(that).removeClass('added-zan').find('b').text(parseInt($(that).find('b').text()) - 1).end().find('i').removeClass(c1).addClass(c2);
    };
    //参与评论文本区展开
    $('.feature span:nth-of-type(2)').click(function () {
        var _this = this;

        var h = $('body').outerHeight();
        if (!$(this).hasClass('s')) {
            $('<div class="advice-adv clearfix">\n                    <textarea placeholder=\'请输入内容\'></textarea>\n                    <p>提交</p>\n                </div>').insertAfter($(this).closest('.advice-par'));
            $(this).addClass('s').closest('.advice-par').siblings('.advice-adv').slideDown();
            $('.iframe', window.parent.document).animate({ height: h + 182 }, 500);
        } else {
            $(this).removeClass('s').closest('.advice-par').siblings('.advice-adv').slideUp(function () {
                $(_this).closest('.advice-par').siblings('.advice-adv').remove();
            });
            $('.iframe', window.parent.document).animate({ height: h - 142 }, 500);
        }
    });
    //参与评论提交
    $('.advice').on('click', '.advice-adv p', function () {
        var comment = $('.advice-adv textarea').val();
        var id = $(this).closest('li').data('commentId'),
            that = this;
        $.post('/api/comment', {
            content: comment,
            test_topic_id: collect[1],
            test_volume_id: collect[0],
            pid: id
        }, function () {
            window.location.reload();
        });
    });
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Countable is a script to allow for live paragraph-, word- and character-
 * counting on an HTML element.
 *
 * @author   Sacha Schmid (<https://github.com/RadLikeWhoa>)
 * @version  3.0.0
 * @license  MIT
 * @see      <http://radlikewhoa.github.io/Countable/>
 */



(function (n) {
  function l(a) {
    for (var b = [], c = 0, d = a.length; c < d;) {
      var f = a.charCodeAt(c++);if (55296 <= f && 56319 >= f && c < d) {
        var e = a.charCodeAt(c++);56320 == (e & 64512) ? b.push(((f & 1023) << 10) + (e & 1023) + 65536) : (b.push(f), c--);
      } else b.push(f);
    }return b;
  }function g(a, b) {
    var c = Object.prototype.toString.call(a);c = "[object NodeList]" === c || "[object HTMLCollection]" === c || 1 === a.nodeType;var d = "function" === typeof b;c || console.error("Countable: Not a valid target");d || console.error("Countable: Not a valid callback function");return c && d;
  }function m(a, b) {
    var c = "" + ("value" in a ? a.value : a.textContent);b = b || {};b.stripTags && (c = c.replace(/<\/?[a-z][^>]*>/gi, ""));b.ignore && h.call(b.ignore, function (a) {
      c = c.replace(a, "");
    });var d = c.trim();return { paragraphs: d ? (d.match(b.hardReturns ? /\n{2,}/g : /\n+/g) || []).length + 1 : 0, sentences: d ? (d.match(/[.?!\u2026]+./g) || []).length + 1 : 0, words: d ? (d.replace(/['";:,.?\u00bf\-!\u00a1]+/g, "").match(/\S+/g) || []).length : 0, characters: d ? l(d.replace(/\s/g, "")).length : 0, all: l(c).length };
  }var e = [],
      h = Array.prototype.forEach,
      k = { on: function on(a, b, c) {
      if (g(a, b)) return void 0 === a.length && (a = [a]), h.call(a, function (a) {
        var d = function d() {
          b.call(a, m(a, c));
        };e.push({ element: a, handler: d });d();a.addEventListener("input", d);
      }), this;
    }, off: function off(a) {
      if (g(a, function () {})) return void 0 === a.length && (a = [a]), e.filter(function (b) {
        return -1 !== a.indexOf(b.element);
      }).forEach(function (a) {
        a.element.removeEventListener("input", a.handler);
      }), e = e.filter(function (b) {
        return -1 === a.indexOf(b.element);
      }), this;
    }, count: function count(a, b, c) {
      if (g(a, b)) return void 0 === a.length && (a = [a]), h.call(a, function (a) {
        b.call(a, m(a, c));
      }), this;
    }, enabled: function enabled(a) {
      void 0 === a.length && (a = [a]);return e.filter(function (b) {
        return -1 !== a.indexOf(b.element);
      }).length === a.length;
    } }; true ? module.exports = k : "function" === typeof define && define.amd ? define(function () {
    return k;
  }) : n.Countable = k;
})(undefined);

/***/ })
/******/ ]);
//# sourceMappingURL=essayPractice.js.map