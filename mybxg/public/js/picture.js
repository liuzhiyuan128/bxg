
define([
    'jquery',
    'template',
    'util',
    'uploadify'
], function($,template,util) {
    //菜单选中
    console.log(util.setMenu)
    util.setMenu('/course/course_add')
    //获取传过来的csId
    var csId = util.qs('cs_id');
    

   $.ajax({
       type : 'get',
       datatype : 'json',
       data : {cs_id : csId},
       url : '/api/course/picture',
       success : function (data){
           console.log(data);
        if(data.code == 200){
            var html = template('pictureTpl',data.result);
      /* 
            var reader = template.compile(tpl);
            var html = reader(data.result); */
            $('#picturInfo').html(html);

            //上传图片
            
            $('#myfile').uploadify({
                swf: '/public/assets/uploadify/uploadify.swf',
                width : 80,
                height : 'auto',
                buttonText : '选择图片',
                buttonClass : 'btn btn-success btn-sm',                
                uploader : '/api/uploader/cover',
                fileObjName : 'cs_cover_original',
                itemTemplate : '<span></span>',
                formData : {cs_id : csId},
                onUploadSuccess : function (a,b,c){
                    var data = JSON.parse(b.trim());
                    
                    if(data.code==200){
                        console.log($('.preview img')[0])
                        $('.preview img').attr('src',data.result.path)
                    }
                    
                }

            })
            
        }
       }
   })
    
});