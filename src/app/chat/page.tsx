import Link from 'next/link';

import React from 'react';

const ChatPage = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quis fugiat sequi excepturi.
              Quisquam quos quis fugiat sequi excepturi.
            </p>
            <Link href={'/chat/join'} className="btn">
              Join Room
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
