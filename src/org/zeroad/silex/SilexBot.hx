package org.zeroad.silex;

import org.zeroad.common_api.Utils;
import org.zeroad.common_api.BaseAI;
import org.zeroad.common_api.State;
import org.zeroad.common_api.Entity;

@:native('SilexBot')
class SilexBot extends BaseAI {
	public function new(settings: Settings) {
		super(settings);
	}

	/**
     * initialize helpers, call Sequencer::onUpdate and reset helpers
     */
    override public function OnUpdate():Void
    {
    	chat("Hello !");
    	//trace(state);
        // Select iddle worker and go chop chop tree
        var myWorkers = entities.filter(function (entity: Entity, id: String){
        	return entity.isOwn() && entity.hasClass(EntityClass.WORKER) && entity.isIdle();
        });

        chat(myWorkers.toString());

        // var wood = state.entities.filter(function (entity: Entity, id: String){
        // 	return entity
        // });

        // myWorkers.forEach(function (entity: Entity, id: String){

        //});
    }

}