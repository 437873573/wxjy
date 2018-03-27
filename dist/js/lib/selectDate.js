function gerateOption(start, end, cur, unit) {//添加内容用，从start开始end结束，cur用来搞个预先选定的
  var s = "";//弄个变量赋空值便于拼接
  for (var i = start; i <= end; i++) {
    if (i == cur)
      s = s + "<option selected='selected'>" + i + unit + "</option>";//selected表示预先选定该列表框
    else s = s + "<option>" + i + unit + "</option>";
  }
  return s;
}
function getDays(year, month) {//根据年和月计算相应的天数
  var d1 = new Date();
  var d2 = new Date();
  d1.setFullYear(year);
  d1.setMonth(month - 1);
  d1.setDate(1);
  d2.setFullYear(year);
  d2.setMonth(month);
  d2.setDate(1);//利用月数差计算，相差1月
  return (d2 - d1) / 1000 / 60 / 60 / 24;//把毫秒转换成天数
}
var date = new Date();
var yy = date.getFullYear(), mm = date.getMonth(), dd = date.getDate();//取当前的年、月、日
var year = document.getElementById("year");//把列表框转换成一个变量
var month = document.getElementById("month");
var day = document.getElementById("day");
year.innerHTML = gerateOption(1970, 2050, yy, '年');//用innerHTML向列表框添加内容，调用gerateOption（）函数
month.innerHTML = gerateOption(1, 12, mm, '月');
day.innerHTML = gerateOption(1, getDays(yy, mm), dd, '日');//日期特殊，先要计算出月份对应的天数，调用getDays（）函数

month.onchange = year.onchange = function () {//实现联动
  var a = year.value, b = month.value;//获取所选中的年、月列表框值
  day.innerHTML = gerateOption(1, getDays(a, b), dd, '日');//计算出相对应的天数再添加
}