'use client';

import React, { useState } from 'react';

const JoinPage = () => {
  const [room, setRoom] = useState('');

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-fit w-[320px] text-center">
        <input
          type="text"
          placeholder="Room ID"
          className="input input-bordered w-full"
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />

        <button className="btn mt-4 mx-auto" onClick={() => {}}>
          Join
        </button>
      </div>
    </div>
  );
};

export default JoinPage;
