!function(e){function n(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var o={};return n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=11)}([function(e,n,o){"use strict";(function(e){var n=o(2);e.pop=n.pop;var t=null,i=$(".js-login-info"),r=$(".js-tips-user");i.on("mouseenter",function(){clearTimeout(t),r.show(),$.ajax({url:"/api/plan/info",data:{},success:function(e){if(e&&e.plan){var n=e.plan,o=n.today_complete_rate;$(".circle circle[stroke-dasharray]").attr("stroke-dasharray",2*o+" "+(200-2*o)),$(".circle span").html(o+"%")}}})}),i.on("mouseleave",function(){t=setTimeout(function(){r.hide()},300)}),r.on("mouseenter",function(){clearTimeout(t)}),r.on("mouseleave",function(){t=setTimeout(function(){r.hide()},300)});var a=$(".page-header__search .butn-soso");a.on("click",function(){var e=$(".page-header__search input").val();e&&e.length>0&&window.open("/search?keywords="+e,"_blank")}),$(".page-header__search input").keyup(function(){$(document).keypress(function(e){if(13==e.which){var n=$(".page-header__search input").val();n&&n.length>0&&window.open("/search?keywords="+n,"_blank")}})}),"localhost"==location.hostname?$.ajaxSetup({beforeSend:function(e,n){e.setRequestHeader("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU0MDQ0MDQxZDA0M2RjMDgyYWJjNDA4OTg2OTlmZjc5ZjFmNzA0ZDgxNzEwNGYwYjVmYmYzY2ZjZjhmOWM4MTdiMzBhYjRiOWNmMTk3NDUyIn0.eyJhdWQiOiI2IiwianRpIjoiNTQwNDQwNDFkMDQzZGMwODJhYmM0MDg5ODY5OWZmNzlmMWY3MDRkODE3MTA0ZjBiNWZiZjNjZmNmOGY5YzgxN2IzMGFiNGI5Y2YxOTc0NTIiLCJpYXQiOjE1MjA2NzcxMDgsIm5iZiI6MTUyMDY3NzEwOCwiZXhwIjoxNTUyMjEzMTA4LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.3irFbm_3KpOt6F4RsqJBsNH6NnvagJqLbRX3gPl_8uCJySMYpBBvDTXtMTmNqxTg02qviGTkw2gQw0e366keWAwP9ShKHfZQlS3uOINUzNBciB5BUFwP7PdFpgyPXVs5aCSU48Bmwb-QAZEv2rrX5CYGF0cxYjvDRjFWrGJwSiED9lxRva78057ioFicMeGsdVZjacqjzHzEi4EQHbaYt3KgT6z3EucFXcxk5ZyB9wlaXtdfrJ1JlPA4rv4bN-m6AYUVXOFy_XKLUU2_13xYIL3a0qVCL6_xMQxIueHvdi-46gwvTIkKfmbJSSpOcfuuUp3SG0i7YA4d5XArXuGRKO4iQ8aFQ0KBh8ot5n5MfdSVK9ZpA5-Ym-5O1NSbcnxDHYWj2XGzwqoSQrLGP9R-ijX0eITN7rcGfnIEgHYTwgIya8O7Rd6qqvQ-QCgX5PuxSSwlvBKpf49ENJxrX_CQY0d8Fh0R6zB5orsEzR6wQhOhzTi0OJuTgRq6V9Qc91PGBZVJKwE3Xxip3Mcf3wxTKEKgAdBb-I5cSbVgeZJN4eIC5ik0ASLrSaroQyMLe9xT7OOCnm1vA-A6iEWJcx7NIzsrfhEtCgSDs11pnQr70ltgLSdYoWi8NwSXpo37EP4io8ozRCC2qnuE3TlfqMzgJ14AlgXmipySWhhVrhuKtzw"),n.url="http://wxjy-mingyang.mion.cn"+n.url}}):$.ajaxSetup({beforeSend:function(e){window.WXJY=WXJY||{},"undefined"!=typeof WXJY.csrfToken&&e.setRequestHeader("X-CSRF-TOKEN",WXJY.csrfToken)}}),$.ajaxSetup({statusCode:{200:function(e){0==!e.code&&(0,n.pop)(e.message,"#fa8c16")},401:function(){window.location.href="/login"},500:function(){(0,n.pop)("网络异常，请稍后再试","red")}},error:function(e){"Unauthenticated."==e.error&&(window.location.href="/login")},withCredentials:!0})}).call(n,o(1))},function(e,n,o){"use strict";var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(i){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,o){"use strict";function t(e,n){$(".popprompt")[0]||$('<div class="popprompt">看什么看，做题</div>').appendTo("body");var o=n?n:"#00e290";$(".popprompt").text("").text(e).css("background",o).removeClass("off").addClass("on"),setTimeout(function(){$(".popprompt").removeClass("on").addClass("off")},2e3)}Object.defineProperty(n,"__esModule",{value:!0}),n.pop=t},,,,,,,,,function(e,n,o){"use strict";o(0)}]);
//# sourceMappingURL=essayIndex.js.map