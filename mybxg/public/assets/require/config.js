require.config({
    baseUrl:'/public/assets',
    paths : {
        jquery:'jquery/jquery',
        jqueryM:'jquery/min-jquert',
        cookie:'jquery/jquery.cookie',
        bootstrap:'bootstrap/js/bootstrap.min',
        nprogress:'nprogress/nprogress',
        echarts:'echarts/echarts.min',
        datepicker : './bootstrap-datepicker/js/bootstrap-datepicker',
        anguage : './bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate : 'validate/jquery-validate',
        form : 'jquery-form/jquery.form',
        uploadify : 'uploadify/jquery.uploadify.min',
        common:'../js/common',
        login:'../js/login',
        template:'artTemplate/template-web',
        teacherList:'../js/teacherList',
        util : '../js/util',
        teacheradd : '../js/teacheradd',
        settings : '../js/settings'
    },
    shim : {
        bootstrap:{
            deps:['jquery']
        },
        anguage : {
            deps : ['jquery','datepicker']
        },
        validate : {
            deps : ['jquery']
        },
        uploadify : {
            deps : ['jquery']
        }

    }
})