define(['jquery','cookie'],function($,cookie){
    $('#myLogin').on('click',function(){
        
                   $.ajax(
                       {
                           url:'/api/login',
                           type:'post',
                           data:$('#loginForm').serialize(),
                           dataType:'json',
                           success:function(date){
                               if(date.code == 200){
                                   //用cookie的特性把登录需要的传进去
                                 
                                $.cookie('loginInfo',JSON.stringify(date.result),{path:'/'});
                                   
                                   location.href = '/main/index';
        
                               }
                           }
        
                       }
                   )
                 
                    return false;
                })
})