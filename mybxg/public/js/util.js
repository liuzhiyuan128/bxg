define(['jquery'],function ($) {
    //获取数据的方法 
    return{
        qs : function (key) {
            //获取url指定参数
            var parm = location.search;

            var result = 0;
            if(parm){
                var dataArry = parm.split('&');
            
                $.each(dataArry,function(index,item){
                    if(index==0){
                        item = item.substring(1);
                    }
                    var kv = item.split('=');
                    if(kv[0]==key){
                        result = kv[1];
                        return false;
                    }
                })
            }

            return result;
        }
    }
})