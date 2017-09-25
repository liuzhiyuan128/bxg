define(['jquery','util','form'],function ($,util,form) {
    //默认选中

 
    util.setMenu(location.pathname);
  
    $('#courseBtn').on('click',function (){
  
        $('#courseAddInfo').ajaxSubmit({
            type : 'post',
            dataType : 'json',
            url : '/api/course/create',
            success : function (data) {
               location.href = '/course/basic?cs_id='+data.result.cs_id+'&flag=1';
            }
             
        })
    })
    
})