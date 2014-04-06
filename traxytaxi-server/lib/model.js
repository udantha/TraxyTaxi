/**
 * Created by udantha on 4/5/14.
 */

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
        return false;
    },
    update: function () {
        return false;
    },
    remove: function () {
        return false;
    }
});