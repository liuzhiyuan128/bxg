
define([
    'jquery',
    'template',
    'util',
    'uploadify',
    'Jcrop',
    'form'
], function($,template,util) {
    //菜单选中
   
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

            });

            //剪切图片
            $('#cropBtn').on('click',function () {
              
                 //开关 目的剪切图片和保存图片
            var flag = $('#cropBtn').attr('data-flag');
                if(flag){
                 
                    //第二次点击保存图片 跳转页面
                   $('#cropForm').ajaxSubmit({
                       type : 'post',
                       datatype : 'json',
                       url : '/api/course/update/picture',
                       data : {cs_id:csId},
                       success : function (data){
                           if(data.code==200){
                              console.log(data);
                                location.href = '/course/lesson?cs_id='+data.result.cs_id;
                           }
                       }
                   })
                  
                }else{
                    //第一次点击剪切图片

                    $(this).html('保存图片').attr('data-flag',1);
                    
                    imgCrop()
                } 
            });
            var img = $('.preview img').eq(0);
           
            //一个剪切图片的函数
            function imgCrop(){
                 img.Jcrop({
             
                     aspctRatio : 2,
                     bgColor : 'pink'
                 },function () {
                       
                        var width = this.ui.stage.width;
                        var height = this.ui.stage.height;
                        var x = 0;
                        var y = height/4;

                     
                        var w = width;
                        var h = height/2
                       
                        //动态创建选中框
                        this.newSelection();
                        this.setSelect([x,y,300,150]);

                        //初始化预览图
                        this.initComponent('Thumbnailer',{
                            width : 240,
                            height : 120,
                            mythumb : '.thumb'
                        });
                        //预览图位置
                        $('.jcrop-thumb').css({position:'absolute',top:0,left:0})
//                     监控选取变化事件
                        img.parent().on('cropstart cropmove cropend',function (a,b,c) {
                       
                            var $inputs =  $('#cropForm').find('input');
                            $inputs.eq(0).val(c.x);
                            $inputs.eq(1).val(c.y);
                            $inputs.eq(2).val(c.w);
                            $inputs.eq(3).val(c.h);
                        })
                 })
            }
            
        }
       }
   });
  
    
});