import './modules/header';

$(function () {
    $('.btns').click(function (e) {
        let vid=$(this).data('testVolumeId'),tid=$(this).data('testTopicId')
        if(e.target==$('.btn-go')[0]){
            let a=$(e.target)
            if(a.hasClass('added')){
                pop('已添加收藏','#fa8c16')
            }else{
                $.ajax({
                    url: '/collect',
                    type: 'POST',
                    data: {test_topic_id: tid ,test_volume_id: vid},
                    success: function (mess) {
                        if (mess.code == 0) {
                            pop('收藏成功');
                            a.addClass('added');
                            $('.collect i').removeClass('icon-collection').addClass('icon-collection1')
                        } else {
                            pop('网络原因，请重新收藏', 'red')
                        }
                    },
                })
            }
        }else if(e.target==$('.btn-cancle')[0]){
            window.location.href='/analysis?test_volume_id=' + vid + '&test_topic_id=' + tid
        }
    });
});