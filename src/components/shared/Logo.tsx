import Link from 'next/link';

import React from 'react';

const Logo = () => {
  return (
    <Link href={'/chat'} className="text-2xl font-black">
      Micro Chat
    </Link>
  );
};

export default Logo;
