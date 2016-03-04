/**
 * Created by janeluck on 3/3/16.
 */
define(["jQuery", "jqxcore", "jqxbuttons", "jqxtree", "jqxpanel", "jqxscrollbar"], function () {
    var initialize = function () {
        $(document).ready(function () {
            $('#jqxTree').jqxTree({ height: '300px', width: '300px' });
            $('#jqxTree').css("visibility", "visible");
        });
    };
    return {
        initialize: initialize
    };
});