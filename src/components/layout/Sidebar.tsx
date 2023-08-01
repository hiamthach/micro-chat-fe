'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { IconLogout, IconPlus } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

import Logo from '../shared/Logo';

import { useLocalStorage } from 'usehooks-ts';

const Sidebar = () => {
  const [rooms, setRooms] = useLocalStorage<string[]>('rooms', []);
  const [user, setUser] = useLocalStorage<string>('user', '');
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    setUser('');
    setRooms([]);
    router.push('/');
  };

  return (
    <div className="min-w-[240px] h-screen p-3 bg-base-100 shadow-2xl flex flex-col">
      <div className="px-6">
        <Logo />
      </div>

      <ul className="menu w-full rounded-box flex-1">
        <li>
          <Link href={'/chat/join'}>
            <IconPlus size={18} /> Join Room
          </Link>
        </li>
        {rooms &&
          isClient &&
          rooms.map((room) => (
            <li key={room} className="w-full">
              <Link href={`/chat/${room}`} className={`w-full overflow-hidden`}>
                {room}
              </Link>
            </li>
          ))}
      </ul>

      {isClient && (
        <div className="">
          <ul className="menu w-full rounded-box">
            <li onClick={handleLogout}>
              <span>
                <IconLogout /> Logout {user}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
