import { env } from '@/app/utils/env';
import Link from 'next/link';
import React from 'react'


function Header() {
  return (
    <header className="w-full flex bg-black bg-opacity-35 h-20 z-50 absolute justify-center items-center">
      <nav className="text-white">
        <ul className="flex justify-center items-center gap-4">
          <li className='text-lg'>
            <Link href="/team" className='hover:underline'>team</Link>
          </li>
          <div className="h-1.5 w-1.5 bg-primary-full"></div>
          <li className='text-2xl font-serif font-bold tracking-wider'>
            <Link href="/">AlexBrot</Link>
          </li>
          <div className="h-1.5 w-1.5 bg-primary-full"></div>
          <li className='text-lg'>
            <Link href={env.SHOP_URL} className='hover:underline'>shop</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header