!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}({0:function(e,t,o){"use strict";(function(e){var t=o(2);e.pop=t.pop;var n=null,i=$(".js-login-info"),r=$(".js-tips-user");i.on("mouseenter",function(){clearTimeout(n),r.show(),$.ajax({url:"/api/plan/info",data:{},success:function(e){if(e&&e.plan){var t=e.plan,o=t.today_complete_rate;$(".circle circle[stroke-dasharray]").attr("stroke-dasharray",2*o+" "+(200-2*o)),$(".circle span").html(o+"%")}}})}),i.on("mouseleave",function(){n=setTimeout(function(){r.hide()},300)}),r.on("mouseenter",function(){clearTimeout(n)}),r.on("mouseleave",function(){n=setTimeout(function(){r.hide()},300)});var a=$(".page-header__search .butn-soso");a.on("click",function(){console.info("RUN");var e=$(".page-header__search input").val();e&&e.length>0&&(window.open("/search?keywords="+e,"_blank"),console.info(e))}),"localhost"==location.hostname?$.ajaxSetup({beforeSend:function(e,t){e.setRequestHeader("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU0MDQ0MDQxZDA0M2RjMDgyYWJjNDA4OTg2OTlmZjc5ZjFmNzA0ZDgxNzEwNGYwYjVmYmYzY2ZjZjhmOWM4MTdiMzBhYjRiOWNmMTk3NDUyIn0.eyJhdWQiOiI2IiwianRpIjoiNTQwNDQwNDFkMDQzZGMwODJhYmM0MDg5ODY5OWZmNzlmMWY3MDRkODE3MTA0ZjBiNWZiZjNjZmNmOGY5YzgxN2IzMGFiNGI5Y2YxOTc0NTIiLCJpYXQiOjE1MjA2NzcxMDgsIm5iZiI6MTUyMDY3NzEwOCwiZXhwIjoxNTUyMjEzMTA4LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.3irFbm_3KpOt6F4RsqJBsNH6NnvagJqLbRX3gPl_8uCJySMYpBBvDTXtMTmNqxTg02qviGTkw2gQw0e366keWAwP9ShKHfZQlS3uOINUzNBciB5BUFwP7PdFpgyPXVs5aCSU48Bmwb-QAZEv2rrX5CYGF0cxYjvDRjFWrGJwSiED9lxRva78057ioFicMeGsdVZjacqjzHzEi4EQHbaYt3KgT6z3EucFXcxk5ZyB9wlaXtdfrJ1JlPA4rv4bN-m6AYUVXOFy_XKLUU2_13xYIL3a0qVCL6_xMQxIueHvdi-46gwvTIkKfmbJSSpOcfuuUp3SG0i7YA4d5XArXuGRKO4iQ8aFQ0KBh8ot5n5MfdSVK9ZpA5-Ym-5O1NSbcnxDHYWj2XGzwqoSQrLGP9R-ijX0eITN7rcGfnIEgHYTwgIya8O7Rd6qqvQ-QCgX5PuxSSwlvBKpf49ENJxrX_CQY0d8Fh0R6zB5orsEzR6wQhOhzTi0OJuTgRq6V9Qc91PGBZVJKwE3Xxip3Mcf3wxTKEKgAdBb-I5cSbVgeZJN4eIC5ik0ASLrSaroQyMLe9xT7OOCnm1vA-A6iEWJcx7NIzsrfhEtCgSDs11pnQr70ltgLSdYoWi8NwSXpo37EP4io8ozRCC2qnuE3TlfqMzgJ14AlgXmipySWhhVrhuKtzw"),t.url="http://wxjy-mingyang.mion.cn"+t.url}}):$.ajaxSetup({beforeSend:function(e){window.WXJY=WXJY||{},"undefined"!=typeof WXJY.csrfToken&&e.setRequestHeader("X-CSRF-TOKEN",WXJY.csrfToken)}}),$.ajaxSetup({statusCode:{200:function(e){0==!e.code&&(0,t.pop)(e.message,"#fa8c16")},401:function(){window.location.href="/login"},500:function(){(0,t.pop)("网络异常，请稍后再试","red")}},error:function(e){"Unauthenticated."==e.error&&(window.location.href="/login")},withCredentials:!0})}).call(t,o(1))},1:function(e,t,o){"use strict";var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(i){"object"==typeof window&&(n=window)}e.exports=n},13:function(e,t,o){"use strict";o(0),$(function(){$(".btns").click(function(e){var t=$(this).data("testVolumeId"),o=$(this).data("testTopicId");e.target==$(".btn-go")[0]&&!function(){var n=$(e.target);$.ajax({url:"/api/collect",type:"POST",data:{test_topic_id:o,test_volume_id:t},success:function(e){0==e.code?(pop("收藏成功"),n.addClass("btn-cancle").removeClass("btn-go").text("已收藏")):pop("网络原因，请重新收藏","red")}})}()})})},2:function(e,t,o){"use strict";function n(e,t){$(".popprompt")[0]||$('<div class="popprompt">看什么看，做题</div>').appendTo("body");var o=t?t:"#00e290";$(".popprompt").text("").text(e).css("background",o).removeClass("off").addClass("on"),setTimeout(function(){$(".popprompt").removeClass("on").addClass("off")},2e3)}Object.defineProperty(t,"__esModule",{value:!0}),t.pop=n}});
//# sourceMappingURL=exerciseRecord.js.map