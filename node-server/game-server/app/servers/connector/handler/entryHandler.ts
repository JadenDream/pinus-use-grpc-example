import { Application, FrontendSession } from 'pinus';
import { GameLobbyClient, EntryRequest } from '../../../util/gameLobbyClient';

export default function (app: Application) {
    return new Handler(app);
}

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
        var client = GameLobbyClient.getInstance('localhost:8080').getClient();
        var request = new EntryRequest();
        request.setMachinetype(10);

        const promise = new Promise(function(resolve, reject) {
            var timeAllowed = 5000
            var timeout = new Date( Date.now() + timeAllowed )
			client.entry(request, {deadline: timeout}, function(err, response) {
                if (err) {
                    console.log('grpc error:', err);
                    reject(err);
                }
                resolve({ code: response.getCode(), msg: response.getMessage() + ', hello world - gs' })
            });
		});
        
        return promise
            .then(function(value) {
                console.log('grpc response:', value);
                return value;
            })
            .catch(function(err) {
                console.error(err);
                return { code: 500, msg: 'Entry Error! - gls' };
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