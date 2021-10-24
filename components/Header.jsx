import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header>
      {/* left side of header */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* middle of header - search */}
      <div></div>

      {/* right side of header */}
      <div></div>
    </header>
  );
}

export default Header;
