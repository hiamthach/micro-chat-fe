import React from 'react';

const ChatRoom = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div>
      <h1>Chat Room {params.id}</h1>
    </div>
  );
};

export default ChatRoom;
