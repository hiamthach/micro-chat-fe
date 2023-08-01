'use client';

import { useState } from 'react';

import { useIsomorphicLayoutEffect, useLocalStorage } from 'usehooks-ts';

export default function Home() {
  const [name, setName] = useState('');
  const [user, setUser] = useLocalStorage<string>('user', '');

  useIsomorphicLayoutEffect(() => {
    if (user) {
      window.location.href = '/chat';
    }
  }, [user]);

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
            setUser(name);
          }}
        >
          Next
        </button>
      </div>
    </main>
  );
}
