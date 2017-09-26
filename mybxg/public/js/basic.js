define([
    'jquery',
    'util',
    'template'
], function($, util,template) {
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

            if(flag){
                //添加课程
                data.result.operate = '课程添加';
            }else{
                //课程编辑
                data.result.operate = '课程编辑';        
            }
      
            var html = template('basicTpl',data.result);
            $('#basicInfo').html(html);

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
            })
        }
    })


});