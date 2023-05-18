import { registerResolver } from '@grpc/grpc-js/build/src/resolver';
import { Application, FrontendSession } from 'pinus';

export default function (app: Application) {
    return new Handler(app);
}


var messages = require('../../../../protos/gl_pb');
var services = require('../../../../protos/gl_grpc_pb');

var grpc = require('@grpc/grpc-js');

export class Handler {
    constructor(private app: Application) {

    }

    /**
     * New client entry.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @return {Void}
     */
    async entry(msg: any, session: FrontendSession) {   
        var target = 'localhost:8080';
        var client = new services.GamesLobbyClient(target,
                                                grpc.credentials.createInsecure());
        var request = new messages.EntryRequest();
        request.setMachinetype(10);
        
        var a = new Promise(function(resolve, reject) {
			client.entry(request, function(err, response) {
				resolve(response.getMessage());
            });
		});
        
        return a.then(function(value) {
            var rmsg = value + ', hello world - gs';
            return { code: 200, msg: rmsg };
        });
    }

    /**
     * Publish route for mqtt connector.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @return {Void}
     */
    async publish(msg: any, session: FrontendSession) {
        let result = {
            topic: 'publish',
            payload: JSON.stringify({ code: 200, msg: 'publish message is ok.' })
        };
        return result;
    }

    /**
     * Subscribe route for mqtt connector.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @return {Void}
     */
    async subscribe(msg: any, session: FrontendSession) {
        let result = {
            topic: 'subscribe',
            payload: JSON.stringify({ code: 200, msg: 'subscribe message is ok.' })
        };
        return result;
    }

}