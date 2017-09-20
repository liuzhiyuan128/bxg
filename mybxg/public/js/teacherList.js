define(["jquery",'template','cookie'],function ($,template) {
    $.ajax({
        type:'post',
        url:'/api/teacher',
        dataType:'json',

        success:function (date) {
            console.log(date);
            if(date.code == 200){
                console.log($('#tplTeacher'))
                var html = template('tplTeacher',{list:date.result});
                console.log($('.main').find('tbody'));
                $('.main').find('tbody').html(html)

               
            }

            
        }
    
    })
})