/**
 * Created by udantha on 4/5/14.
 */
TAXI_STATUS_IDLE = 'idle';
TAXI_STATUS_HIRE = 'hire';
TAXI_STATUS_STOP = 'stop';

Taxi = new Meteor.Collection("taxies");

//publish service
if (Meteor.isServer) {
    Meteor.publish('taxiList', function () {
        return Taxi.find();
    });
}

//allow services
Taxi.allow({
    insert: function (document) {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return false;
    }
});