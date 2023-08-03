'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PubNubProvider } from 'pubnub-react';
import { ReactNode } from 'react';

import { PUBNUB_PUBLISH_KEY, PUBNUB_SUBSCRIBE_KEY, PUBNUB_USER_ID } from '@/config/constants/env.const';

import PubNub from 'pubnub';

const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const pubnub = new PubNub({
  publishKey: PUBNUB_PUBLISH_KEY,
  subscribeKey: PUBNUB_SUBSCRIBE_KEY,
  userId: PUBNUB_USER_ID,
});

export const PubNubReactProvider = ({ children }: { children: ReactNode }) => {
  return <PubNubProvider client={pubnub}>{children}</PubNubProvider>;
};