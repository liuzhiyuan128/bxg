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
        region : 'jquery-region/jquery.region',
        form : 'jquery-form/jquery.form',
        uploadify : 'uploadify/jquery.uploadify.min',
        ckeditor : 'ckeditor/ckeditor',
        common:'../js/common',
        login:'../js/login',
        template:'artTemplate/template-web',
        teacherList:'../js/teacherList',
        util : '../js/util',
        teacheradd : '../js/teacheradd',
        settings : '../js/settings',
        index : '../js/index',
        courseList : '../js/courseList'
        
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
        },
         ckeditor : {
           exports : 'CKEDITOR'
        }

    }
})