'use client';

import { GoogleLogin } from '@react-oauth/google';
import { IconBrandGoogle, IconLogout } from '@tabler/icons-react';
import { useState } from 'react';

import AuthConsumer from '@/hooks/useAuth';

import { useIsomorphicLayoutEffect } from 'usehooks-ts';

export default function Home() {
  const [name, setName] = useState('');

  const { currentUser } = AuthConsumer();

  // useIsomorphicLayoutEffect(() => {
  //   if (currentUser) {
  //     window.location.href = '/chat';
  //   }
  // }, [currentUser]);

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="h-fit w-[320px] flex flex-col gap-4 justify-center">
        <GoogleLogin
          onSuccess={(cre) => {
            console.log(cre.credential);
          }}
        />
      </div>
    </main>
  );
}
