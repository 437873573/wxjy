//设置距离考试时间
var date = new Date(),
    _year = date.getFullYear(),
    _month = date.getMonth() + 2,    // 月从0开始计数
    _d = date.getDate();
var $year = $('#year'), $month = $('#month'), $day = $('#day'), FirstValue = 0, FirstText = "待定";
// 初始化
var str = "<option value=\"" + FirstValue + "\">" + FirstText + "</option>";
$year.html("<option value=\"" + _year + "\">" + _year + "</option>");
$month.html("<option value=\"" + _month + "\">" + _month + "</option>");
$day.html("<option value=\"" + _d + "\">" + _d + "</option>");
// 获取初始值
var inittime = $("input[name='exam_date']").val()
if (inittime) {
    let time = inittime.split('-')
    $year.attr("rel", time[0])
    $month.attr("rel", time[1])
    $day.attr("rel", time[2])
}
// 年份列表
var yearNow = new Date().getFullYear();
var yearSel = $year.attr("rel");
for (var i = 0; i <= 2; i++) {
    var k = yearNow + i
    if ($year.val() != k) {
        var sed = yearSel == k ? "selected" : "";
        var yearStr = "<option value=\"" + k + "\" " + sed + ">" + k + "</option>";
        $year.append(yearStr);
    }
}
// 月份列表
var monthNow = new Date().getMonth() + 1
var monthSel = $month.attr("rel");
if (parseInt($year.val()) == yearNow) {
    let m = $month.val()
    removeEle($month)
    for (var i = monthNow; i <= 12; i++) {
        var sed = monthSel == i ? "selected" : m == i ? "selected" : "";
        var monthStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
        $month.append(monthStr);
    }
} else {
    let m = $month.val()
    removeEle($month)
    for (var i = 1; i <= 12; i++) {
        if ($month.val() != monthNow) {
            var sed = monthSel == i ? "selected" : m == i ? "selected" : "";
            var monthStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
            $month.append(monthStr);
        }
    }
}
//日列表
var dayNow = new Date().getDate()
var daySel = $day.attr('rel')

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
                if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                    dayCount = 29;
                }
                break;
            default:
                break;
        }
        if (parseInt($year.val()) == yearNow && parseInt($month.val()) == monthNow) {
            let d=$day.val()
            removeEle($day)
            for (var i = dayNow; i <= dayCount; i++) {
                var sed = daySel == i ? "selected" : d==i?"selected":"";
                var dayStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
                $day.append(dayStr);

            }
        } else {
            let d=$day.val()
            removeEle($day)
            for (var i = 1; i <= dayCount; i++) {
                var sed = daySel == i ? "selected" : d==i?"selected":"";
                var dayStr = "<option value=\"" + i + "\" " + sed + ">" + i + "</option>";
                $day.append(dayStr);

            }
        }
    }
}

$year.change(() => {
        removeEle($month)
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
        day()
    }
)
$month.change(() => day())
if ($day.attr("rel") != "") {
    day();
}

function removeEle(ele) {
    ele.find("option").remove();
    // var optionStar = "<option value=" + "" + ">" + "待定" + "</option>";
    // ele.append(optionStar);
}