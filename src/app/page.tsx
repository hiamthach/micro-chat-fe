'use client';

import AuthConsumer from '@/hooks/useAuth';
import { useState } from 'react';

import { useIsomorphicLayoutEffect, useLocalStorage } from 'usehooks-ts';

export default function Home() {
  const [name, setName] = useState('');

  const { currentUser, signIn } = AuthConsumer();

  useIsomorphicLayoutEffect(() => {
    if (currentUser) {
      window.location.href = '/chat';
    }
  }, [currentUser]);

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="h-fit w-[320px] text-center">
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <button
          className="btn mt-4 mx-auto"
          onClick={() => {
            if (!name) return;
            signIn(name);
          }}
        >
          Next
        </button>
      </div>
    </main>
  );
}
