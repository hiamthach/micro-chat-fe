import Link from 'next/link';

import React from 'react';

const ChatPage = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Link href={'/chat/join'} className="btn btn-primary">
            Join Room
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
