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
       console.log(data)
            var html = template('basicTpl',data.result);
            $('#basicInfo').html(html);
        }
    })


});