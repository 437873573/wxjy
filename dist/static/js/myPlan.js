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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 2:
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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(4);

$(function () {
    //用于记录日期，显示的时候，根据dateObj中的日期的年月显示
    var dateObj = (function () {
        var _date = new Date(); // 默认为当前系统时间
        return {
            getDate: function getDate() {
                return _date;
            },
            setDate: function setDate(date) {
                _date = date;
            }
        };
    })();

    //日期转化为字符串， 4位年+2位月+2位日
    function getDateStr(date) {
        var _year = date.getFullYear();
        var _month = date.getMonth() + 1; // 月从0开始计数
        var _d = date.getDate();

        _month = _month > 9 ? "" + _month : "0" + _month;
        _d = _d > 9 ? "" + _d : "0" + _d;
        return _year + _month + _d;
    }

    //页面加载时获取当天的备考计划
    function todayplan() {
        var date = new Date(),
            _year = date.getFullYear(),
            _month = date.getMonth() + 1,
            // 月从0开始计数
        _d = date.getDate();
        var _month = _month > 9 ? "" + _month : "0" + _month,
            _d = _d > 9 ? "" + _d : "0" + _d,
            w = _year + '-' + _month + '-' + _d;
        getplan(w);
    }

    todayplan();

    //获取备考规划
    function getplan(w) {
        // console.log(w)
        $.ajax({
            url: '/api/plan/info',
            data: 'planDate=' + w,
            success: function success(mess) {
                $('.detailplan,.recite,.program').html('');
                var userLevel = mess.user.current_level;
                if (mess.planTodos.length >= 1) {
                    var lis = '',
                        todo = mess.planTodos;
                    $.each(todo, function (i, v) {
                        lis += '<div class="column-title">\n                                        <div class="title">' + v.todo_title + '</div>\n                                    </div>\n                                    <div class="column-bd">\n                                        <ul class="list">\n                                            <li class="item">\n                                                <div class="situation">\n                                                    <input type="checkbox" disabled ' + (v.status == 1 ? "checked" : "") + '>\n                                                    <span class="row row-1" style="width: 410px;display: inline-block;margin-bottom: -2px">' + v.todo_content + '</span>\n                                                </div>\n                                                <div class="btns" id=' + v.id + ' data-status=' + v.status + '>\n                                                    <a href="javaScript:;" class="btn-go do" id="3" data-title=' + v.todo_title + ' data-content=' + v.todo_content + '>查看编辑</a>\n                                                    <a href="javaScript:;" class="btn-go do" id="2">完成</a>\n                                                    <a href="javaScript:;" class="btn-cancle" id="1">未完成</a>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>';
                    });
                    $('<div class="plan-column">\n                            <div class="column-hd">\n                                <h3 class="title">日程</h3>\n                            </div>\n                            <ul class="colunmdetail">\n                                ' + lis + '\n                            </ul>\n                        </div>').appendTo('.program');
                }
                if (mess && mess.plan) {
                    if (mess.plan.external_words.length >= 1) {
                        var _word = mess.plan.external_words;
                        var lis = '';
                        $.each(_word, function (i, v) {
                            lis += '<li class="item">\n                                <div class="situation">\n                                    <input type="checkbox" disabled ' + (v.status == 2 ? "checked" : "") + '>\n                                    <span class="row row-1">' + v.plan_word + '</span>\n                                </div>\n                                <div class="btns" id=' + v.id + ' data-status=' + v.status + '>\n                                    <a href="javaScript:;" class="btn-go do" id="2">完成</a>\n                                    <a href="javaScript:;" class="btn-cancle" id="1">未完成</a>\n                                </div>\n                           </li>';
                        });
                        $('<div class="plan-column">\n                                <div class="column-hd">\n                                    <h3 class="title">背诵</h3>\n                                </div>\n                                <div class="colunmdetail">\n                                    <div class="column-title">\n                                        <div class="title">外部词汇</div>\n                                    </div>\n                                    <div class="column-bd">\n                                        <ul class="list">' + lis + '</ul>\n                                    </div>\n                                </div>\n                            </div>').appendTo('.recite');
                    }
                    if (!$.isEmptyObject(mess.plan.testVolumeGroups)) {
                        var data = mess.plan.testVolumeGroups;
                        $.each(data, function (key, value) {
                            // console.log(key, value)
                            var planColumn = $('<div class="plan-column">\n                                            <div class="column-hd">\n                                                <h3 class="title">' + key + '</h3>\n                                            </div>\n                                       </div>').appendTo('.detailplan');
                            $.each(value, function (k, v) {
                                var planul = $('<div class="colunmdetail">\n                                                    <div class="column-title">\n                                                        <div class="title">' + k + '</div>\n                                                        <div class="done-progress">\n                                                            <span class="txt">完成</span>\n                                                            <span class="done-range">\n                                                                <span class="cur" style="width: ' + v.testBookPercentage + '%;"></span>\n                                                            </span>\n                                                            <span class="num">' + v.testBookPercentage + '%</span>\n                                                        </div>\n                                                    </div>\n                                                 </div>').appendTo(planColumn);
                                // console.log(k, v)
                                var lis = '';
                                $.each(v.datas, function (i, t) {
                                    var time = t.time_count == 0 ? '0s' : parseInt(t.time_count / 60) == 0 ? t.time_count + 's' : parseInt(t.time_count / 60) + 'min' + t.time_count % 60 + 's';
                                    lis += '<li class="item">\n                                                <div class="situation">\n                                                    <input type="checkbox" disabled ' + (t.done_num == t.total_num ? "checked" : "") + '>\n                                                    <span class="row row-1">' + t.test_volume_name + '</span>\n                                                    <span class="row row-2">已做题 ' + t.done_num + '/' + t.total_num + '</span>\n                                                    <span class="row row-3">总耗时 ' + time + '</span>\n                                                    <span class="row row-4">正确率 ' + t.correct_rate + '%</span>\n                                                </div>\n                                                <div class="btns">\n                                                    <a href="javascript:;" class="btn-go do" data-date=' + mess.planDate + ' data-id=' + t.id + ' data-url=' + t.test_do_url + ' data-plan-id=' + mess.plan.id + '>做题</a>\n                                                    <a href=' + t.test_view_url + ' class="btn-cancle see">查看</a>\n                                                    ' + (t.test_video_url ? '' + (userLevel < t.resource_video.level ? '<span class="btn-cancle noLev" onclick=" $(\'.applyBox\').show()">视频</span>' : '<a href=' + t.test_video_url + ' class="btn-cancle video">视频</a>') : '<span class="btn-cancle noRes">视频</span>') + '\n                                                                    ' + (t.test_download_url ? '' + (userLevel < t.resource_document.level ? '<span class="btn-cancle noLev" onclick=" $(\'.applyBox\').show()">下载</span>' : '<a href=' + t.test_download_url + ' class="btn-cancle download">下载</a>') : '<span class="btn-cancle noRes">下载</span>') + '\n                                                                </div>\n                                                            </li>';
                                });
                                $('<div class="column-bd">\n                                        <ul class="list">\n                                            ' + lis + '\n                                        </ul>\n                                    </div>').appendTo(planul);
                            });
                        });
                    }
                    var rate = mess.plan.today_complete_rate;
                    $('.day-plan circle:nth-of-type(2)').attr('stroke-dasharray', rate * 2 + ' ' + (200 - rate * 2));
                    $('.day-plan span').text(rate + '%');
                }
            },
            error: function error() {
                $('.detailplan,.recite').html('');
            }
        });
    }

    //重做选择弹窗显示
    $('.detailplan').on('click', '.do', function () {
        var planDate = $(this).data('date'),
            id = $(this).data('id'),
            url = $(this).data('url'),
            planId = $(this).data('plan-id'),
            flag = true;
        $.ajax({
            async: false,
            type: 'post',
            url: '/api/volume/needConfirm',
            data: { plan_date: planDate, test_volume_id: id, plan_id: planId },
            success: function success(mess) {
                if (mess && mess.code === 0) {
                    if (mess.data.needConfirm) {
                        $('.reorco .btn-go').attr('href', url + "&restart=0");
                        $('.reorco .btn-re').attr('href', url + "&restart=1");
                        $('.reorco').show();
                        flag = true;
                    } else {
                        flag = false;
                    }
                }
            }
        });
        flag ? '' : url.search('planId') != -1 ? window.open(url + "&restart=1") : window.open(url + "?restart=1");
        // }) === false ? window.open("/exam/test/" + id + "?restart=0") : console.log(flag)
    });

    $('.reorco a').click(function (e) {
        e.stopPropagation();
        $('.reorco').hide();
    });
    //发送背诵完成状态
    $('.recite').click(function (e) {
        var ei = $(e.target),
            id = ei.parent().attr('id'),
            s = ei.parent().data('status');
        if (s == 1 && ei.attr('id') == 2) {
            $(ei.closest('li').find('input')).prop('checked', true);
            word(id, 2);
            ei.parent().data('status', 2);
        } else if (s == 2 && ei.attr('id') == 1) {
            $(ei.closest('li').find('input')).prop('checked', false);
            word(id, 1);
            ei.parent().data('status', 1);
        }
    });

    function word(id, sta) {
        $.ajax({
            url: '/api/plan/word/changeStatus',
            type: 'post',
            data: { plan_word_id: id, status: sta }
        });
    }

    // 表格中显示日期
    showCalendarData();

    function showCalendarData() {
        var date = dateObj.getDate();
        var _year = date.getFullYear();
        var _month = date.getMonth() + 1;
        var _dateStr = getDateStr(date);
        // 设置顶部标题栏中的 年、月信息
        var titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(4, 2) + "月";
        $('.month').text('' + titleStr);
        $('.year-month span').text('' + titleStr);
        $('.plan-summary .title span').text('' + titleStr);
        var _firstDay = new Date(_year, _month - 1, 1); // 当前月第一天
        // 设置时间轴中的日期数据
        $(".day ul li").each(function (i, v) {
            $(v).removeClass('today');
            var dayweek = date.getDay() == 0 ? 7 : date.getDay();
            var _thisDay = new Date(_year, _month - 1, date.getDate() + i + 1 - dayweek);
            var _thisDayStr = getDateStr(_thisDay);
            var w = _thisDayStr.substring(0, 4) + '-' + _thisDayStr.substring(4, 6) + '-' + _thisDayStr.substring(6, 8);
            $(v).attr('data', w);
            $(v).text(_thisDay.getDate());
            if (_thisDayStr == getDateStr(new Date())) {
                $(v).addClass('today clicked');
                $('.week li').eq(i).addClass('clicked');
            } else if (_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
                $(v).removeClass('otherMonth');
                $(v).addClass('currentMonth');
            } else {
                $(v).removeClass('currentMonth');
                $(v).addClass('otherMonth');
            }
        });
        //设置月视图中日期数据
        $('.month_schedule td').each(function (i, v) {
            $(v).removeClass('today');
            var dayweek = _firstDay.getDay() == 0 ? 7 : _firstDay.getDay();
            var _thisDay = new Date(_year, _month - 1, i + 2 - dayweek);
            var _thisDayStr = getDateStr(_thisDay);
            var w = _thisDayStr.substring(0, 4) + '-' + _thisDayStr.substring(4, 6) + '-' + _thisDayStr.substring(6, 8);
            $(v).attr('data', w);
            $(v).children('b').text(_thisDay.getDate());
            if (_thisDayStr == getDateStr(new Date())) {
                // 当前天
                $(v).addClass('today');
            } else if (_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
                $(v).removeClass('otherMonth');
                $(v).addClass('currentMonth'); // 当前月
            } else {
                    // 其他月
                    $(v).removeClass('currentMonth');
                    $(v).addClass('otherMonth');
                }
        });
    }

    $('.thistoday').click(function () {
        dateObj.setDate(new Date());
        $('.clicked').removeClass('clicked');
        showCalendarData();
        todayplan();
    });
    //时间轴时间选择
    $('.week li').click(function () {
        $(this).addClass('clicked').siblings().removeClass("clicked");
        var index = $(this).index();
        $('.day ul li').eq(index).addClass('clicked').siblings().removeClass("clicked");
        var w = $(this).attr('data');
        getplan(w);
    });
    $('.day ul li').click(function () {
        $(this).addClass('clicked').siblings().removeClass("clicked");
        var index = $(this).index();
        $('.week li').eq(index).addClass('clicked').siblings().removeClass("clicked");
        var w = $(this).attr('data');
        getplan(w);
    });
    //上一个星期，下一个星期时间
    $('.prev').click(function () {
        var date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7));
        showCalendarData();
        clickplan();
    });
    $('.next').click(function () {
        var date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7));
        showCalendarData();
        clickplan();
    });

    //改变日期，获取选中日期的规划
    function clickplan() {
        var w = $('.day ul li.clicked').attr('data');
        getplan(w);
    }

    //上个月，下个月时间
    $('.mprev').click(function () {
        $('.plan').remove();
        var date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
        showCalendarData();
        getmonthplan();
    });
    $('.mnext').click(function () {
        $('.plan').remove();
        var date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
        showCalendarData();
        getmonthplan();
    });

    //月视图展示
    $('.thismon').click(function () {
        $('.plan').remove();
        getmonthplan();
        $('.month_scheduleBox').show();
    });

    $('.thisweek').click(function () {
        $('.month_scheduleBox').hide();
    });

    $('.month_schedule').on('click', '.plan', function () {
        // console.log($(this))
        var par = $(this).parent();
        var date = par.attr('data');
        var left = par.position().left;
        var top = par.position().top;
        // console.log(left,top)
        // console.log($(this).parent())
        $('.planshow').removeClass('l r t b').hide();
        if (left < 500 && top < 400) {
            par.find('.planshow').addClass('l t');
        } else if (left > 500 && top < 400) {
            par.find('.planshow').addClass('r t');
        } else if (left < 500 && top > 400) {
            par.find('.planshow').addClass('l b');
        } else if (left > 500 && top > 400) {
            par.find('.planshow').addClass('r b');
        }
        // console.log(date)
        $.ajax({
            url: '/api/plan/info',
            data: 'planDate=' + date,
            success: function success(mess) {
                $('.planshow').html('');
                if (mess && mess.plan) {
                    var rate = mess.plan.today_complete_rate;
                    $('<div class="top">\n                            <h3>' + mess.plan.plan_date + '</h3>\n                            <a class="close">×</a>\n                            </div>\n                        <div class="dayprogress">\n                            <div class="done-circle">\n                                <svg width="112" height="112" viewbox="0 0 112 112">\n                                    <circle cx="56" cy="56" r="48" stroke-width="10" stroke="#ffde00" fill="none"></circle>\n                                    <circle cx="56" cy="56" r="48" stroke-width="10" stroke="#00e290" fill="none"\n                                            transform="matrix(0,-1,1,0,0,112)" stroke-dasharray="' + rate / 100 * 300 + ' ' + (300 - rate / 100 * 300) + '"></circle>\n                                </svg>\n                                <span class="inner">' + rate + '%</span>\n                            </div>\n                            <p>当日计划完成</p>\n                        </div>\n                        <ul class="mon-day-plan"></ul>').appendTo('.planshow');
                    if (mess.plan.external_words.length >= 1) {
                        var _word2 = mess.plan.external_words;
                        var aa = $('<li>\n                                    <h3 class="title">背诵</h3>\n                                    <h3 class="subtitle">外部词汇</h3>\n                                   </li>').appendTo($('.mon-day-plan'));
                        var lis = '';
                        $.each(_word2, function (i, v) {
                            lis += '<li>\n                                    <span>' + v.plan_word + '</span>\n                                    <span>' + (v.status == 1 ? '未完成' : '已完成') + '</span>\n                                  </li>';
                        });
                        $('<ul class="dayplan">' + lis + '</ul>').appendTo(aa);
                    }
                    if (!$.isEmptyObject(mess.plan.testVolumeGroups)) {
                        var data = mess.plan.testVolumeGroups;
                        $.each(data, function (key, value) {
                            var bb = $('<li>\n                                            <h3 class="title">' + key + '</h3>\n                                        </li>').appendTo($('.mon-day-plan'));
                            $.each(value, function (k, v) {
                                $('<h3 class="subtitle">' + k + '</h3>').appendTo(bb);
                                var lis = '';
                                $.each(v.datas, function (i, t) {
                                    lis += '<li>\n                                        <span>' + t.test_volume_name + '</span>\n                                        <span>已做题&nbsp;' + t.done_num + '/' + t.total_num + '</span>\n                                  </li>';
                                });
                                $('<ul class="dayplan">' + lis + '</ul>').appendTo(bb);
                            });
                        });
                    }
                    $('<div class="toDetailPlan" data="' + mess.plan.plan_date + '">查看当日规划</div>').appendTo($('.planshow'));
                }
            }
        });
        par.find('.planshow').show();
    });

    $('.month_schedule').on('click', '.planshow .close', function () {
        $('.planshow').hide();
        return false;
    });

    //月视图查看当日备考规划
    $('.month_schedule').on('click', '.planshow .toDetailPlan', function () {
        $('.planshow').hide();
        $('.month_scheduleBox').hide();
        var w = $('.toDetailPlan').attr('data');
        getplan(w);
        var e = w.split('-');
        dateObj.setDate(new Date(e[0], parseInt(e[1]) - 1, parseInt(e[2])));
        showCalendarData();
        $('.clicked').removeClass('clicked');
        $.each($('.day ul li'), function (i, v) {
            if ($(v).attr('data') == w) {
                // console.log(w)
                $(v).addClass('clicked');
                $('.week li').eq(i).addClass('clicked');
            }
        });
        return false;
    });

    //获取月规划
    function getmonthplan() {
        $('.plan').remove();
        $.ajax({
            url: '/api/plan/monthView',
            data: { startDate: $('#monthfirst').attr('data'), endDate: $('#monthlast').attr('data') },
            // data: {startDate: '2018-01-01', endDate: '2018-01-31'},
            success: function success(r) {
                // console.log(r)
                // console.log(r.code==0)
                // console.log(r.data.plan.length!=0)
                if (r.code == 0 && r.data) {
                    if (r.data.plan.length >= 1) {
                        var plan = r.data.plan;
                        // console.log(plan)
                        $.each(plan, function (i, v) {
                            // console.log(v)
                            var date = v.plan_date;
                            var title = v.testVolumes;
                            // console.log(date,title)
                            $('.month_schedule td').each(function (i, k) {
                                if ($(k).attr('data') == date && title.length != 0) {
                                    $('<div class="plan">\n                                        <p>' + title[0].test_volume_name + '</p>\n                                        <div class="planshow"></div>\n                                   </div>').appendTo($(k));
                                }
                            });
                        });
                    }
                }
            }
        });
    }

    //距离考试时间设置
    $(document).click(function (e) {
        if (e.target == $('.scheduleBox').get(0)) {
            $('.scheduleBox').hide();
        } else if (e.target == $('.month_scheduleBox').get(0)) {
            $('.month_scheduleBox').hide();
        } else if (e.target == $('.todoBox').get(0)) {
            $('.todoBox').hide();
        }
    });
    $('.day-distance').click(function () {
        $('.scheduleBox').show();
    });
    $('.schedule_close').click(function () {
        $('.scheduleBox').hide();
    });
    $('.schedule .bot').click(function () {
        if ($('#year').val() != '0' && $('#month').val() != '0' && $('#day').val() != '0') {
            (function () {
                var month = $('#month').val() > 9 ? $('#month').val() : '0' + $('#month').val();
                var day = $('#day').val() > 9 ? $('#day').val() : '0' + $('#day').val();
                var time = $('#year').val() + '-' + month + '-' + day;
                $.ajax({
                    url: '/api/plan/changeDate',
                    type: 'post',
                    data: { exam_date: time },
                    success: function success(mess) {
                        // console.log(mess)
                        if (mess.code == 0) {
                            pop('时间设置成功');
                            var data = mess.data.diffDate;
                            $('#lastday').text(data.day);
                            $('#lasthour').text(data.hour);
                            $('#lastmin').text(data.minute);
                            $('input[name=exam_date]').val(time);
                            $('.scheduleBox').hide();
                        } else if (mess.code == 1) {
                            // console.log(mess.message)
                        }
                    },
                    error: function error(mess) {
                        // console.log(mess)
                    }
                });
            })();
        } else {
                pop('请设置正确的时间', 'red');
            }
    });

    //月度做题学习总结
    summary();

    function summary() {
        var s = $('.plan-summary .title span').text();
        // console.log(s.substring(0,4)+'-'+s.substring(5,7)+'-01')
        var month = s.substring(0, 4) + '-' + s.substring(5, 7) + '-01';
        $.ajax({
            url: '/api/plan/summary',
            data: { planMonth: month },
            success: function success(mess) {
                if (mess && mess.data) {
                    if (mess.data.summary && mess.data.totalProgress) {
                        $('.lf-bd').html('');
                        var lis = '';
                        var data = mess.data.summary;
                        var rate = mess.data.totalProgress;
                        $('.rg-precent').attr('stroke-dasharray', rate * 4 + ' ' + (400 - rate * 4));
                        $('.rg .inner').text(rate + '%');
                        $.each(data, function (i, v) {
                            lis += '<li class="done-progress">\n                                    <span class="txt">' + v.subject_name + '</span>\n                                    <span class="done-range">\n                                        <span class="cur" style="width: ' + v.total_percent + '%;"></span>\n                                    </span>\n                                    <span class="num">' + v.done_total_num + '/' + v.total_num + '</span>\n                                </li>';
                        });
                        $(lis).appendTo('.lf-bd');
                    } else {
                        $('.lf-bd').html('');
                        var lis = '<li class="done-progress">\n                                        <span class="txt">词汇</span>\n                                        <span class="done-range">\n                                            <span class="cur" style="width: 0%;"></span>\n                                        </span>\n                                        <span class="num">0/0</span>\n                                    </li>\n                                    <li class="done-progress">\n                                        <span class="txt">填空</span>\n                                        <span class="done-range">\n                                            <span class="cur" style="width: 0%;"></span>\n                                        </span>\n                                        <span class="num">0/0</span>\n                                    </li>\n                                    <li class="done-progress">\n                                        <span class="txt">阅读</span>\n                                        <span class="done-range">\n                                            <span class="cur" style="width: 0%;"></span>\n                                        </span>\n                                        <span class="num">0/0</span>\n                                    </li>\n                                    <li class="done-progress">\n                                        <span class="txt">数学</span>\n                                        <span class="done-range">\n                                            <span class="cur" style="width: 0%;"></span>\n                                        </span>\n                                        <span class="num">0/0</span>\n                                    </li>\n                                    <li class="done-progress">\n                                        <span class="txt">作文</span>\n                                        <span class="done-range">\n                                            <span class="cur" style="width: 0%;"></span>\n                                        </span>\n                                        <span class="num">0/0</span>\n                                    </li>';
                        $(lis).appendTo('.lf-bd');
                        $('.rg-precent').attr('stroke-dasharray', '0 400');
                        $('.rg .inner').text('0%');
                    }
                }
            },
            error: function error() {}
        });
    }

    $('.btn-prev').click(function () {
        var date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
        var _dateStr = getDateStr(date);
        var titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(4, 2) + "月";
        $('.plan-summary .title span').text('' + titleStr);
        summary();
    });
    $('.btn-next').click(function () {
        var date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
        var _dateStr = getDateStr(date);
        var titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(4, 2) + "月";
        $('.plan-summary .title span').text('' + titleStr);
        summary();
    });
    //添加日程
    $('.addplan').click(function () {
        $('.todo .bot').attr('id', 0);
        $('.todoBox').show();
    });
    $('.todo_close').click(function () {
        $('.todoBox').hide();
        return false;
    });
    $('.todo .bot').click(function () {
        $('.todoBox').hide();
        var id = $(this).attr('id');
        var date = $('.day ul li.clicked').attr('data');
        var title = $('input[name="todoTitle"]').val(),
            cont = $('textarea[name="todoContent"]').val();
        if (title && cont) {
            $.ajax({
                url: '/api/saveTodo',
                type: 'post',
                data: {
                    todo_title: title,
                    todo_content: cont,
                    todo_date: date,
                    todo_id: id
                },
                success: function success(mess) {
                    if (mess && mess.code == 0) {
                        pop('日程添加成功');
                        $('.todo input').val('');
                        $('.todo textarea').val('');
                        getplan(date);
                    }
                }
            });
        }
    });
    $('.program').click(function (e) {
        var ei = $(e.target),
            id = ei.parent().attr('id'),
            s = ei.parent().data('status');
        // console.log(id,s,ei.attr('id'))
        if (s == 0 && ei.attr('id') == 2) {
            $.post('/api/saveTodo', { todo_id: id, status: 1 }, function (mess) {
                if (mess && mess.code === 0) {
                    $(ei.closest('li').find('input')).prop('checked', true);
                    ei.parent().data('status', 1);
                }
            });
        } else if (s == 1 && ei.attr('id') == 1) {
            $.post('/api/saveTodo', { todo_id: id, status: 0 }, function (mess) {
                if (mess && mess.code === 0) {
                    $(ei.closest('li').find('input')).prop('checked', false);
                    ei.parent().data('status', 0);
                }
            });
        } else if (ei.attr('id') == 3) {
            var t = ei.data('title'),
                c = ei.data('content');
            $('.todo input').val(t);
            $('.todo textarea').val(c);
            $('.todo .bot').attr('id', id);
            $('.todoBox').show();
        }
    });
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//设置距离考试时间


