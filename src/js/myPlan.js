import './modules/header';
import './modules/timeplan';

$(function () {
    //用于记录日期，显示的时候，根据dateObj中的日期的年月显示
    var dateObj = (function () {
        var _date = new Date();    // 默认为当前系统时间
        return {
            getDate: function () {
                return _date;
            },
            setDate: function (date) {
                _date = date;
            }
        };
    })();

    //日期转化为字符串， 4位年+2位月+2位日
    function getDateStr(date) {
        var _year = date.getFullYear();
        var _month = date.getMonth() + 1;    // 月从0开始计数
        var _d = date.getDate();

        _month = (_month > 9) ? ("" + _month) : ("0" + _month);
        _d = (_d > 9) ? ("" + _d) : ("0" + _d);
        return _year + _month + _d;
    }

    //页面加载时获取当天的备考计划
    function todayplan() {
        var date = new Date(),
            _year = date.getFullYear(),
            _month = date.getMonth() + 1,    // 月从0开始计数
            _d = date.getDate();
        var _month = (_month > 9) ? ("" + _month) : ("0" + _month),
            _d = (_d > 9) ? ("" + _d) : ("0" + _d),
            w = _year + '-' + _month + '-' + _d;
        getplan(w)
    }

    todayplan();

    //获取备考规划
    function getplan(w) {
        // console.log(w)
        $.ajax({
            url: '/api/plan/info',
            data: `planDate=${w}`,
            success: function (mess) {
                $('.detailplan,.recite,.program').html('');
                let userLevel=mess.user.current_level;
                if (mess.planTodos.length >= 1) {
                    let lis = '', todo = mess.planTodos;
                    $.each(todo, (i, v) => {
                        lis += `<div class="column-title">
                                        <div class="title">${v.todo_title}</div>
                                    </div>
                                    <div class="column-bd">
                                        <ul class="list">
                                            <li class="item">
                                                <div class="situation">
                                                    <input type="checkbox" disabled ${v.status == 1 ? "checked" : ""}>
                                                    <span class="row row-1" style="width: 410px;display: inline-block;margin-bottom: -2px">${v.todo_content}</span>
                                                </div>
                                                <div class="btns" id=${v.id} data-status=${v.status}>
                                                    <a href="javaScript:;" class="btn-go do" id="3" data-title=${v.todo_title} data-content=${v.todo_content}>查看编辑</a>
                                                    <a href="javaScript:;" class="btn-go do" id="2">完成</a>
                                                    <a href="javaScript:;" class="btn-cancle" id="1">未完成</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>`
                    });
                    $(`<div class="plan-column">
                            <div class="column-hd">
                                <h3 class="title">日程</h3>
                            </div>
                            <ul class="colunmdetail">
                                ${lis}
                            </ul>
                        </div>`).appendTo('.program')
                }
                if (mess && mess.plan) {
                    if (mess.plan.external_words.length >= 1) {
                        let word = mess.plan.external_words;
                        let lis = '';
                        $.each(word, (i, v) => {
                            lis += `<li class="item">
                                <div class="situation">
                                    <input type="checkbox" disabled ${v.status == 2 ? "checked" : ""}>
                                    <span class="row row-1">${v.plan_word}</span>
                                </div>
                                <div class="btns" id=${v.id} data-status=${v.status}>
                                    <a href="javaScript:;" class="btn-go do" id="2">完成</a>
                                    <a href="javaScript:;" class="btn-cancle" id="1">未完成</a>
                                </div>
                           </li>`});
                        $(`<div class="plan-column">
                                <div class="column-hd">
                                    <h3 class="title">背诵</h3>
                                </div>
                                <div class="colunmdetail">
                                    <div class="column-title">
                                        <div class="title">外部词汇</div>
                                    </div>
                                    <div class="column-bd">
                                        <ul class="list">${lis}</ul>
                                    </div>
                                </div>
                            </div>`).appendTo('.recite')
                    }
                    if (!$.isEmptyObject(mess.plan.testVolumeGroups)) {
                        let data = mess.plan.testVolumeGroups;
                        $.each(data, (key, value) => {
                            // console.log(key, value)
                            var planColumn = $(`<div class="plan-column">
                                            <div class="column-hd">
                                                <h3 class="title">${key}</h3>
                                            </div>
                                       </div>`).appendTo('.detailplan')
                            $.each(value, (k, v) => {
                                var planul = $(`<div class="colunmdetail">
                                                    <div class="column-title">
                                                        <div class="title">${k}</div>
                                                        <div class="done-progress">
                                                            <span class="txt">完成</span>
                                                            <span class="done-range">
                                                                <span class="cur" style="width: ${v.testBookPercentage}%;"></span>
                                                            </span>
                                                            <span class="num">${v.testBookPercentage}%</span>
                                                        </div>
                                                    </div>
                                                 </div>`).appendTo(planColumn)
                                // console.log(k, v)
                                let lis = ''
                                $.each(v.datas, (i, t) => {
                                    let time = t.time_count == 0 ? '0s' :
                                        parseInt(t.time_count / 60) == 0 ? `${t.time_count}s` :
                                            `${parseInt(t.time_count / 60)}min${t.time_count % 60}s`;
                                    lis += `<li class="item">
                                                <div class="situation">
                                                    <input type="checkbox" disabled ${t.done_num == t.total_num ? "checked" : ""}>
                                                    <span class="row row-1">${t.test_volume_name}</span>
                                                    <span class="row row-2">已做题 ${t.done_num}/${t.total_num}</span>
                                                    <span class="row row-3">总耗时 ${time}</span>
                                                    <span class="row row-4">正确率 ${t.correct_rate}%</span>
                                                </div>
                                                <div class="btns">
                                                    <a href="javaScript:;" class="btn-go do" data-date=${mess.planDate} data-id=${t.id}>做题</a>
                                                    <a href=${t.test_view_url} class="btn-cancle see">查看</a>
                                                    ${t.test_video_url?
                                                        `${userLevel<t.resource_video.level?
                                                        `<span class="btn-cancle noLev" onclick=" $('.applyBox').show()">视频</span>`:
                                                        `<a href=${t.test_video_url} class="btn-cancle video">视频</a>`}`:
                                                        `<span class="btn-cancle noRes">视频</span>`}
                                                    ${t.test_download_url?
                                                        `${userLevel<t.resource_document.level?
                                                        `<span class="btn-cancle noLev" onclick=" $('.applyBox').show()">下载</span>`:
                                                        `<a href=${t.test_download_url} class="btn-cancle download">下载</a>`}`:
                                                        `<span class="btn-cancle noRes">下载</span>`}
                                                </div>
                                            </li>`});
                                $(`<div class="column-bd">
                                        <ul class="list">
                                            ${lis}
                                        </ul>
                                    </div>`).appendTo(planul)
                            })
                        })
                    }
                    let rate=mess.plan.today_complete_rate;
                    $('.day-plan circle:nth-of-type(2)').attr('stroke-dasharray', `${rate * 2} ${200 - rate * 2}`)
                    $('.day-plan span').text(`${rate}%`)
                }
            },
            error: function () {
                $('.detailplan,.recite').html('')
            }
        })
    }
    //重做选择弹窗显示
    $('.detailplan').on('click','.do',function () {
        let planDate=$(this).data('date'),id=$(this).data('id');
        $.post('/api/volume/needConfirm',{plan_date:planDate,test_volume_id:id},function (mess) {
            if(mess&&mess.code===0){
                if(mess.data.needConfirm){
                    $('.reorco .btn-go').attr('href',"/exam/test/"+id+"?restart=0");
                    $('.reorco .btn-re').attr('href',"/exam/test/"+id+"?restart=1");
                    $('.reorco').show()
                }else{
                    let openLink = $("<a>");
                    openLink.attr('href', "/exam/test/"+id+"?restart=0");
                    openLink[0].click()
                }
            }
        })
    });
    $('.reorco a').click(function (e) {
        e.stopPropagation();
        $('.reorco').hide()
    })
    //发送背诵完成状态
    $('.recite').click(function (e) {
        let ei = $(e.target), id = ei.parent().attr('id'), s = ei.parent().data('status');
        if (s == 1 && ei.attr('id') == 2) {
            $(ei.closest('li').find('input')).prop('checked', true);
            word(id, 2)
            ei.parent().data('status', 2)
        } else if (s == 2 && ei.attr('id') == 1) {
            $(ei.closest('li').find('input')).prop('checked', false);
            word(id, 1)
            ei.parent().data('status', 1)
        }
    });

    function word(id, sta) {
        $.ajax({
            url: '/api/plan/word/changeStatus',
            type: 'post',
            data: {plan_word_id: id, status: sta}
        })
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
        $('.month').text(`${titleStr}`);
        $('.year-month span').text(`${titleStr}`);
        $('.plan-summary .title span').text(`${titleStr}`);
        var _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
        // 设置时间轴中的日期数据
        $(".day ul li").each((i, v) => {
            $(v).removeClass('today');
            let dayweek = date.getDay() == 0 ? 7 : date.getDay();
            var _thisDay = new Date(_year, _month - 1, date.getDate() + i + 1 - dayweek);
            var _thisDayStr = getDateStr(_thisDay);
            var w = _thisDayStr.substring(0, 4) + '-' + _thisDayStr.substring(4, 6) + '-' + _thisDayStr.substring(6, 8)
            $(v).attr('data', w);
            $(v).text(_thisDay.getDate());
            if (_thisDayStr == getDateStr(new Date())) {
                $(v).addClass('today clicked');
                $('.week li').eq(i).addClass('clicked')
            } else if (_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
                $(v).removeClass('otherMonth');
                $(v).addClass('currentMonth')
            } else {
                $(v).removeClass('currentMonth');
                $(v).addClass('otherMonth')
            }
        });
        //设置月视图中日期数据
        $('.month_schedule td').each((i, v) => {
            $(v).removeClass('today')
            let dayweek = _firstDay.getDay() == 0 ? 7 : _firstDay.getDay()
            var _thisDay = new Date(_year, _month - 1, i + 2 - dayweek);
            var _thisDayStr = getDateStr(_thisDay);
            var w = _thisDayStr.substring(0, 4) + '-' + _thisDayStr.substring(4, 6) + '-' + _thisDayStr.substring(6, 8)
            $(v).attr('data', w);
            $(v).children('b').text(_thisDay.getDate());
            if (_thisDayStr == getDateStr(new Date())) {    // 当前天
                $(v).addClass('today')
            } else if (_thisDayStr.substr(0, 6) == getDateStr(_firstDay).substr(0, 6)) {
                $(v).removeClass('otherMonth');
                $(v).addClass('currentMonth')  // 当前月
            } else {    // 其他月
                $(v).removeClass('currentMonth');
                $(v).addClass('otherMonth')
            }
        })
    }

    $('.thistoday').click(() => {
        dateObj.setDate(new Date());
        $('.clicked').removeClass('clicked');
        showCalendarData();
        todayplan()
    });
    //时间轴时间选择
    $('.week li').click(function () {
        $(this).addClass('clicked').siblings().removeClass("clicked");
        let index = $(this).index();
        $('.day ul li').eq(index).addClass('clicked').siblings().removeClass("clicked");
        let w = $(this).attr('data');
        getplan(w)
    });
    $('.day ul li').click(function () {
        $(this).addClass('clicked').siblings().removeClass("clicked");
        let index = $(this).index();
        $('.week li').eq(index).addClass('clicked').siblings().removeClass("clicked");
        let w = $(this).attr('data');
        getplan(w)
    });
    //上一个星期，下一个星期时间
    $('.prev').click(() => {
        let date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7));
        showCalendarData();
        clickplan()
    });
    $('.next').click(() => {
        let date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7));
        showCalendarData();
        clickplan()
    });

    //改变日期，获取选中日期的规划
    function clickplan() {
        let w = $('.day ul li.clicked').attr('data');
        getplan(w)
    }

    //上个月，下个月时间
    $('.mprev').click(() => {
        $('.plan').remove();
        let date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
        showCalendarData();
        getmonthplan()
    });
    $('.mnext').click(() => {
        $('.plan').remove();
        let date = dateObj.getDate();
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
        showCalendarData();
        getmonthplan()
    });


    //月视图展示
    $('.thismon').click(() => {
        $('.plan').remove();
        getmonthplan();
        $('.month_scheduleBox').show()
    });

    $('.thisweek').click(() => {
        $('.month_scheduleBox').hide()
    });

    $('.month_schedule').on('click', '.plan', function () {
        // console.log($(this))
        let par = $(this).parent();
        let date = par.attr('data');
        let left = par.position().left;
        let top = par.position().top;
        // console.log(left,top)
        // console.log($(this).parent())
        $('.planshow').removeClass('l r t b').hide();
        if (left < 500 && top < 400) {
            par.find('.planshow').addClass('l t')
        } else if (left > 500 && top < 400) {
            par.find('.planshow').addClass('r t')
        } else if (left < 500 && top > 400) {
            par.find('.planshow').addClass('l b')
        } else if (left > 500 && top > 400) {
            par.find('.planshow').addClass('r b')
        }
        // console.log(date)
        $.ajax({
            url: '/api/plan/info',
            data: `planDate=${date}`,
            success: function (mess) {
                $('.planshow').html('');
                if (mess && mess.plan) {
                    let rate = mess.plan.today_complete_rate;
                    $(`<div class="top">
                            <h3>${mess.plan.plan_date}</h3>
                            <a class="close">×</a>
                            </div>
                        <div class="dayprogress">
                            <div class="done-circle">
                                <svg width="112" height="112" viewbox="0 0 112 112">
                                    <circle cx="56" cy="56" r="48" stroke-width="10" stroke="#ffde00" fill="none"></circle>
                                    <circle cx="56" cy="56" r="48" stroke-width="10" stroke="#00e290" fill="none"
                                            transform="matrix(0,-1,1,0,0,112)" stroke-dasharray="${rate / 100 * 300} ${300 - rate / 100 * 300}"></circle>
                                </svg>
                                <span class="inner">${rate}%</span>
                            </div>
                            <p>当日计划完成</p>
                        </div>
                        <ul class="mon-day-plan"></ul>`).appendTo('.planshow')
                    if (mess.plan.external_words.length >= 1) {
                        let word = mess.plan.external_words;
                        let aa = $(`<li>
                                    <h3 class="title">背诵</h3>
                                    <h3 class="subtitle">外部词汇</h3>
                                   </li>`).appendTo($('.mon-day-plan'));
                        let lis = '';
                        $.each(word, (i, v) => {
                            lis += `<li>
                                    <span>${v.plan_word}</span>
                                    <span>${v.status == 1 ? '未完成' : '已完成'}</span>
                                  </li>`
                        })
                        $(`<ul class="dayplan">${lis}</ul>`).appendTo(aa)
                    }
                    if (!$.isEmptyObject(mess.plan.testVolumeGroups)) {
                        let data = mess.plan.testVolumeGroups;
                        $.each(data, (key, value) => {
                            let bb = $(`<li>
                                            <h3 class="title">${key}</h3>
                                        </li>`).appendTo($('.mon-day-plan'))
                            $.each(value, (k, v) => {
                                $(`<h3 class="subtitle">${k}</h3>`).appendTo(bb)
                                let lis = ''
                                $.each(v.datas, (i, t) => {
                                    lis += `<li>
                                        <span>${t.test_volume_name}</span>
                                        <span>已做题&nbsp;${t.done_num}/${t.total_num}</span>
                                  </li>`
                                });
                                $(`<ul class="dayplan">${lis}</ul>`).appendTo(bb)
                            })
                        });

                    }
                    $(`<div class="toDetailPlan" data="${mess.plan.plan_date}">查看当日规划</div>`).appendTo($('.planshow'))
                }
            }
        });
        par.find('.planshow').show()
    });

    $('.month_schedule').on('click', '.planshow .close', () => {
        $('.planshow').hide();
        return false
    });

    //月视图查看当日备考规划
    $('.month_schedule').on('click', '.planshow .toDetailPlan', () => {
        $('.planshow').hide();
        $('.month_scheduleBox').hide();
        let w = $('.toDetailPlan').attr('data');
        getplan(w);
        let e = w.split('-');
        dateObj.setDate(new Date(e[0], parseInt(e[1]) - 1, parseInt(e[2])));
        showCalendarData()
        $('.clicked').removeClass('clicked');
        $.each($('.day ul li'), (i, v) => {
            if ($(v).attr('data') == w) {
                // console.log(w)
                $(v).addClass('clicked');
                $('.week li').eq(i).addClass('clicked')
            }
        });
        return false
    });

    //获取月规划
    function getmonthplan() {
        $('.plan').remove()
        $.ajax({
            url: '/api/plan/monthView',
            data: {startDate: $('#monthfirst').attr('data'), endDate: $('#monthlast').attr('data')},
            // data: {startDate: '2018-01-01', endDate: '2018-01-31'},
            success: function (r) {
                // console.log(r)
                // console.log(r.code==0)
                // console.log(r.data.plan.length!=0)
                if (r.code == 0 && r.data) {
                    if (r.data.plan.length >= 1) {
                        let plan = r.data.plan
                        // console.log(plan)
                        $.each(plan, (i, v) => {
                            // console.log(v)
                            let date = v.plan_date
                            let title = v.testVolumes
                            // console.log(date,title)
                            $('.month_schedule td').each((i, k) => {
                                if ($(k).attr('data') == date && title.length != 0) {
                                    $(`<div class="plan">
                                        <p>${title[0].test_volume_name}</p>
                                        <div class="planshow"></div>
                                   </div>`).appendTo($(k))
                                }
                            })
                        })
                    }
                }
            }
        })
    }

    //距离考试时间设置
    $(document).click(function (e) {
        if (e.target == $('.scheduleBox').get(0)) {
            $('.scheduleBox').hide()
        } else if (e.target == $('.month_scheduleBox').get(0)) {
            $('.month_scheduleBox').hide()
        } else if (e.target == $('.todoBox').get(0)) {
            $('.todoBox').hide()
        }
    });
    $('.day-distance').click(() => {
        $('.scheduleBox').show()
    });
    $('.schedule_close').click(() => {
        $('.scheduleBox').hide()
    });
    $('.schedule .bot').click(function () {
        if ($('#year').val() != '0' && $('#month').val() != '0' && $('#day').val() != '0') {
            let month = $('#month').val() > 9 ? $('#month').val() : '0' + $('#month').val()
            let day = $('#day').val() > 9 ? $('#day').val() : '0' + $('#day').val()
            let time = $('#year').val() + '-' + month + '-' + day
            $.ajax({
                url: '/api/plan/changeDate',
                type: 'post',
                data: {exam_date: time},
                success: function (mess) {
                    // console.log(mess)
                    if (mess.code == 0) {
                        pop('时间设置成功')
                        let data = mess.data.diffDate
                        $('#lastday').text(data.day)
                        $('#lasthour').text(data.hour)
                        $('#lastmin').text(data.minute)
                        $('input[name=exam_date]').val(time)
                        $('.scheduleBox').hide()
                    } else if (mess.code == 1) {
                        // console.log(mess.message)
                    }
                },
                error: function (mess) {
                    // console.log(mess)
                }
            })
        } else {
            pop('请设置正确的时间', 'red')
        }
    });

    //月度做题学习总结
    summary();

    function summary() {
        let s = $('.plan-summary .title span').text()
        // console.log(s.substring(0,4)+'-'+s.substring(5,7)+'-01')
        let month = s.substring(0, 4) + '-' + s.substring(5, 7) + '-01'
        $.ajax({
            url: '/api/plan/summary',
            data: {planMonth: month},
            success: function (mess) {
                if (mess && mess.data) {
                    if (mess.data.summary && mess.data.totalProgress) {
                        $('.lf-bd').html('');
                        let lis = '';
                        let data = mess.data.summary;
                        let rate = mess.data.totalProgress;
                        $('.rg-precent').attr('stroke-dasharray', `${rate * 4} ${400 - rate * 4}`)
                        $('.rg .inner').text(`${rate}%`)
                        $.each(data, (i, v) => {
                            lis += `<li class="done-progress">
                                    <span class="txt">${v.subject_name}</span>
                                    <span class="done-range">
                                        <span class="cur" style="width: ${v.total_percent}%;"></span>
                                    </span>
                                    <span class="num">${v.done_total_num}/${v.total_num}</span>
                                </li>`
                        });
                        $(lis).appendTo('.lf-bd')
                    } else {
                        $('.lf-bd').html('');
                        let lis = `<li class="done-progress">
                                        <span class="txt">词汇</span>
                                        <span class="done-range">
                                            <span class="cur" style="width: 0%;"></span>
                                        </span>
                                        <span class="num">0/0</span>
                                    </li>
                                    <li class="done-progress">
                                        <span class="txt">填空</span>
                                        <span class="done-range">
                                            <span class="cur" style="width: 0%;"></span>
                                        </span>
                                        <span class="num">0/0</span>
                                    </li>
                                    <li class="done-progress">
                                        <span class="txt">阅读</span>
                                        <span class="done-range">
                                            <span class="cur" style="width: 0%;"></span>
                                        </span>
                                        <span class="num">0/0</span>
                                    </li>
                                    <li class="done-progress">
                                        <span class="txt">数学</span>
                                        <span class="done-range">
                                            <span class="cur" style="width: 0%;"></span>
                                        </span>
                                        <span class="num">0/0</span>
                                    </li>
                                    <li class="done-progress">
                                        <span class="txt">作文</span>
                                        <span class="done-range">
                                            <span class="cur" style="width: 0%;"></span>
                                        </span>
                                        <span class="num">0/0</span>
                                    </li>`;
                        $(lis).appendTo('.lf-bd');
                        $('.rg-precent').attr('stroke-dasharray', `0 400`);
                        $('.rg .inner').text(`0%`)
                    }
                }
            },
            error: function () {
            }
        })
    }

    $('.btn-prev').click(() => {
        let date = dateObj.getDate()
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
        var _dateStr = getDateStr(date);
        var titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(4, 2) + "月";
        $('.plan-summary .title span').text(`${titleStr}`);
        summary()
    });
    $('.btn-next').click(() => {
        let date = dateObj.getDate()
        dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
        var _dateStr = getDateStr(date);
        var titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(4, 2) + "月";
        $('.plan-summary .title span').text(`${titleStr}`)
        summary()
    });
    //添加日程
    $('.addplan').click(() => {
        $('.todo .bot').attr('id', 0);
        $('.todoBox').show()
    });
    $('.todo_close').click(() => {
        $('.todoBox').hide();
        return false
    });
    $('.todo .bot').click(function () {
        $('.todoBox').hide();
        let id = $(this).attr('id');
        let date = $('.day ul li.clicked').attr('data');
        let title = $('input[name="todoTitle"]').val(), cont = $('textarea[name="todoContent"]').val();
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
                success: function (mess) {
                    if (mess && mess.code == 0) {
                        pop('日程添加成功');
                        $('.todo input').val('');
                        $('.todo textarea').val('');
                        getplan(date)
                    }
                },
            })
        }
    });
    $('.program').click(function (e) {
        let ei = $(e.target), id = ei.parent().attr('id'), s = ei.parent().data('status');
        // console.log(id,s,ei.attr('id'))
        if (s == 0 && ei.attr('id') == 2) {
            $.post('/api/saveTodo', {todo_id: id, status: 1}, function (mess) {
                if (mess && mess.code === 0) {
                    $(ei.closest('li').find('input')).prop('checked', true);
                    ei.parent().data('status', 1)
                }
            })
        } else if (s == 1 && ei.attr('id') == 1) {
            $.post('/api/saveTodo', {todo_id: id, status: 0}, function (mess) {
                if (mess && mess.code === 0) {
                    $(ei.closest('li').find('input')).prop('checked', false);
                    ei.parent().data('status', 0)
                }
            })
        } else if (ei.attr('id') == 3) {
            let t = ei.data('title'), c = ei.data('content');
            $('.todo input').val(t);
            $('.todo textarea').val(c);
            $('.todo .bot').attr('id', id)
            $('.todoBox').show()
        }
    })
});