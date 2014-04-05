/**
 * Created by udantha on 4/5/14.
 */
Template.taxiList.helpers({
    taxies:function() {
        return Taxi.find();
    }
})