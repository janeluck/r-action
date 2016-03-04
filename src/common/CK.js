/**
 * Created by janeluck on 3/3/16.
 */
define(['jQuery'], function () {
    $.ajax({
        url: 'service/info.json',
        dataType: 'json',
        success: function(data){
            console.log(data);
        }

    });

});