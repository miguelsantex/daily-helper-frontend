'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import { List, X } from 'phosphor-react';
import Link from 'next/link'

export default function Navbar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Suporte', link: '/support' },
    { id: 3, text: 'Sobre nós', link: '/about-us' },
    { id: 4, text: 'Account', link: '/profile' },
  ];

  return (
    <div className='bg-brand-primary flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
      <Image src={logo} width={250} height={250} alt='Logo' />

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-brand-thrid rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-white'
          >
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <X size={32} /> : <List size={32} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] z-10 h-full border-r gap-4 border-r-gray-900 bg-brand-primary ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <Image src={logo} width={250} height={250} alt='Logo' />
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-brand-thrid duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
