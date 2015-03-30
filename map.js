var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
 
function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var lens = new google.maps.LatLng(50.42579, 2.824328);
    var myOptions = {
      zoom:7,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: lens
    }; 
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);
}
 
 
 
function tracerTournee(depart, liste, arrivee, couleur) {
    var waypts = new Array; 
    for (var i in liste ) {
      waypts.push({
          location:liste[i],
          stopover:true});
    }
 
    var request = {
      origin: depart,
      destination: arrivee,
      waypoints: waypts,
      optimizeWaypoints: true,             // optimisation de la tournée
      travelMode: google.maps.TravelMode.DRIVING
    };
 
    var polylineOp = {
      strokeColor:couleur // la couleur de la route : rouge
    };
    var renderOptions = {
      polylineOptions : polylineOp
    }; 
 
    directionsDisplay = new google.maps.DirectionsRenderer(renderOptions);
 
    directionsDisplay.setMap(map);
 
   directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
 
      var totalDistance=0; 
      var route = response.routes[0];
      var summaryPanel = document.getElementById('directions_panel');
      summaryPanel.innerHTML = '';
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>';
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        totalDistance += route.legs[i].distance.value; 
      }
      summaryPanel.innerHTML += totalDistance/1000 + "Km"; 
    }
  });
}
 
 
function initialisation () {
	initialize();
	tracerTournee("paris",["lille", "lens", "béthune", "douai", "valenciennes"], "calais", "blue"); 
 
}
 
function initEventHandlers(element, event, fx) {
    if (element.addEventListener)
        element.addEventListener(event, fx, false);
    else if (element.attachEvent)
        element.attachEvent('on' + event, fx);
} // observe
 
initEventHandlers(window, 'load', initialisation);
 
 
function initialisation () {
	initialize();
	tracerTournee(); 
 
}
 
function initEventHandlers(element, event, fx) {
    if (element.addEventListener)
        element.addEventListener(event, fx, false);
    else if (element.attachEvent)
        element.attachEvent('on' + event, fx);
} // observe
 
initEventHandlers(window, 'load', initialisation);