'use client';

import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';

import roomApi from '@/config/api/room.api';
import { ROOM_SIZE } from '@/config/constants/room.const';
import toastHelper from '@/config/helpers/toast.helper';

import { useLocalStorage } from 'usehooks-ts';
import { withAuth } from '@/hocs/withAuth';
import AuthConsumer from '@/hooks/useAuth';

const { createRoom, joinRoom } = roomApi;

const JoinPage = () => {
  const [room, setRoom] = useState('');
  const [rooms, setRooms] = useLocalStorage<string[]>('rooms', []);
  const { currentUser: user } = AuthConsumer()

  const { mutate: createRoomMutate } = useMutation({
    mutationFn: async () => {
      if (!user) {
        Promise.reject('User not found')
      } else {
        return createRoom({
          owner: user,
          room_size: ROOM_SIZE,
        });
      }
    },

    onSuccess: (data) => {
      if (data && data.room && data.room.id) {
        setRooms([...rooms, data.room.id]);
        window.location.href = `/chat/${data.room.id}`;
      }
    },

    onError: () => {
      toastHelper.error("Couldn't create room");
    },
  });

  const { mutate: joinRoomMutate } = useMutation({
    mutationFn: async () => {
      if (!room || !user) return;
      return joinRoom({
        room_id: room,
        username: user,
      });
    },

    onSuccess: (data) => {
      if (data && data.room_id) {
        if (!rooms.includes(data.room_id)) {
          setRooms([...rooms, data.room_id]);
        }
        window.location.href = `/chat/${data.room_id}`;
      }
    },

    onError: () => {
      toastHelper.error("Couldn't join room");
    },
  });

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-fit w-[320px] text-center">
        <button
          className="btn mt-4 mx-auto"
          onClick={() => {
            createRoomMutate();
          }}
        >
          New Room
        </button>
        <div className="divider">OR</div>
        <input
          type="text"
          placeholder="Room ID"
          className="input input-bordered w-full"
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />

        <button
          className="btn mt-4 mx-auto"
          onClick={() => {
            joinRoomMutate();
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default withAuth(JoinPage);
