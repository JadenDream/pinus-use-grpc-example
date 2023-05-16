# pinus-use-grpc-example
pinus 框架下使用 Grpc 的示例
主要提供 grpc 通訊之間的一個簡單範例
pinus 作為 grpc client 
golang go-zero 框架下作為 grpc Server

# 運行說明

## 運行流程
- 先執行 golang-server
- 再執行 node-server/game-server
- 最後執行 node-server/web-server

## node-server 
採用pinus的简单示例工程，包含：
 * game-server，游戏服务器 (grpc client 示例)
 * web-server，网页客户端的服务
  
安裝啟動範例請參閱 node-server/README.md

## golang-server
採用 go-zero 框架運行的 grpc server 端 示例

安裝啟動範例請參閱 golang-server/README.md
