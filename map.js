var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('ng2-Map'), {
    center: {
      lat: 29.424122,
      lng: -98.493629
    },
    zoom: 12
  });
}

  // infoWindow = new google.maps.InfoWindow;

// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };


    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    infoWindow.open(ng2-map);
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
infoWindow.open(ng2-map);
}
