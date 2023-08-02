'use client';

import { IconSend } from '@tabler/icons-react';
import React, { useState } from 'react';

interface Props {
  handleSend: (message: string) => void;
}

const ChatInput = ({ handleSend }: Props) => {
  const [message, setMessage] = useState('');

  return (
    <div className="flex gap-3 py-3">
      <textarea
        className="textarea w-full textarea-bordered resize-none"
        rows={1}
        placeholder="Message..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleSend(message);
            setMessage('');
          }
        }}
      ></textarea>
      <button
        className="btn btn-ghost btn-square"
        onClick={() => {
          handleSend(message);
          setMessage('');
        }}
      >
        <IconSend size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
