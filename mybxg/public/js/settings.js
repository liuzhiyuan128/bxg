
define(['jquery','template'],function ($,template) {

    $.ajax({
        type : 'get',
        url : '/api/teacher/profile',
        dataType : 'json',
        success : function (data) {
            if(data.code==200){
                var tpl = template('settingsTpl',data.result);
                console.log(tpl)
                $('#settingsBox').html(tpl);
            }
        }
    });
});
