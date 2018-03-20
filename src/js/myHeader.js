import './modules/header'
$(function () {
  $('#js-file-butn').on('click', function(e){
    $('#js-file').trigger('click');
    $('.crop,.preview').toggle()
  });
  $('#js-file').change(function (){
      var file=this
      if (!file.files || !file.files[0]){
          return;
      }
      var reader = new FileReader();
      reader.onload = function (evt) {
          var replaceSrc = evt.target.result;
          //更换cropper的图片
          $('.clipping-img').cropper('replace', replaceSrc,false);//默认false，适应高度，不失真
      };
      reader.readAsDataURL(file.files[0]);
  });
    //cropper图片裁剪
    $('.clipping-img').cropper({
        aspectRatio: 1/1,//默认比例
        preview: '.preview',//预览视图
        guides: false,  //裁剪框的虚线(九宫格)
        autoCropArea: 0.3,  //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
        dragCrop: false,  //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
        movable: true,  //是否允许移动剪裁框
        resizable: false,  //是否允许改变裁剪框的大小
        mouseWheelZoom: true,  //是否允许通过鼠标滚轮来缩放图片
        touchDragZoom: true,  //是否允许通过触摸移动来缩放图片
        rotatable: false,  //是否允许旋转图片
        crop: function(e) {
            // 输出结果数据裁剪图像。
        }
    });
    $('.butn-submit').click(function () {
        if ($(".clipping-img").attr("src") == null ){
            return false;
        }else{
            var cas = $('.clipping-img').cropper('getCroppedCanvas');//获取被裁剪后的canvas
            var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
           $.ajax({
               url:'/user/saveAvatar',
               type:'post',
               data:{avatar:base64url},
               success:function (mess) {
                   if(mess&&mess.code==0){
                       $('.preview').siblings('img').prop("src",mess.data.avatar);
                       pop('头像设置成功')
                   }else{
                       pop('设置失败，请重试','red')
                   }
               }
           });
            //关闭裁剪框
            $('.clipping-img').cropper("clear");
            $('.crop,.preview').toggle()
        }
    });
    $('.crop-close').click(()=>{
        $('.clipping-img').cropper("clear");
        $('.crop,.preview').toggle()
    })
});