// utils/socket.ts
import { SOCKET_URL } from '@/config/constants/env.const';

import toastHelper from './toast.helper';

import { Socket, io } from 'socket.io-client';

let socket: Socket;

const initSocket = () => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      // Add any configurations here, if needed
      path: '/socket.io',
    });

    socket.on('connect', () => {
      toastHelper.success('Connected to server');
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      toastHelper.error('Disconnected from server');
      console.log('Disconnected from server');
    });
  }
};

const getSocket = () => {
  if (!socket) {
    throw new Error('Socket.IO client not initialized. Call initSocket() first.');
  }
  return socket;
};

const socketHelper = {
  initSocket,
  getSocket,
};

export default socketHelper;
