// Code generated by goctl. DO NOT EDIT.
// Source: gl.proto

package gameslobbyclient

import (
	"context"

	"game-lobby/game-lobby-server/types/gameslobby"

	"github.com/zeromicro/go-zero/zrpc"
	"google.golang.org/grpc"
)

type (
	EntryRequest = gameslobby.EntryRequest
	EntryResult  = gameslobby.EntryResult

	GamesLobby interface {
		Entry(ctx context.Context, in *EntryRequest, opts ...grpc.CallOption) (*EntryResult, error)
	}

	defaultGamesLobby struct {
		cli zrpc.Client
	}
)

func NewGamesLobby(cli zrpc.Client) GamesLobby {
	return &defaultGamesLobby{
		cli: cli,
	}
}

func (m *defaultGamesLobby) Entry(ctx context.Context, in *EntryRequest, opts ...grpc.CallOption) (*EntryResult, error) {
	client := gameslobby.NewGamesLobbyClient(m.cli.Conn())
	return client.Entry(ctx, in, opts...)
}