var date = new Date(),
    _year = date.getFullYear(),
    _month = date.getMonth() + 2,
    // 月从0开始计数
_d = date.getDate();
var $year = $('#year'),
    $month = $('#month'),
    $day = $('#day'),
    FirstValue = 0,
    FirstText = "待定";
// 初始化
var str = "<option value=\"" + FirstValue + "\">" + FirstText + "</option>";
$year.html("<option value=\"" + _year + "\">" + _year + "</option>");
$month.html("<option value=\"" + _month + "\">" + _month + "</option>");
$day.html("<option value=\"" + _d + "\">" + _d + "</option>");
// 获取初始值
var inittime = $("input[name='exam_date']").val();
if (inittime) {
    var time = inittime.split('-');
    $year.attr("rel", time[0]);
    $month.attr("rel", time[1]);
    $day.attr("rel", time[2]);
}
// 年份列表
var yearNow = new Date().getFullYear();
var yearSel = $year.attr("rel");
for (var i = 0; i <= 2; i++) {
    var k = yearNow + i;
    if ($year.val() != k) {
        var sed = yearSel == k ? "selected" : "";
        var yearStr = "<option value=\"" + k + "\" " + sed + ">" + k + "</option>";
        $year.append(yearStr);
    }
}
// 月份列表
var monthNow = new Date().getMonth() + 1;
var monthSel = $month.attr("rel");
if (parseInt($year.val()) == yearNow) {
    var m = $month.val();
    removeEle($month);
    for (var i = monthNow; i <= 12; i++) {
        var sed = monthSel == i ? "selected" : m == i ? "selected" : "";
        var monthStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
        $month.append(monthStr);
    }
} else {
    var m = $month.val();
    removeEle($month);
    for (var i = 1; i <= 12; i++) {
        if ($month.val() != monthNow) {
            var sed = monthSel == i ? "selected" : m == i ? "selected" : "";
            var monthStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
            $month.append(monthStr);
        }
    }
}
//日列表
var dayNow = new Date().getDate();
var daySel = $day.attr('rel');

