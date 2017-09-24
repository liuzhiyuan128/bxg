
define(['jquery','template','ckeditor','uploadify','region'],function ($,template,CKEDITOR) {

    $.ajax({
        type : 'get',
        url : '/api/teacher/profile',
        dataType : 'json',
        success : function (data) {
            if(data.code==200){
                var tpl = template('settingsTpl',data.result);
             
                $('#settingsBox').html(tpl);
                console.log(data)
              

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
                     
                        var obj = JSON.parse(b);
                        $('.preview img').attr('src',obj.result.path);
                    }
                })

                //三级联动
                $('#pcd').region({
                    url : '/public/assets/jquery-region/region.json'
                },
                {
                    toolbarGroups : [
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                        { name: 'links', groups: [ 'links' ] },
                        { name: 'insert', groups: [ 'insert' ] },
                        { name: 'forms', groups: [ 'forms' ] },
                        { name: 'tools', groups: [ 'tools' ] },
                        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
                        { name: 'others', groups: [ 'others' ] },
                        '/',
                        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                        { name: 'styles', groups: [ 'styles' ] },
                        { name: 'colors', groups: [ 'colors' ] },
                        { name: 'about', groups: [ 'about' ] }
                    ]
                
                }
            );

                // 处理富文本
                CKEDITOR.replace('editor')
            
            }
        }
    });
});
