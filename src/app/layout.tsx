import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from 'react-hot-toast';

import { AuthProvider } from '@/hooks/useAuth';

import './globals.css';
import { GoogleAuthProvider, NextAuthProvider, PubNubReactProvider, ReactQueryProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Micro chat app',
  description: 'Chat App with NextJS and Golang gRPC',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAuthProvider>
          <ReactQueryProvider>
            <PubNubReactProvider>
              <NextAuthProvider>{children}</NextAuthProvider>
            </PubNubReactProvider>
            <Toaster position="top-center" reverseOrder={true} />
          </ReactQueryProvider>
        </GoogleAuthProvider>
      </body>
    </html>
  );
}
