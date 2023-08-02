export type Message = {
  id: string;
  room_id: string;
  sender_id: string;
  content: string;
  timestamp: string;
};

export type MessageCreate = {
  room_id: string;
  sender_id: string;
  content: string;
};
