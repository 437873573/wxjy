!function(n){function t(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=n,t.c=a,t.d=function(n,a,e){t.o(n,a)||Object.defineProperty(n,a,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var a=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(a,"a",a),a},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=10)}([function(n,t,a){"use strict";(function(n){var t=a(2);n.pop=t.pop;var e=null,i=$(".js-login-info"),s=$(".js-tips-user");i.on("mouseenter",function(){clearTimeout(e),s.show(),$.ajax({url:"/api/plan/info",data:{},success:function(n){if(n&&n.plan){var t=n.plan,a=t.today_complete_rate;$(".circle circle[stroke-dasharray]").attr("stroke-dasharray",2*a+" "+(200-2*a)),$(".circle span").html(a+"%")}}})}),i.on("mouseleave",function(){e=setTimeout(function(){s.hide()},300)}),s.on("mouseenter",function(){clearTimeout(e)}),s.on("mouseleave",function(){e=setTimeout(function(){s.hide()},300)});var o=$(".page-header__search .butn-soso");o.on("click",function(){var n=$(".page-header__search input").val();n&&n.length>0&&window.open("/search?keywords="+n,"_blank")}),$(".page-header__search input").keyup(function(){$(document).keypress(function(n){if(13==n.which){var t=$(".page-header__search input").val();t&&t.length>0&&window.open("/search?keywords="+t,"_blank")}})}),"localhost"==location.hostname?$.ajaxSetup({beforeSend:function(n,t){n.setRequestHeader("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU0MDQ0MDQxZDA0M2RjMDgyYWJjNDA4OTg2OTlmZjc5ZjFmNzA0ZDgxNzEwNGYwYjVmYmYzY2ZjZjhmOWM4MTdiMzBhYjRiOWNmMTk3NDUyIn0.eyJhdWQiOiI2IiwianRpIjoiNTQwNDQwNDFkMDQzZGMwODJhYmM0MDg5ODY5OWZmNzlmMWY3MDRkODE3MTA0ZjBiNWZiZjNjZmNmOGY5YzgxN2IzMGFiNGI5Y2YxOTc0NTIiLCJpYXQiOjE1MjA2NzcxMDgsIm5iZiI6MTUyMDY3NzEwOCwiZXhwIjoxNTUyMjEzMTA4LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.3irFbm_3KpOt6F4RsqJBsNH6NnvagJqLbRX3gPl_8uCJySMYpBBvDTXtMTmNqxTg02qviGTkw2gQw0e366keWAwP9ShKHfZQlS3uOINUzNBciB5BUFwP7PdFpgyPXVs5aCSU48Bmwb-QAZEv2rrX5CYGF0cxYjvDRjFWrGJwSiED9lxRva78057ioFicMeGsdVZjacqjzHzEi4EQHbaYt3KgT6z3EucFXcxk5ZyB9wlaXtdfrJ1JlPA4rv4bN-m6AYUVXOFy_XKLUU2_13xYIL3a0qVCL6_xMQxIueHvdi-46gwvTIkKfmbJSSpOcfuuUp3SG0i7YA4d5XArXuGRKO4iQ8aFQ0KBh8ot5n5MfdSVK9ZpA5-Ym-5O1NSbcnxDHYWj2XGzwqoSQrLGP9R-ijX0eITN7rcGfnIEgHYTwgIya8O7Rd6qqvQ-QCgX5PuxSSwlvBKpf49ENJxrX_CQY0d8Fh0R6zB5orsEzR6wQhOhzTi0OJuTgRq6V9Qc91PGBZVJKwE3Xxip3Mcf3wxTKEKgAdBb-I5cSbVgeZJN4eIC5ik0ASLrSaroQyMLe9xT7OOCnm1vA-A6iEWJcx7NIzsrfhEtCgSDs11pnQr70ltgLSdYoWi8NwSXpo37EP4io8ozRCC2qnuE3TlfqMzgJ14AlgXmipySWhhVrhuKtzw"),t.url="http://wxjy-mingyang.mion.cn"+t.url}}):$.ajaxSetup({beforeSend:function(n){window.WXJY=WXJY||{},"undefined"!=typeof WXJY.csrfToken&&n.setRequestHeader("X-CSRF-TOKEN",WXJY.csrfToken)}}),$.ajaxSetup({statusCode:{200:function(n){0==!n.code&&(0,t.pop)(n.message,"#fa8c16")},401:function(){window.location.href="/login"},500:function(){(0,t.pop)("网络异常，请稍后再试","red")}},error:function(n){"Unauthenticated."==n.error&&(window.location.href="/login")},withCredentials:!0})}).call(t,a(1))},function(n,t,a){"use strict";var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(i){"object"==typeof window&&(e=window)}n.exports=e},function(n,t,a){"use strict";function e(n,t){$(".popprompt")[0]||$('<div class="popprompt">看什么看，做题</div>').appendTo("body");var a=t?t:"#00e290";$(".popprompt").text("").text(n).css("background",a).removeClass("off").addClass("on"),setTimeout(function(){$(".popprompt").removeClass("on").addClass("off")},2e3)}Object.defineProperty(t,"__esModule",{value:!0}),t.pop=e},,,,,,,,function(n,t,a){"use strict";a(0),$(function(){function n(n){var t=$(".butn-sort").val();$.get("/api/volume/video/"+e,{page:n?n:1,order:t},function(n){if(0===n.code&&!$.isEmptyObject(n.data))if(n.data.comments.total>0){var t=n.data.comments;if($(".commont-list h3 span").text(t.total),$(".commont-list ul").html(""),(t.next_page_url||t.prev_page_url)&&($(".page-navgator").show(),$(".page-navgator a:first-child").attr({"class":t.prev_page_url?"":"disabled","data-url":t.prev_page_url}),$(".page-navgator a:last-child").attr({"class":t.next_page_url?"":"disabled","data-url":t.next_page_url})),t.data.length>0){var a=t.data,e="";$.each(a,function(n,t){var a="";t.children.length>0&&(a='<ul class="advice-sub">',$.each(t.children,function(n,t){a+='<li>\n                                        <div class="left">\n                                            '+(t.user.avatar?"<img src="+t.user.avatar+' alt="">':'<img src="/static/imgs/header.png" alt="">')+'\n                                        </div>\n                                        <div class="right">\n                                            <p class="title">'+t.user.nickname+"</p>\n                                            <p>"+t.content+"</p>\n                                        </div>\n                                    </li>"}),a+="</ul>"),e+="<li data-comment-id="+t.id+'>\n                                    <div class="advice-par clearfix">\n                                        <div class="left">\n                                            '+(t.user.avatar?"<img src="+t.user.avatar+' alt="">':'<img src="/static/imgs/header.png" alt="">')+'\n                                        </div>\n                                        <div class="right">\n                                            <p class="title">'+t.user.nickname+"</p>\n                                            <p>"+t.content+'</p>\n                                            <p class="foot">\n                                            '+(t.is_voted?'<span class="added-zan"><i class="icon-video-zan"></i> 赞同 <span>'+t.vote_count+"</span></span>":'<span><i class="icon-video-nozan"></i> 赞同 <span>'+t.vote_count+"</span></span>")+'\n                                                <span><i class="icon-video-message"></i> 评论 <span class="connum">'+t.children.length+'</span></span>\n                                                <!--<span><i class="icon-video-share"></i> 分享 <span>2</span></span>-->\n                                                <span class="fr">'+t.created_at+"</span>\n                                            </p>\n                                        </div>\n                                        </div>\n                                        "+a+"\n                                    </li>"}),$(e).appendTo(".commont-list ul")}}else 0===n.code&&0===n.data.comments.total&&($(".commont-list h3 span").text(0),$(".commont-list").html("<span>暂无评论</span>"))})}function t(n,t,a){$(n).addClass("added-zan").find("span").text(parseInt($(n).find("span").text())+1).end().find("i").removeClass(t).addClass(a)}function a(n,t,a){$(n).removeClass("added-zan").find("span").text(parseInt($(n).find("span").text())-1).end().find("i").removeClass(t).addClass(a)}var e=$(".page-content").data("testVolumeId");$(".title-zan").click(function(){var n=this;$(this).hasClass("added-zan")?$.post("/api/volume/vote",{test_volume_id:e,vote_type:0},function(t){t&&0===t.code&&a(n,"icon-video-zan-big","icon-video-nozan-big")}):$.post("/api/volume/vote",{test_volume_id:e,vote_type:1},function(a){a&&0===a.code&&t(n,"icon-video-nozan-big","icon-video-zan-big")})}),n(),$(".commont-list ul").on("click",".foot>span:first-of-type",function(){var n=$(this).closest("li").data("commentId"),e=this;$(this).hasClass("added-zan")?$.post("/api/comment/vote",{comment_id:n,vote_type:0},function(n){n&&0===n.code&&a(e,"icon-video-zan","icon-video-nozan")}):$.post("/api/comment/vote",{comment_id:n,vote_type:1},function(n){n&&0===n.code&&t(e,"icon-video-nozan","icon-video-zan")})}),$(".commont-list ul").on("click",".foot>span:nth-of-type(2)",function(){var n=this;$(this).hasClass("s")?$(this).removeClass("s").closest(".advice-par").siblings(".advice-adv").slideUp(function(){return $(n).closest(".advice-par").siblings(".advice-adv").remove()}):($("<div class=\"advice-adv clearfix\">\n                    <textarea placeholder='请输入内容'></textarea>\n                    <p>提交</p>\n                </div>").insertAfter($(this).closest(".advice-par")),$(this).addClass("s").closest(".advice-par").siblings(".advice-adv").slideDown())}),$(".commont-list ul").on("click",".advice-adv p",function(){var n=$(".advice-adv textarea").val(),t=$(this).closest("li").data("commentId"),a=this;$.post("/api/volume/addComment",{content:n,test_volume_id:e,pid:t},function(n){if(n&&0===n.code){if($.isEmptyObject(n.data.comment))return;var t=$(a).closest("li"),e=t.find(".connum"),i=parseInt(e.text());i++,e.text(i),$(".advice-sub",t).size()||$(".advice-par",t).after($("<ul/>",{"class":"advice-sub"})),$(a).parent().remove(),$('<li>\n                    <div class="left">\n                        '+(n.data.comment.user.avatar?"<img src="+n.data.comment.user.avatar+' alt="">':'<img src="/static/imgs/header.png" alt="">')+'\n                    </div>\n                    <div class="right">\n                        <p class="title">'+n.data.comment.user.nickname+"</p>\n                        <p>"+n.data.comment.content+"</p>\n                    </div>\n                </li>").prependTo($(".advice-sub",t)),e.parent().removeClass("s")}})}),$(".form-wrapper input").click(function(){var n=$(this).siblings("textarea").val(),t=this;$.post("/api/volume/addComment",{test_volume_id:e,content:n},function(n){0!==n.code||$.isEmptyObject(n.data)||n.data.comment&&!function(){var a=$(".commont-list").offset().top-100;$("html,body").animate({scrollTop:a},800),$(t).siblings("textarea").val("");var e=n.data.comment,i='<li class="newComment" data-comment-id='+e.id+'>\n                                    <div class="advice-par clearfix">\n                                    <div class="left">\n                                        '+(e.user.avatar?"<img src="+e.user.avatar+' alt="">':'<img src="/static/imgs/header.png" alt="">')+'\n                                    </div>\n                                    <div class="right">\n                                        <p class="title">'+e.user.nickname+"</p>\n                                        <p>"+e.content+'</p>\n                                        <p class="foot">\n                                            <span><i class="icon-video-nozan"></i> 赞同 <span>0</span></span>\n                                            <span><i class="icon-video-message"></i> 评论 <span class="connum">0</span></span>\n                                            <!--<span><i class="icon-video-share"></i> 分享 <span>2</span></span>-->\n                                            <span class="fr">'+e.created_at+"</span>\n                                        </p>\n                                    </div>\n                                    </div>\n                                </li>";$(".commont-list>span").remove(),$(i).prependTo(".commont-list>ul");setTimeout(function(){return $(i).removeClass("newComment")},2e3)}()})}),$(".butn-sort").change(function(){n()}),$(".page-navgator a").click(function(){if($(this).data("url")){var t=function(n){var t=n.lastIndexOf("=");return n=n.substring(t+1,n.length)},a=$(".commont-list").offset().top-100;$("html,body").animate({scrollTop:a});var e=t($(this).data("url"));n(e)}})})}]);
//# sourceMappingURL=courseVideo.js.map