/**
 * Created by janeluck on 3/3/16.
 */
// Start the main app logic.
requirejs([ 'common/init','common/leftNav/main', 'pages/account/test0', 'pages/account/test1', 'lib/layer/2.1/layer'],
    function   ( a, b, c, layer) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
        console.log($);

        console.log(a.message);
        console.log(b.message);
        console.log(c.message);

        console.dir(arguments);


    });