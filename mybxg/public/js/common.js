
	define(['jquery','cookie','template'],function($,cookie,template){
		$('.navs ul').prev('a').on('click', function () {
			$(this).next().slideToggle();
		});
		
		
		//退出登录
		$('#loginOut').on('click',function(){
			$.ajax({
				type:'post',
				dateType:'json',
				url:'/api/logout',
				success:function (date){
					if(date.code==200){
					
					
						location.href = '/main/login';
					}
				}
			})
		})
		
		//退出 
		var flag = $.cookie('PHPSESSID');
		
		if(!flag){
			location.href = '/main/login';
		}
		
		//获取 头像信息
		
		var loginInfo = $.cookie('loginInfo');
		
		loginInfo = loginInfo && JSON.parse(loginInfo);

		//头部模板
		var tpl = '<div class="avatar img-circle">'
           		  +'<img src="{{tc_avatar}}">'
        		  +'</div>'
        		  +'<h4>{{tc_name}}</h4>';
		

				  //模板传入
		var reader = template.compile(tpl);

		//传入数据
		var html = reader(loginInfo);

	console.log(html)
		$('.aside .profile').html(html);

	
	})
/* 	NProgress.start();

	NProgress.done();
 */
	
