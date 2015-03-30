// map.js
var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var routes = new Array;
 
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
    calcRoute();
}
 
 
function calcRoute() {
 
    if (0 == routes.length ) return ; 
    var route = routes.pop(); 
    var routeDetails = route.split(":"); 
    var villeOrigine = routeDetails[0]; 
    var villeDestination = routeDetails[1]; 
    var couleurRoute = routeDetails[2]; 
 
    var request = {
      origin:villeOrigine, 
      destination:villeDestination,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    var polylineOp = {
      strokeColor:couleurRoute // la couleur de la route : rouge
    };
    var renderOptions = {
      polylineOptions : polylineOp
    }; 
 
    directionsDisplay = new google.maps.DirectionsRenderer(renderOptions);
 
    directionsDisplay.setMap(map);
 
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        if (routes.length>0) {
        	setTimeout(function(){calcRoute();},600); 
        }
      }
    });
}
 
 
function initialisation () {
	initialize();
	routes.push("lille:lens:red"); 
	routes.push("béthune:lens:green"); 
	routes.push("arras:lens:blue"); 
	calcRoute(); 
 
}
 
function initEventHandlers(element, event, fx) {
    if (element.addEventListener)
        element.addEventListener(event, fx, false);
    else if (element.attachEvent)
        element.attachEvent('on' + event, fx);
} // observe
 
initEventHandlers(window, 'load', initialisation);