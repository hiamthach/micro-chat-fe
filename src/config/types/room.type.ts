export type Room = {
  id: string;
  roomSize: number;
  participants: string[];
  createdBy: string;
};

export type RoomCreate = {
  room_size: number;
  owner: string;
};

export type RoomJoin = {
  room_id: string;
  username: string;
};
