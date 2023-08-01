import Link from 'next/link';

import { IconPlus } from '@tabler/icons-react';
import React from 'react';

import Logo from '../shared/Logo';

const Sidebar = () => {
  return (
    <div className="w-60 p-3 bg-base-100 shadow-2xl">
      <div className="px-6">
        <Logo />
      </div>

      <ul className="menu w-full rounded-box">
        <li>
          <Link href={'/chat/join'}>
            <IconPlus size={18} /> Join Room
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
