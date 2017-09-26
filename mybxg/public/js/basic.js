define([
    'jquery',
    'util',
    'template',
    'ckeditor',
    'validate',
    'form'
    
], function($, util,template,validate) {
   //菜单样式
   util.setMenu('/course/course_add');

   //判断是否是编辑页面
   var flag = util.qs('flag');
   //获取传过来的csId的值
    var csId = util.qs('cs_id');

    
  

    $.ajax({
        type : 'get',
        datatype : 'json',
        data : {cs_id : csId},
        url : '/api/course/basic',
        success : function (data) {
            console.log(data)
            if(flag){
                //添加课程
                data.result.operate = '课程添加';
            }else{
                //课程编辑
                data.result.operate = '课程编辑';        
            }
      
            var html = template('basicTpl',data.result);
            $('#basicInfo').html(html);

            //二级联动
            $('#one').on('change',function(){
                var pid = $(this).val();

                $.ajax({
                   type : 'get',
                   datatype : 'json',
                    data : {cg_id : pid},
                    url : "/api/category/child",
                    success : function (data){
                        var tpl = '<option value="">二级分类</option>'
                                +'{{each result}}'
                                +'<option  {{if $index == 0}} selected {{/if}} value="{{$value.cg_id}}">{{$value.cg_name}}</option>'
                                +'{{/each}}';

                        var reader = template.compile(tpl);

                        var html = reader(data);
                        $('#two').html(html)
                    }

                })
            });

            //处理富文本
            CKEDITOR.replace('ckeditor');

            //处理提交
            $('#basicForm').validate({
                sendForm : false,
                valid : function () {

                    //处理富文本同步
                    for(var instance in CKEDITOR.instances){
                        CKEDITOR.instances[instance].updateElement()
                    }
                    $(this).ajaxSubmit({
                       
                        type : 'post',
                        dataType : 'json',
                        url : '/api/course/update/basic',
                        success : function (data){
                            if(data.code==200){
                                location.href = '/course/pictrue?cs_id='+data.result.cs_id;
                            }
                        }
                    })
                }
            })


        }
    })


});