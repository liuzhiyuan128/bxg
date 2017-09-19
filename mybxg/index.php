<?php

//默认目录名称
$dir = 'main';

//默认的文件名称
$filename = 'index';

//处理路径
if(array_key_exists('PATH_INFO',$_SERVER)){
    //PATH_INFO的属性存在

    $path = $_SERVER['PATH_INFO'];//main/index

    //去掉第一个斜杠
    $str = substr($path,1);

    //字符串分割
    $ret = explode('/',$str);
    if(count($ret) == 2){
        //路由有两层
        $dir = $ret[0]; //覆盖目录
        $filename = $ret[1];//覆盖文件名称

    }else{
        //其他的情况全部跳转到登录页面
        $filename = 'login';
    }
}

include('./views/'.$dir.'/'.$filename.'.html');

?>