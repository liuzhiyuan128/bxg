define(["jquery",'template','cookie','bootstrap'],function ($,template) {
    $.ajax({
        type:'post',
        url:'/api/teacher',
        dataType:'json',

        success:function (date) {
            
            if(date.code == 200){
                
           
                var html = template('tplTeacher',{list:date.result});
               
                $('.main').find('tbody').html(html);
                
                   //获取状态值
                   
                $('.logoutBtn').on('click',function(){
                    var tcStatus = $(this).parent().attr('data-tcStatus');
                    var tcId = $(this).parent().attr('data-tcId');
                //   $(this).parent().attr('data-tcStatus',tcStatus==0 ? 1 : 0);
            
                     var $that = $(this);
                      
               
                    $.ajax({
                        type:'post',
                        dataType:'json',
                        url:'/api/teacher/handle',
                        data:{tc_id:tcId,tc_status:tcStatus},
                        success: function (data) {
                          
                            if(data.code==200){
                                $that.parent().attr('data-tcStatus',data.result.tc_status);
                                if(data.result.tc_status==1){
                                    $that.html('注销');
                                }else if(data.result.tc_status==0){
                                    $that.html('登录');
                                }
                            }
                        }
                    })
                });
                $('.preview').on('click',function() {
                    var tcId = $(this).parent().attr('data-tcId');
                      console.log(tcId);
                    $.ajax({
                        type : 'get',
                        data : {tc_id:tcId},
                        dataType : 'json',
                        url:'/api/teacher/view',
                        success : function(data){
                            if(data.code==200){
                                var html = template('modelTpl',data.result);
                               $('#modelInfo').html(html);
                            }
                             
                        }

                    });
                });
               
            }

            
        }
    
    });

   
})