define(['jquery','template','util'],function($,template,util){
    console.log(template);
    //默认选中项
    $('a[href="/teacher/teacher_list"]').addClass('active');
    
    $('a[href="/teacher/teacher_list"]').parent().siblings().find('a').removeClass('active');

    var tbl = '';
   var tcId = util.qs('tcId');
    if(tcId){
      $.ajax({
          type:'get',
          dataType:'json',
          url:'/api/teacher/edit',
          data:{tc_id:tcId},
          success:function (data) {
              if(data.code==200){
               
                tpl = template('teacherTpl',data.result)
                $('#teacherbox').html(tpl);
                //编辑讲师
                submitForm('/api/teacher/update');
               
              }
          
             
       }
          
      })
    }else{
      //添加讲师

      tpl = template('teacherTpl',{})
      $('#teacherbox').html(tpl);
      submitForm('/api/teacher/add');

    }
})

function submitForm(url){

   $('#teacherBtn').on('click',function(){
   
       $.ajax({
        type:'post',
        url:url,
        data:$('#addTeacher').serialize(),
        dataType:'json',
        success:function(data){
           if(data.code==200){
               location.href='/teacher/teacher_list'
           }
        }

       })
      
   });
}