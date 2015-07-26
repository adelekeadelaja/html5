window.onload = function() {
  var geoMessage = "Geolocation is not supported on this browser";
  var lng; var lat;
  
  // showPosition() function
  function showPosition(pos) {
    var contents = document.getElementById('contents');
    lat = pos.coords.latitude;
    lng = pos.coords.longitude;
    
    contents.innerHTML = 'Latitude: ' + lat + '<br>'
                          + 'Longitude: ' + lng + '<br>'
                          + 'Altitude: ' + pos.coords.altitude + '<br>'
                          + 'Speed: ' + pos.coords.speed + '<br>'
                          + 'Timestamp: ' + pos.timestamp;
  
    
      //  Google Static Map creation
      {
          //Load Google Maps
          var map_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng
                        + "&zoom=16&size=500x400&maptype=roadmap"
                        + "&scale=1&marker=color:red%7Clabel:A%7CWashington St";
                        
          
          // Create the Map object
          document.getElementById('map-placeholder').src = map_url;
          
      } // end of Google Maps utilization
  }
  
  
  // errorPosition() function to handle the error
  function errorPosition(error) {
    var errorMessage = "";
    
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "Permission was denied! Today gangan.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "There was a problem getting your position";
        break;
      case error.TIMEOUT:
        errorMessage = "The application has timed out while getting your location";
        break;
    }
    alert(errorMessage);
  }
  
  
  // Check browser compatibility
  if (window.navigator.geolocation) {
      geoMessage = "Geolocation is supported";
    
      // set options parameter: maximumAge to cache 50s timeout 60s
      var options = {maximumAge: 50000, timeout: 60000};
    
      // Get the location using:
      // 1. getCurrentPosition(successCallback, errorCallback, Option) 
      //    - get the current position; param 2 and 3 are optional
    
      // 2. watchPosition(successCallback, errorCallback, Option)
      //    - get position at intervals; param 2 and 3 are optional
    
      // 3. clearWatch() - terminate the watchPosition() method
      
      navigator.geolocation.getCurrentPosition(showPosition, errorPosition, options);
  }
  
  document.getElementById('geosupport').innerHTML = geoMessage;
  
};