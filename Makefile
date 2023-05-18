1-RunLobbyServer:
	cd golang-server/game-lobby-server && go run .

2-RunGameServer:
	cd node-server/game-server/dist && node app

3-RunWebServer:
	cd node-server/web-server && node app

92-BuildGameServer:
	cd node-server/game-server && npm run build

