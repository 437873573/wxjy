!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e,n){"use strict";(function(t){var e=n(2);t.pop=e.pop;var i=null,o=$(".js-login-info"),a=$(".js-tips-user");o.on("mouseenter",function(){clearTimeout(i),a.show(),$.ajax({url:"/api/plan/info",data:{},success:function(t){if(t&&t.plan){var e=t.plan,n=e.today_complete_rate;$(".circle circle[stroke-dasharray]").attr("stroke-dasharray",2*n+" "+(200-2*n)),$(".circle span").html(n+"%")}}})}),o.on("mouseleave",function(){i=setTimeout(function(){a.hide()},300)}),a.on("mouseenter",function(){clearTimeout(i)}),a.on("mouseleave",function(){i=setTimeout(function(){a.hide()},300)});var r=$(".page-header__search .butn-soso");r.on("click",function(){console.info("RUN");var t=$(".page-header__search input").val();t&&t.length>0&&(window.open("/search?keywords="+t,"_blank"),console.info(t))}),"localhost"==location.hostname?$.ajaxSetup({beforeSend:function(t,e){t.setRequestHeader("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU0MDQ0MDQxZDA0M2RjMDgyYWJjNDA4OTg2OTlmZjc5ZjFmNzA0ZDgxNzEwNGYwYjVmYmYzY2ZjZjhmOWM4MTdiMzBhYjRiOWNmMTk3NDUyIn0.eyJhdWQiOiI2IiwianRpIjoiNTQwNDQwNDFkMDQzZGMwODJhYmM0MDg5ODY5OWZmNzlmMWY3MDRkODE3MTA0ZjBiNWZiZjNjZmNmOGY5YzgxN2IzMGFiNGI5Y2YxOTc0NTIiLCJpYXQiOjE1MjA2NzcxMDgsIm5iZiI6MTUyMDY3NzEwOCwiZXhwIjoxNTUyMjEzMTA4LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.3irFbm_3KpOt6F4RsqJBsNH6NnvagJqLbRX3gPl_8uCJySMYpBBvDTXtMTmNqxTg02qviGTkw2gQw0e366keWAwP9ShKHfZQlS3uOINUzNBciB5BUFwP7PdFpgyPXVs5aCSU48Bmwb-QAZEv2rrX5CYGF0cxYjvDRjFWrGJwSiED9lxRva78057ioFicMeGsdVZjacqjzHzEi4EQHbaYt3KgT6z3EucFXcxk5ZyB9wlaXtdfrJ1JlPA4rv4bN-m6AYUVXOFy_XKLUU2_13xYIL3a0qVCL6_xMQxIueHvdi-46gwvTIkKfmbJSSpOcfuuUp3SG0i7YA4d5XArXuGRKO4iQ8aFQ0KBh8ot5n5MfdSVK9ZpA5-Ym-5O1NSbcnxDHYWj2XGzwqoSQrLGP9R-ijX0eITN7rcGfnIEgHYTwgIya8O7Rd6qqvQ-QCgX5PuxSSwlvBKpf49ENJxrX_CQY0d8Fh0R6zB5orsEzR6wQhOhzTi0OJuTgRq6V9Qc91PGBZVJKwE3Xxip3Mcf3wxTKEKgAdBb-I5cSbVgeZJN4eIC5ik0ASLrSaroQyMLe9xT7OOCnm1vA-A6iEWJcx7NIzsrfhEtCgSDs11pnQr70ltgLSdYoWi8NwSXpo37EP4io8ozRCC2qnuE3TlfqMzgJ14AlgXmipySWhhVrhuKtzw"),e.url="http://wxjy-mingyang.mion.cn"+e.url}}):$.ajaxSetup({beforeSend:function(t){window.WXJY=WXJY||{},"undefined"!=typeof WXJY.csrfToken&&t.setRequestHeader("X-CSRF-TOKEN",WXJY.csrfToken)}}),$.ajaxSetup({statusCode:{200:function(t){0==!t.code&&(0,e.pop)(t.message,"#fa8c16")},401:function(){window.location.href="/login"},500:function(){(0,e.pop)("网络异常，请稍后再试","red")}},error:function(t){"Unauthenticated."==t.error&&(window.location.href="/login")},withCredentials:!0})}).call(e,n(1))},function(t,e,n){"use strict";var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(o){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,n){"use strict";function i(t,e){$(".popprompt")[0]||$('<div class="popprompt">看什么看，做题</div>').appendTo("body");var n=e?e:"#00e290";$(".popprompt").text("").text(t).css("background",n).removeClass("off").addClass("on"),setTimeout(function(){$(".popprompt").removeClass("on").addClass("off")},2e3)}Object.defineProperty(e,"__esModule",{value:!0}),e.pop=i},,,function(t,e,n){"use strict";n(0),$(function(){var t=[],e=[],n=$(".testlist ul");e=$(".clicked").parent().attr("href"),$(e.split("&")).each(function(e,n){t.push(n.split("=")[1])}),parseInt(n.css("width"))<700&&($(".icon-butn-left").css("display","none"),$(".icon-burn-right").css("display","none")),$(".anaylsis .left .next").click(function(){var t=n.css("left"),e=-parseInt(t)+700;parseInt(n.css("width"))>700&&e<parseInt(n.css("width"))&&n.animate({left:parseInt(t)-700+"px"})}),$(".anaylsis .left .prev").click(function(){var t=n.css("left");parseInt(n.css("width"))>700&&parseInt(t)<0&&n.animate({left:parseInt(t)+700+"px"})}),$(".testlist ul a").click(function(){e="",t=[],$(this).find("li").addClass("clicked").end().siblings().find("li").removeClass("clicked"),$(".collect i").removeClass("icon-collection1").addClass("icon-collection"),e=$(".clicked").parent().attr("href"),$(e.split("&")).each(function(e,n){t.push(n.split("=")[1])}),$(".translation").hide()}),$(document).click(function(t){t.target==$(".writeMarkBox").get(0)?$(".writeMarkBox").hide():t.target==$(".reportWrongBox").get(0)&&$(".reportWrongBox").hide()}),$(".domark").click(function(){$("#domark").text($.trim($(".iframe").contents().find(".mymark").text())),$(".writeMarkBox").show()}),$(".writeMark .head p").click(function(){$(".writeMarkBox").hide()}),$(".repwrong").click(function(){$(".reportWrongBox").show()}),$(".reportWrong .head p").click(function(){$(".reportWrongBox").hide()}),$(".collect").click(function(){$(".collect i").hasClass("icon-collection")?$.ajax({url:"/api/collect",type:"POST",data:{test_topic_id:t[1],test_volume_id:t[0]},success:function(t){0==t.code&&(pop("收藏成功"),$(".collect i").removeClass("icon-collection").addClass("icon-collection1"))}}):pop("已添加收藏","#fa8c16")}),$(".writeMarkBox .but").click(function(){var e=$("#domark").val();$(".writeMarkBox").hide(),e&&$.ajax({url:"/api/save_note",type:"POST",data:{note_content:e,test_topic_id:t[1],test_volume_id:t[0]},success:function(t){0==t.code&&(pop("笔记添加成功"),$(".iframe").contents().find(".mymark").text(e))}})}),$(".reportWrongBox .but").click(function(){var e=$(".reportWrong textarea").val();$(".reportWrongBox").hide(),e&&$.ajax({url:"/api/report",type:"POST",data:{content:e,test_topic_id:t[1],test_volume_id:t[0]},success:function(t){t&&0==t.code&&pop("提交成功，感谢您的帮助")}})}),$(".translation .addWord").click(function(){if(0!=$(this).attr("id")){if($(this).hasClass("added"))return;$.ajax({url:"/api/word/mark",type:"post",data:{word_id:$(this).attr("id")},success:function(t){0==t.code&&(pop("添加成功"),$(".translation .but").addClass("added").text("已添加到生词本"))}})}}),$(document).click(function(t){t.target!==$(".translate")[0]&&"block"==$(".translate").css("display")&&$(".translate").hide()}),$(".translation .select input").click(function(){$(".selRec").is(":hidden")&&$.get("/api/word/history",function(t){t&&0===t.code&&t.data.histories.length>=1&&($(".selRec ul").html(""),$.each(t.data.histories,function(t,e){$('<li class="clearfix">\n                                <span class="fl">'+e.word+'</span>\n                                <span class="fr">'+e.total+"人搜索过</span>\n                            </li>").appendTo(".selRec ul")}),$(".selRec").show())})}),$(".translation .select .btn").click(function(){var t=$(this).siblings("input").val();$.get("/api/word/query",{word:t,type:"search"},function(e){if(e&&0===e.code){var n=$(".translation"),i=e.data.word;n.find(".word b").html(t),n.attr("id",i.id),n.find(".phonetic span").html(i.phonetic),n.find(".meaning div span").html(i.interpretation),n.find(".example div span").html(i.example),""!=i.test_method?n.find(".moreMeaning p").html(i.test_method):n.find(".moreMeaning").hide(),i.note?n.find(".wordMark p").html(i.note.note_content):n.find(".wordMark").hide(),i.is_marked?(n.find(".addWord").attr("id",0),n.find(".addWord").addClass("added").text("已添加到生词本")):(n.find(".addWord").attr("id",i.id),n.find(".addWord").removeClass("added").text("添加到生词本"))}$(".selRec").hide()})}),$(".translation .tran-close").click(function(){return $(".translation").hide()}),$(".selRec .clearRec").click(function(){$.post("/api/word/clear"),$(".selRec").hide()}),$(".selRec ul").click(function(t){if($(t.target).hasClass("fl")){var e=$(t.target).text();$(".translation .select input").val(e)}$(".selRec").hide()}),$(".translation .abut>span").click(function(){return $(".wordBug").show()}),$(".wordBug .sub").click(function(){var t=$(this).closest(".translation").attr("id"),e=$(".translation input[name=type]:checked").val(),n=$(".translation .wordBug textarea").val();e&&n&&$.post("/api/report",{type:2,word_id:t,subtype:e,content:n}),$(".wordBug").hide()}),$(".wordBug .o").click(function(){return $(".wordBug").hide()}),$(".translation .foot .doWordMark").click(function(){var t=$(".translation .wordMark p").html();$(".translation .addWordMark textarea").val(t),$(".addWordMark").show(),$(".translation .foot").hide()}),$(".addWordMark .sub").click(function(){var t=$(this).closest(".translation").attr("id"),e=$(this).siblings("textarea").val();$(".addWordMark").hide(),$(".translation .foot").show(),""!=e&&$.post("/api/word/mark",{word_id:t,note_content:e},function(t){t&&0==t.code&&$(".translation .wordMark").show().find("p").html(e)})}),$(".addWordMark .o").click(function(){$(".addWordMark").hide(),$(".translation .foot").show()}),$(".translation .moreMeaning").click(function(){$(this).find("p").slideToggle()})})}]);
//# sourceMappingURL=anaylsis.js.map