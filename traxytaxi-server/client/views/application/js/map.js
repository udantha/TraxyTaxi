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
                    title: taxi.name,
                    phone: taxi.id,
                    status: taxi.status
                };

                // check if marker already exists
                var mapMarker = gmaps.markerExists('id', objMarker.id);
                if (mapMarker===false){
                    //gmaps.addMarker(objMarker);
                }else{
                    //update position
                    var newLatlng = new google.maps.LatLng(objMarker.lat, objMarker.lng);
                    mapMarker.setPosition(newLatlng);
                    mapMarker,setMap(null);
                    //mapMarker.setIcon('newImage.png');
                }
                var sts = objMarker.status==TAXI_STATUS_HIRE ? '<span style="color: gray;">On Hire</span>'
                    : objMarker.status==TAXI_STATUS_IDLE ? '<span style="color: green;">Good to go!</span>' : '<span style="color: gray;">Stopped</span>';
                var newMarker = gmaps.addMarker(objMarker);
                var infowindow = new google.maps.InfoWindow({
                    content: '<div>' +
                        '<ul>' +
                        '<li>Phone : <a href="tel:'+ objMarker.phone +'"><b>'+ objMarker.phone +'</b></a> </li>' +
                        '<li>Driver Name : '+ objMarker.title +' </li>' +
                        '<li>Position : <b>'+ sts +'</b> </li>' +
                        '</ul>' +
                        '</div>'
                });
                //add info window
                gmaps.infoWindows.push(infowindow);
                google.maps.event.addListener(newMarker, 'click', function() {
                    //remove all infowindow
                    for (var i=0;i<gmaps.infoWindows.length;i++) {
                        gmaps.infoWindows[i].close();
                    }
                    infowindow.open(gmaps.map, newMarker);
                });

            }
        });
        //google.maps.event.trigger(gmaps.map, 'resize');

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