/**
 * Created by janeluck on 3/3/16.
 */


({
    appDir: './',   //项目根目录
    dir: './rDist',  //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）

    baseUrl: 'src',   //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的

    modules: [					  //要优化的模块

        {
            name:'global'

        },

         {
             name:'pages/lead/app',
             exclude: ['global']


         },
        {name: 'pages/account/app'}	//说白了就是各页面的入口文件，相对baseUrl的路径，也是省略后缀“.js”
    ],

    fileExclusionRegExp: /^(r|build)\.js|.*\.scss$|^\./,	//过滤，匹配到的文件将不会被输出到输出目录去

    optimizeCss: 'standard',

    removeCombined: true,   //如果为true，将从输出目录中删除已合并的文件

    paths: {
        lead: 'pages/lead',
        global: 'global/global',

        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        vue: 'lib/vue/1.0.17/vue',

        jQuery: 'lib/jquery/2.1.4/jquery',

        chosen: 'lib/chosen/1.5.0/chosen.jquery',
        jqxcore: 'lib/jqwidgets/js/jqxcore',
        jqxbuttons: 'lib/jqwidgets/js/jqxbuttons',
        jqxpanel: 'lib/jqwidgets/js/jqxpanel',
        jqxscrollbar: 'lib/jqwidgets/js/jqxscrollbar',
        jqxtree: 'lib/jqwidgets/js/jqxtree'
    },
    shim: {
        "chosen": {
            export: "$",
            deps: ['jQuery']
        },
        "lib/layer/2.1/layer": {
            export: "layer",
            deps: ['jQuery']
        },
        "jqxcore": {
            export: "$",
            deps: ['jQuery']
        },
        "jqxbuttons": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxpanel": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxscrollbar": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        },
        "jqxtree": {
            export: "$",
            deps: ['jQuery', "jqxcore"]
        }
    }
})