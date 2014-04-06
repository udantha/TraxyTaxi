/**
 * Created by gaffoor on 4/5/14.
 */

var handlerId;
var TAXI_ID = "0712359841";

Template.taxiPage.events({
    'click .hire': function (event,tmpl) {
        event.preventDefault();
        Meteor.clearInterval(handlerId);
        handlerId = Meteor.setInterval(startHire, 2000);
    }
});

Template.taxiPage.events({
    'click .idle': function (event,tmpl) {
        event.preventDefault();
        Meteor.clearInterval(handlerId);
        handlerId = Meteor.setInterval(idleHire, 5000)
    }
});

Template.taxiPage.events({
    'click .stop': function (event,tmpl) {
        event.preventDefault();
        Meteor.clearInterval(handlerId);
        stopLoc();
    }
});

function startHire(){
    updateLocation(TAXI_ID, TAXI_STATUS_HIRE)
}

function idleHire(){
    updateLocation(TAXI_ID, TAXI_STATUS_IDLE)
}

function stopLoc(){
    updateLocation(TAXI_ID, TAXI_STATUS_STOP)
}

function updateLocation(txiId, status){
    navigator.geolocation.getCurrentPosition(function(crd){
        var tid = Taxi.findOne({id: txiId});
        Taxi.update({_id:tid._id}, {$set: {status: status, latitude: crd.coords.latitude, longitude: crd.coords.longitude}});
    }, function (error) {
        alert(error.message)
    });
}
