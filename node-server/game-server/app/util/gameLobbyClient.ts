var messages = require('../../protos/gl_pb');
var services = require('../../protos/gl_grpc_pb');
var grpc = require('@grpc/grpc-js');

export var EntryRequest = messages.EntryRequest;

// 單例模式的 GameLobbyClient 用來避免過多rpc的連線數量
export class GameLobbyClient {
    
    private static instance: GameLobbyClient;
    private client: any;

    private constructor(target: string) { 
        //範例 target = 'localhost:8080';
        this.client = new services.GamesLobbyClient(target,
                                                grpc.credentials.createInsecure());
    }

    public static getInstance(target: string): GameLobbyClient {
        if (!GameLobbyClient.instance) {
            GameLobbyClient.instance = new GameLobbyClient(target);
        }

        return GameLobbyClient.instance;
    }

    public getClient(): any {
        return this.client;
    }
}