Engine.IncludeModule("common-api");
var SilexBot = (function() {
var m = {};
			 
m.SilexBot = function(settings) {
	API3.BaseAI.call(this, settings);

	this.turn = 0;
	
	this.firstTime = true;

	this.savedEvents = [];
	
	this.toUpdate = [];
};

m.SilexBot.prototype = new API3.BaseAI();

m.SilexBot.prototype.buildFarm = function( f_workers ) {

	var nbFarm = 0;
	var gameState = this.gameState;
	
	f_workers.forEach(function(builder){
		if(builder.isIdle()){
			var buildings = gameState.getOwnFoundations().toEntityArray(); 
			if (buildings.length > 0){
				builder.repair(buildings[0]);
			} else if ( nbFarm < 1 ) {
				var x = builder.position()[0] + Math.round( Math.random() * 200 - 100);
				var y = builder.position()[1] + Math.round( Math.random() * 200 - 100 );
				var building = builder.construct("structures/athen_field", x, y, 0);
				nbFarm++;
			}
		}
	});

};

m.SilexBot.prototype.OnUpdate = function() {
	if(this.gameFinished){
		return;
	}

	API3.DebugEnabled = true;
	
	// Workers
	var f_workers = this.gameState.updatingCollection("f_workers", 
		API3.Filters.and(
			API3.Filters.byClass("Worker"),
			API3.Filters.byClass("Female")),
		this.gameState.getOwnUnits());
	var m_workers = this.gameState.updatingCollection("m_workers", 
		API3.Filters.and(
			API3.Filters.byClass("Worker"),
			API3.Filters.not(
				API3.Filters.byClass("Female"))),
		this.gameState.getOwnUnits());


	// BUILD A FARM
	var gameState = this.gameState;
	
	var field_count = gameState.countEntitiesByType("structures/athen_field");

	if ( field_count < 1 )
	{
		this.buildFarm( f_workers );
	}

	// FOOD
	var foods = this.gameState.getResourceSupplies("food");

	m_workers.forEach(function(foodGatherer) {
		var closestFood = foods.filterNearest(foodGatherer.position(),1).toEntityArray();

		if((foodGatherer.isIdle()) && (closestFood.length >0)){
			foodGatherer.gather(closestFood[0]);
		}
	});
};

m.debug = function(output)
{
	API3.debug(output);
};

return m;
}());