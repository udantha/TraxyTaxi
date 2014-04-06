/**
 * Created by udantha on 4/6/14.
 */
Template.map.rendered = function() {
    if (! Session.get('map'))
        gmaps.initialize();

    Deps.autorun(function() {
        var taxies = Taxi.find().fetch();

        _.each(taxies, function(taxi) {
            if (typeof taxi !== 'undefined' &&
                typeof taxi.latitude !== 'undefined' &&
                typeof taxi.longitude !== 'undefined') {

                var objMarker = {
                    id: taxi._id,
                    lat: taxi.latitude,
                    lng: taxi.longitude,
                    title: taxi.name
                };

                // check if marker already exists
                var mapMarker = gmaps.markerExists('id', objMarker.id);
                if (mapMarker===false){
                    gmaps.addMarker(objMarker);
                }else{
                    //update position
                    var newLatlng = new google.maps.LatLng(objMarker.lat, objMarker.lng);
                    mapMarker.setPosition(newLatlng);
                    mapMarker.setIcon('newImage.png');
                }
            }
        });
    });
}

Template.map.destroyed = function() {
    Session.set('map', false);
}

Template.map.events({
    'click .locateme': function(e){
        gmaps.locateMe();
    }
});