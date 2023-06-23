import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): Message;

  getContent(): string;
  setContent(value: string): Message;

  getRoomid(): string;
  setRoomid(value: string): Message;

  getSenderid(): string;
  setSenderid(value: string): Message;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Message;
  hasTimestamp(): boolean;
  clearTimestamp(): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string,
    content: string,
    roomid: string,
    senderid: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SendMessageRequest extends jspb.Message {
  getContent(): string;
  setContent(value: string): SendMessageRequest;

  getRoomId(): string;
  setRoomId(value: string): SendMessageRequest;

  getSenderId(): string;
  setSenderId(value: string): SendMessageRequest;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SendMessageRequest;
  hasTimestamp(): boolean;
  clearTimestamp(): SendMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    content: string,
    roomId: string,
    senderId: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SendMessageResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): SendMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
  static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
  static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
  export type AsObject = {
    message: string,
  }
}

export class GetRoomMessagesRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): GetRoomMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomMessagesRequest): GetRoomMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomMessagesRequest;
  static deserializeBinaryFromReader(message: GetRoomMessagesRequest, reader: jspb.BinaryReader): GetRoomMessagesRequest;
}

export namespace GetRoomMessagesRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class GetRoomMessagesResponse extends jspb.Message {
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): GetRoomMessagesResponse;
  clearMessagesList(): GetRoomMessagesResponse;
  addMessages(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomMessagesResponse): GetRoomMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomMessagesResponse;
  static deserializeBinaryFromReader(message: GetRoomMessagesResponse, reader: jspb.BinaryReader): GetRoomMessagesResponse;
}

export namespace GetRoomMessagesResponse {
  export type AsObject = {
    messagesList: Array<Message.AsObject>,
  }
}

export class CreateRoomRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomRequest;
  static deserializeBinaryFromReader(message: CreateRoomRequest, reader: jspb.BinaryReader): CreateRoomRequest;
}

export namespace CreateRoomRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateRoomResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomResponse): CreateRoomResponse.AsObject;
  static serializeBinaryToWriter(message: CreateRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomResponse;
  static deserializeBinaryFromReader(message: CreateRoomResponse, reader: jspb.BinaryReader): CreateRoomResponse;
}

export namespace CreateRoomResponse {
  export type AsObject = {
    id: string,
  }
}

export class JoinRoomRequest extends jspb.Message {
  getName(): string;
  setName(value: string): JoinRoomRequest;

  getId(): string;
  setId(value: string): JoinRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinRoomRequest): JoinRoomRequest.AsObject;
  static serializeBinaryToWriter(message: JoinRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinRoomRequest;
  static deserializeBinaryFromReader(message: JoinRoomRequest, reader: jspb.BinaryReader): JoinRoomRequest;
}

export namespace JoinRoomRequest {
  export type AsObject = {
    name: string,
    id: string,
  }
}

export class JoinRoomResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): JoinRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinRoomResponse): JoinRoomResponse.AsObject;
  static serializeBinaryToWriter(message: JoinRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinRoomResponse;
  static deserializeBinaryFromReader(message: JoinRoomResponse, reader: jspb.BinaryReader): JoinRoomResponse;
}

export namespace JoinRoomResponse {
  export type AsObject = {
    message: string,
  }
}

