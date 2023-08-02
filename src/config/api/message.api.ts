import type { Message, MessageCreate } from '@/config/types/message.type';

import api from '.';

const messageApi = {
  sendMessage: (body: MessageCreate): Promise<Message> => {
    return api.post('/chat/send', body);
  },

  getMessages: ({
    roomId,
    username,
  }: {
    roomId: string;
    username: string;
  }): Promise<{
    messages: Message[];
  }> => {
    return api.post(`/chat/messages/${roomId}`, {
      username,
    });
  },
};

export default messageApi;
