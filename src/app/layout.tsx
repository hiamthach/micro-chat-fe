import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from 'react-hot-toast';

import './globals.css';
import { ReactQueryProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Micro chat app',
  description: 'Chat App with NextJS and Golang gRPC',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          {children}
          <Toaster position="top-center" reverseOrder={true} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
