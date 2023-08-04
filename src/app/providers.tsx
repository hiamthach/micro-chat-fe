'use client';

import { SessionProvider } from 'next-auth/react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PubNubProvider } from 'pubnub-react';
import { ReactNode } from 'react';

import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  PUBNUB_PUBLISH_KEY,
  PUBNUB_SUBSCRIBE_KEY,
  PUBNUB_USER_ID,
} from '@/config/constants/env.const';

import PubNub from 'pubnub';

const queryClient = new QueryClient();

// React Query Provider
export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

// PubNub Provider
const pubnub = new PubNub({
  publishKey: PUBNUB_PUBLISH_KEY,
  subscribeKey: PUBNUB_SUBSCRIBE_KEY,
  userId: PUBNUB_USER_ID,
});

export const PubNubReactProvider = ({ children }: { children: ReactNode }) => {
  return <PubNubProvider client={pubnub}>{children}</PubNubProvider>;
};

// Next Auth Provider
export const NextAuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

// Google OAuth Provider
export const GoogleAuthProvider = ({ children }: { children: ReactNode }) => {
  return <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>{children}</GoogleOAuthProvider>;
};
