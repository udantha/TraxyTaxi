/**
 * Created by udantha on 4/5/14.
 */
//Template.taxiList.helpers({
//    taxies:function() {
//        return Taxi.find();
//    }
//});


var x = function(test){
    alert(test.coords.latitude + " - " + test.coords.longitude);
}

function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(x, onError);