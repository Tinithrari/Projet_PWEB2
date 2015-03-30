function Point(adresse, cp, ville, departement, longitude, latitude)
{
	this.adresse = adresse;
	this.cp = cp;
	this.ville = ville;
	this.departement = departement;
	this.longitude = longitude;
	this.latitude = latitude;
	
	this.getAdresse = function(){
		return this.adresse;
	};
	
	this.getCP = function() {
		return this.cp;
	};
	
	this.getVille = function() {
		return this.ville;
	};
	
	this.getDepartement = function() {
		return this.departement;
	};
	
	this.getLongitude = function() {
		return this.longitude;
	};
	
	this.getLatitude = function() {
		return this.latitude;
	};
	
	this.calculerDistance = function(point)
	{
		return Math.sqrt(Math.pow((point.getLongitude - longitude), 2)+Math.pow((point.getLatitude - latitude), 2));
	};
}
