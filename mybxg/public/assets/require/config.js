require.config({
    baseUrl:'/public/assets',
    paths : {
        jquery:'jquery/jquery',
        jqueryM:'jquery/min-jquert',
        cookie:'jquery/jquery.cookie',
        bootstrap:'bootstrap/js/bootstrap.min',
        nprogress:'nprogress/nprogress',
        echarts:'echarts/echarts.min',
        common:'../js/common',
        login:'../js/login',
        template:'artTemplate/template-web',
        teacherList:'../js/teacherList',
     
    },
    shim : {
        bootstrap:{
            deps:['jquery']
        }
    }
})