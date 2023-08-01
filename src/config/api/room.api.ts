import type { Room, RoomCreate, RoomJoin } from '@/config/types/room.type';

import api from '.';

const roomApi = {
  createRoom: (
    body: RoomCreate,
  ): Promise<{
    room: Room;
  }> => {
    return api.post('/rooms', body);
  },

  joinRoom: (
    body: RoomJoin,
  ): Promise<{
    room_id: string;
    username: string;
    message: string;
  }> => {
    return api.post(`/rooms/join/${body.room_id}`, {
      username: body.username,
    });
  },
};

export default roomApi;
