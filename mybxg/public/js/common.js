
	NProgress.start();

	NProgress.done();

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
	console.log($('.aside .profile div img'));

	$('.aside .profile div img').attr('src',loginInfo.tc_avatar)
	$('.aside .profile h4').html(loginInfo['tc_name'])
