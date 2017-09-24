define(['jquery','template','util','datepicker','validate','form','anguage'],function($,template,util){
   
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

    //表单提交的方法
    $('#teacherBtn').on('click',function(){
    
        $('#addTeacher').validate({
            sendForm : false,
            valid : function(){
                $(this).ajaxSubmit({
                    type : 'post',
                    url : url,
                    dataType : 'json',
                    success : function (data){
                  
                        if(data.code == 200){
                        location.href = '/teacher/teacher_list';
                        }
                    }
                })
            },
            description : {
                tcName : {
                    required : '用户名不能为空'
                },
                tcPass : {
                    required : '密码不能为空',
                    pattern : '密码必须为6位数'
                },
                tcJoninDate : {
                    required : '日期不能为空'
                }
            }
            
        });
    });
}
    // 实现表单提交
//    $('#teacherBtn').on('click',function(){
   
//        $.ajax({
//         type:'post',
//         url:url,
//         data:$('#addTeacher').serialize(),
//         dataType:'json',
//         success:function(data){
//            if(data.code==200){
//                location.href='/teacher/teacher_list'
//            }
//         }

//        })
      
//    });
