'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

import { usePubNub } from 'pubnub-react';

import ChatInput from '@/components/features/chat/ChatInput';

import messageApi from '@/config/api/message.api';
import dateHelper from '@/config/helpers/date.helper';
import toastHelper from '@/config/helpers/toast.helper';

import clsx from 'clsx';
import AuthConsumer from '@/hooks/useAuth';

import get from "lodash/get"
import { Message } from '@/config/types/message.type';

const { getMessages, sendMessage } = messageApi;
const { calPastTime } = dateHelper;

// ChatRoom Component
const ChatRoom = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { currentUser:user } = AuthConsumer()

  const {
    data: messages,
    isError,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery(
    ['messages', params.id],
    () => {
      if (!user) {
        Promise.reject('User not found')
      } else {
        return getMessages({
          roomId: params.id,
          username: user,
        });
      }
    },
    {
      refetchIntervalInBackground: true,
    },
  );

  const { mutate: handleSend } = useMutation({
    mutationFn: async (message: string) => {
      if (!user) {
        Promise.reject('User not found')
      } else {
        return sendMessage({
          room_id: params.id,
          sender_id: user,
          content: message,
        });
      }

    },

    onSuccess: () => {
      // refetch();
    },

    onError: () => {
      toastHelper.error("Can't send message");
    },
  });

  const pubnub = usePubNub();
  useEffect(() => {
    pubnub.subscribe({
      channels: [params.id],
    });

    pubnub.addListener({
      message: () => {
        refetch();
      }
    })

    return () => {
      pubnub.unsubscribe({
        channels: [params.id],
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pubnub, params.id])

  return (
    <div className="flex flex-col w-full h-full">
      <h1>Chat Room {params.id}</h1>

      <div className="flex flex-1 flex-col-reverse overflow-auto">
        {isLoading && <span className="loading loading-spinner loading-lg mx-auto"></span>}

        {isError && <span className="text-red-500">Error</span>}

        {isSuccess && get(messages, "messages", []).map((message) => {
            const isMe = user === message.sender_id;

            return (
              <div className={clsx('chat', isMe ? 'chat-end' : 'chat-start')} key={message.id}>
                <div className="chat-header">
                  {isMe ? 'Me' : message.sender_id}
                  <time className="text-xs opacity-50 ml-1">{calPastTime(message.timestamp)}</time>
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
