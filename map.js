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

function selectionner (choix) {
    //var node = document.getElementById("liste");
    var options;   // options est un tableau contenant les valeurs servant à l'auto-complétion
    $( "#ville" ).autocomplete({
        source: options
    });
    return options.length;

}

function trimChoix(mot){ //supprimer les " : "
    var retour = mot.replace(":","");
    return retour;
}

function createXhrObject(){
    if (window.XMLHttpRequest)
        return new XMLHttpRequest();

    if (window.ActiveXObject){
        var names = [ "Msxml2.XMLHTTP", "Microsoft.XMLHTTP",
            "Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0"];
        for(var i in names){
            try{ return new ActiveXObject(names[i]); }
            catch(e){}
        }
    }
    window.alert("pas de prise en charge de XMLHTTPRequest.");
    return null; // non supporte
}

function recupListeVilles(codePostal) {
    var req = createXhrObject();
    if (null == req) return ;
    req.onreadystatechange = function() {
        // alert (req.readyState);
        if(req.readyState == 4){
            if(req.status == 200){
                if (0==req.responseText.length) alert ('le code '+codePostal+" n'existe pas");
                else {
                    //alert('réponse du serveur :'+req.responseText);
                    var tab = selectionner(req.responseText);
                    if(tab == 2){
                        document.getElementById("ville").value=trimChoix(req.responseText);
                    }

                }
            } else {
                alert("Error: returned status code " + req.status + " " + req.statusText);
            }
        }
    };
    req.open("POST", "assets/td3/td3_ex3_traitement.php", true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send('code='+codePostal);
} // submitForm

function saisir () {
    var texte = document.getElementById('code');
    var nb=texte.value.length;
    if (nb>4)recupListeVilles(texte.value);
    else alert ('format code postal incorrect !')
}
 
function initEventHandlers(element, event, fx) {
    if (element.addEventListener)
        element.addEventListener(event, fx, false);
    else if (element.attachEvent)
        element.attachEvent('on' + event, fx);
} // observe
 

initEventHandlers(window, 'load', initialisation);