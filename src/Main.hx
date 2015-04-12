package ;

import org.zeroad.silex.SilexBot;
import org.zeroad.common_api.Utils;


/**
 * This class is unused, only for compilation
 * The game engine creates directly an instance of BotAI
 * @author lexa
 */

class Main 
{
    static var bot:SilexBot;
    static var settings:Settings = {player:null,templates:[]};
    static function main() 
    { 
        bot = new SilexBot(settings);
    }     
}