function day() {
    if ($year.val() == 0 || $month.val() == 0) {
        // 未选择年份或者月份
        $day.html(str);
    } else {
        // $day.html(str);
        var year = parseInt($year.val());
        var month = parseInt($month.val());
        var dayCount = 0;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                dayCount = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                dayCount = 30;
                break;
            case 2:
                dayCount = 28;
                if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                    dayCount = 29;
                }
                break;
            default:
                break;
        }
        if (parseInt($year.val()) == yearNow && parseInt($month.val()) == monthNow) {
            var d = $day.val();
            removeEle($day);
            for (var i = dayNow; i <= dayCount; i++) {
                var sed = daySel == i ? "selected" : d == i ? "selected" : "";
                var dayStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
                $day.append(dayStr);
            }
        } else {
            var d = $day.val();
            removeEle($day);
            for (var i = 1; i <= dayCount; i++) {
                var sed = daySel == i ? "selected" : d == i ? "selected" : "";
                var dayStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
                $day.append(dayStr);
            }
        }
    }
}

$year.change(function () {
    removeEle($month);
    if (parseInt($year.val()) == yearNow) {
        for (var i = monthNow; i <= 12; i++) {
            var sed = monthSel == i ? "selected" : "";
            var monthStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
            $month.append(monthStr);
        }
    } else {
        for (var i = 1; i <= 12; i++) {
            var sed = monthSel == i ? "selected" : "";
            var monthStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
            $month.append(monthStr);
        }
    }
    day();
});
$month.change(function () {
    return day();
});
if ($day.attr("rel") != "") {
    day();
}

function removeEle(ele) {
    ele.find("option").remove();
    // var optionStar = "<option value=" + "" + ">" + "待定" + "</option>";
    // ele.append(optionStar);
}

/***/ })

/******/ });
//# sourceMappingURL=myPlan.js.map