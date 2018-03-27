import './modules/header';

$(function () {
    $('.btns').click(function (e) {
        let vid=$(this).data('testVolumeId'),tid=$(this).data('testTopicId');
        if(e.target==$('.btn-go')[0]) {
            let a = $(e.target);
            $.ajax({
                url: '/api/collect',
                type: 'POST',
                data: {test_topic_id: tid, test_volume_id: vid},
                success: function (mess) {
                    if (mess.code == 0) {
                        pop('收藏成功');
                        a.addClass('btn-cancle').removeClass('btn-go').text('已收藏');
                    } else {
                        pop('网络原因，请重新收藏', 'red')
                    }
                },
            })
        }
    });
});