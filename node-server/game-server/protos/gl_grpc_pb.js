// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var gl_pb = require('./gl_pb.js');

function serialize_gameslobby_EntryRequest(arg) {
  if (!(arg instanceof gl_pb.EntryRequest)) {
    throw new Error('Expected argument of type gameslobby.EntryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gameslobby_EntryRequest(buffer_arg) {
  return gl_pb.EntryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gameslobby_EntryResult(arg) {
  if (!(arg instanceof gl_pb.EntryResult)) {
    throw new Error('Expected argument of type gameslobby.EntryResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gameslobby_EntryResult(buffer_arg) {
  return gl_pb.EntryResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var GamesLobbyService = exports.GamesLobbyService = {
  entry: {
    path: '/gameslobby.GamesLobby/Entry',
    requestStream: false,
    responseStream: false,
    requestType: gl_pb.EntryRequest,
    responseType: gl_pb.EntryResult,
    requestSerialize: serialize_gameslobby_EntryRequest,
    requestDeserialize: deserialize_gameslobby_EntryRequest,
    responseSerialize: serialize_gameslobby_EntryResult,
    responseDeserialize: deserialize_gameslobby_EntryResult,
  },
};

exports.GamesLobbyClient = grpc.makeGenericClientConstructor(GamesLobbyService);
