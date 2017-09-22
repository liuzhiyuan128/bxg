define(['jquery','template','util'],function($,template,util){
    console.log(template);
    //默认选中项
    $('a[href="/teacher/teacher_list"]').addClass('active');
    
    $('a[href="/teacher/teacher_list"]').parent().siblings().find('a').removeClass('active');

    var tbl = '';
   var tcId = util.qs('tcId');
    if(tcId){

       $('.breadcrumb .active').html('讲师编辑');

    
      $.ajax({
          type:'get',
         
          dataType:'json',
          url:'/api/teacher/edit',
          data:{tc_id:tcId},
          success:function (data) {
              if(data.code==200){
                console.log(data);
                tpl = template('teacherTpl',data.result)
                $('#teacherbox').html(tpl);
                
              }
          
             
          }
          
      })
    }else{
 
      tpl = template('teacherTpl',{})
      $('#teacherbox').html(tpl);
    }
})