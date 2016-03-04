/**
 * Created by janeluck on 2/27/16.
 */
/*requirejs.config({
    //By default load any module IDs from 'http://127.0.0.1:6060/src'
    baseUrl: 'http://127.0.0.1:6060/src',
    //baseUrl: 'src',
    //except, if the module ID starts with "account",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        lead: 'pages/lead',
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        vue: 'lib/vue/1.0.17/vue',
       // layer: 'lib/layer/2.1/layer',
        jQuery: 'lib/jquery/2.1.4/jquery',
        chosen: 'lib/chosen/1.5.0/chosen.jquery',
        jqxcore: 'lib/jqwidgets/js/jqxcore',
        jqxbuttons: 'lib/jqwidgets/js/jqxbuttons',
        jqxpanel: 'lib/jqwidgets/js/jqxpanel',
        jqxscrollbar: 'lib/jqwidgets/js/jqxscrollbar',
        jqxtree: 'lib/jqwidgets/js/jqxtree'
    },
    shim: {
        "lib/layer/2.1/layer": {
            export: "$",
            deps: ['jQuery']
        },
        "chosen": {
            export: "$",
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

});*/

// Start the main app logic.

requirejs(['global','lead/treeView', 'vue',  'chosen'],
    function   ( a, b, Vue) {


        console.log($);
        console.log(a.$);
        console.log(a.layer);
        b.initialize();
        console.dir(arguments);
        $('#oChosen').chosen();

    });

