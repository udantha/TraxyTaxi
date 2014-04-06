/**
 * Created by udantha on 4/6/14.
 */
gmaps = {
    // map object
    map: null,

    // google markers objects
    markers: [],

    // google lat lng objects
    latLngs: [],

    // our formatted marker data objects
    markerData: [],

    infoWindows: [],

    // add a marker given our formatted marker data object
    addMarker: function(marker) {
        var sts = marker.status==TAXI_STATUS_HIRE ? 'icon-idle.jpg'
            : marker.status==TAXI_STATUS_IDLE ? 'icon-idle.jpg' : 'sphere.gif';

        var gLatLng = new google.maps.LatLng(marker.lat, marker.lng);
        var gMarker = new google.maps.Marker({
            position: gLatLng,
            map: this.map,
            title: marker.title,
            // animation: google.maps.Animation.DROP,
            //icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            icon: '/'+ sts
        });
        this.latLngs.push(gLatLng);
        this.markers.push(gMarker);
        this.markerData.push(marker);
        return gMarker;
    },

    // calculate and move the bound box based on our markers
    calcBounds: function() {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, latLngLength = this.latLngs.length; i < latLngLength; i++) {
            bounds.extend(this.latLngs[i]);
        }
        this.map.fitBounds(bounds);
    },

    // check if a marker already exists
    markerExists: function(key, val) {
        _.each(this.markers, function(storedMarker) {
            if (storedMarker[key] == val)
                return storedMarker[key];
        });
        return false;
    },

    // intialize the map
    initialize: function() {
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng("6.941784", "79.879765"),
            mapTypeId: google.maps.MapTypeId.MAP
        };

        this.map = new google.maps.Map(
            document.getElementById('map-canvas'),
            mapOptions
        );

        var gMarker = new google.maps.Marker({
            position: mapOptions.center,
            map: this.map,
            //title: marker.title,
            // animation: google.maps.Animation.DROP,
            icon:'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        });

        // global flag saying we intialized already
        Session.set('map', true);

        //set to center
        this.locateMe();
    },

    /**
     * Set map to center
     */
    locateMe: function(){
        function success(crd){
            if(gmaps.map){
                var latLong = new google.maps.LatLng(crd.coords.latitude, crd.coords.longitude);
                gmaps.map.panTo(latLong);
            }
        }

        function error(error) {
            //console.log(error)
        }

        navigator.geolocation.getCurrentPosition(success, error);
    }
};


