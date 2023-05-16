package logic

import (
	"context"

	"game-lobby/game-lobby-server/internal/svc"
	"game-lobby/game-lobby-server/types/gameslobby"

	"github.com/zeromicro/go-zero/core/logx"
)

type EntryLogic struct {
	ctx    context.Context
	svcCtx *svc.ServiceContext
	logx.Logger
}

func NewEntryLogic(ctx context.Context, svcCtx *svc.ServiceContext) *EntryLogic {
	return &EntryLogic{
		ctx:    ctx,
		svcCtx: svcCtx,
		Logger: logx.WithContext(ctx),
	}
}

func (l *EntryLogic) Entry(in *gameslobby.EntryRequest) (*gameslobby.EntryResult, error) {
	// todo: add your logic here and delete this line

	return &gameslobby.EntryResult{
		Code: 0,
		Message:  "game lobby server is ok.",
	}, nil
}
