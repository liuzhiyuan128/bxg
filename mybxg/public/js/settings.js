
define(['jquery','template','uploadify'],function ($,template) {

    $.ajax({
        type : 'get',
        url : '/api/teacher/profile',
        dataType : 'json',
        success : function (data) {
            if(data.code==200){
                var tpl = template('settingsTpl',data.result);
             
                $('#settingsBox').html(tpl);
              

                //处理上传头像
                $('#upfile').uploadify({
                    width : 120,
                    height : 120,
                    buttonText : '',
                    itemTemplate : '<span></span>',
                    swf : '/public/assets/uploadify/uploadify.swf',
                    uploader : '/api/uploader/avatar',
                    fileObjName : 'tc_avatar',
                    onUploadSuccess : function(a,b){
                        console.log(b)
                        var obj = JSON.parse(b);
                        $('.preview img').attr('src',obj.result.path);
                    }
                })
            
            }
        }
    });
});
