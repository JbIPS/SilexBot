package org.zeroad.silex;

	
/**
 * entity class names
 */
@:enum
abstract EntityClass(String) to String {
	var STRUCTURE = "Structure";
	var MECHANICAL = "Mechanical";
	var SIEGE = "Siege";
	var BUILDER = "Builder";
	var WORKER = "Worker";
	var CITIZEN_SOLDIER = "CitizenSoldier";
}