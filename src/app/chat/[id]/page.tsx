'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';

import ChatInput from '@/components/features/chat/ChatInput';

import messageApi from '@/config/api/message.api';
import dateHelper from '@/config/helpers/date.helper';

import clsx from 'clsx';
import { useLocalStorage } from 'usehooks-ts';

const { getMessages } = messageApi;
const { calPastTime } = dateHelper;
const ChatRoom = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [user] = useLocalStorage<string>('user', '');

  const {
    data: messages,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(['messages', params.id], () => {
    return getMessages({
      roomId: params.id,
      username: user,
    });
  });

  const handleSend = (message: string) => {
    console.log(message);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <h1>Chat Room {params.id}</h1>

      <div className="flex flex-1 flex-col-reverse overflow-auto">
        {isLoading && <span className="loading loading-spinner loading-lg mx-auto"></span>}

        {isError && <span className="text-red-500">Error</span>}

        {isSuccess &&
          messages.messages.map((message) => {
            return (
              <div className={clsx('chat', user === message.sender_id ? 'chat-end' : 'chat-start')} key={message.id}>
                <div className="chat-header">
                  {message.sender_id}
                  <time className="text-xs opacity-50">{calPastTime(message.timestamp)}</time>
                </div>
                <div className="chat-bubble">{message.content}</div>
              </div>
            );
          })}
      </div>

      <ChatInput handleSend={handleSend} />
    </div>
  );
};

export default ChatRoom;
