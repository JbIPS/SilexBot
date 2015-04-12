Engine.IncludeModule("common-api");
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() { };
Main.main = function() {
	Main.bot = new SilexBot(Main.settings);
};
var Reflect = function() { };
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
var ResourceSupply = function(resourceSupplyType,resourceSupplySubType,resourceCount) {
	this.generic = resourceSupplyType;
	this.specific = resourceSupplySubType;
	this.count = resourceCount;
};
ResourceSupply.getRessourceArray = function(baseAi) {
	return [new ResourceSupply("food","",Reflect.field(baseAi.playerData.resourceCounts,"food")),new ResourceSupply("wood","",Reflect.field(baseAi.playerData.resourceCounts,"wood")),new ResourceSupply("stone","",Reflect.field(baseAi.playerData.resourceCounts,"stone")),new ResourceSupply("metal","",Reflect.field(baseAi.playerData.resourceCounts,"metal"))];
};
var org = org || {};
if(!org.zeroad) org.zeroad = {};
if(!org.zeroad.common_api) org.zeroad.common_api = {};
org.zeroad.common_api.ResourceSupplyTypeValue = function() { };
var Utils = function() {
};
Utils.VectorDistance = function(a,b) {
	var dx = a[0] - b[0];
	var dz = a[1] - b[1];
	return Math.sqrt(dx * dx + dz * dz);
};
Utils.applyCiv = function(civ,templateName) {
	return civ + "_" + templateName;
};
Utils.isInArray = function(array,element) {
	var idx = 0;
	while(idx < array.length && array[idx] != element) idx++;
	return idx < array.length;
};
if(!org.zeroad.silex) org.zeroad.silex = {};
if(!org.zeroad.silex._EntityClass) org.zeroad.silex._EntityClass = {};
org.zeroad.silex._EntityClass.EntityClass_Impl_ = function() { };
var SilexBot = function(settings) {
	BaseAI.call(this,settings);
};
SilexBot.__super__ = BaseAI;
SilexBot.prototype = $extend(BaseAI.prototype,{
	OnUpdate: function() {
		this.chat("Hello !");
		var myWorkers = this.entities.filter(function(entity,id) {
			return entity.isOwn() && entity.hasClass("Worker") && entity.isIdle();
		});
		this.chat(myWorkers.toString());
	}
});
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
Main.settings = { player : null, templates : []};
org.zeroad.common_api.ResourceSupplyTypeValue.FOOD = "food";
org.zeroad.common_api.ResourceSupplyTypeValue.WOOD = "wood";
org.zeroad.common_api.ResourceSupplyTypeValue.STONE = "stone";
org.zeroad.common_api.ResourceSupplyTypeValue.METAL = "metal";
org.zeroad.silex._EntityClass.EntityClass_Impl_.STRUCTURE = "Structure";
org.zeroad.silex._EntityClass.EntityClass_Impl_.MECHANICAL = "Mechanical";
org.zeroad.silex._EntityClass.EntityClass_Impl_.SIEGE = "Siege";
org.zeroad.silex._EntityClass.EntityClass_Impl_.BUILDER = "Builder";
org.zeroad.silex._EntityClass.EntityClass_Impl_.WORKER = "Worker";
org.zeroad.silex._EntityClass.EntityClass_Impl_.CITIZEN_SOLDIER = "CitizenSoldier";
Main.main();
