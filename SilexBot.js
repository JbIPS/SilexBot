Engine.IncludeModule("common-api");
var SilexBot = (function() {
var m = {};
			 
m.SilexBot = function(settings) {
	API3.BaseAI.call(this, settings);

	this.turn = 0;
	
	this.firstTime = true;

	this.savedEvents = [];
	
	this.toUpdate = [];
}

m.SilexBot.prototype = new API3.BaseAI();

//m.SilexBot.prototype.state = 0;
m.SilexBot.prototype.OnUpdate = function() {
	/*if(this.gameFinished){
		return;
	}*/

	API3.DebugEnabled = true;
	
	
	
		var woods = this.gameState.getResourceSupplies("wood");
		var ownunits = this.gameState.getOwnUnits();
		var woodChoppers = ownunits.filter(API3.Filters.not(API3.Filters.isSoldier()));
		API3.debug("Found workers : "+woodChoppers.length);
		API3.debug("Found woods : " + woods.length);
		//woodChoppers[0].gather(woods[0]);
		
		woodChoppers.forEach(function(woodChopper) {

			//wood
			var closestWood = woods.filterNearest(woodChopper.position(),1).toEntityArray();

			if((woodChopper.isIdle()) && (closestWood.length >0)){
				woodChopper.gather(closestWood[0]);
			}
		});
		
		//woodChoppers[0].setMetaData("")




};

m.debug = function(output)
{
	API3.debug(output);
}


return m;
}());