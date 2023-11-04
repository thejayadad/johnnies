'use client'
import React, { useState } from 'react';
import { RiShoppingCart2Fill, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='px-4 py-12 bg-white dark:bg-gray-800 shadow sticky top-0 z-10'>
      <div className='max-w-screen-2xl mx-auto flex justify-between items-center'>
          <Link href='/'>
            <span className='text-3xl flex items-center'>
              <span className='text-blue-500'>Sea</span>
              <span className='text-green-500'>Food</span>
              <span className='text-red-500'>Market</span>
            </span>
          </Link>
          <div className='text-gray-500 text-md tracking-widest title-font hidden md:flex space-x- text-xl space-x-4'>
            <Link href='/menu'>
              <span className='relative group'>
                MENU
                <div className='absolute left-0 w-0 h-0 bg-blue-500 group-hover:w-full group-hover:h-1 transition-all duration-300'></div>
              </span>
            </Link>
            <Link href='/about'>
              <span className='relative group'>
                ABOUT
                <div className='absolute left-0 w-0 h-0 bg-blue-500 group-hover:w-full group-hover:h-1 transition-all duration-300'></div>
              </span>
            </Link>
            <Link href='/contact'>
              <span className='relative group'>
                CONTACT
                <div className='absolute left-0 w-0 h-0 bg-blue-500 group-hover:w-full group-hover:h-1 transition-all duration-300'></div>
              </span>
            </Link>
          </div>
        <div className='flex items-center space-x-4'>
          <div className='md:hidden'>
            {menuOpen ? (
              <RiCloseLine
                className='h-6 w-6 text-gray-500 cursor-pointer'
                onClick={toggleMenu}
              />
            ) : (
                <RiMenuLine
                className='h-6 w-6 text-gray-500 cursor-pointer'
                onClick={toggleMenu}
              />
            )}
          </div>
          <Link href={'/cart'}>
          <span>{quantity}</span>
          <RiShoppingCart2Fill className='h-6 w-6 text-gray-500' />
          </Link  >
        </div>
      </div>
      <div
        className={`md:hidden ${menuOpen ? 'block' : 'hidden'} transition-all duration-300`}
      >
        <div className='flex flex-col space-y-2 bg-white'>
          <Link href='/menu'>
            <span className='p-4'>Menu</span>
          </Link>
          <Link href='/about'>
            <span className='p-4'>About</span>
          </Link>
          <Link href='/contact'>
            <span className='p-4'>Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
