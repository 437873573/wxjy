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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(4);

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
//# sourceMappingURL=mySignup.js.map