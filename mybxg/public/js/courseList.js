define(['jquery','util','template'],function ($,util,template) {
    //默认选中
   util.setMenu(location.pathname);

//    ajax请求
    $.ajax({
        type : 'get',
        dataType : 'json',
        url : "/api/course",
        success : function (data) {
          
            var tpl = template('courseListTpl',{list:data.result});
           
                $('#courseListInfo').html(tpl);
        }
    })
})