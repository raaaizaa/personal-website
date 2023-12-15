'use client'
import { navbarItem } from '@/components/constants/navigation-bar-item/navbar-item'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Switch } from "@nextui-org/react";

interface sidebarProps {
  closeSidebar: () => void
}

const MoonIcon = (props: any) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="#808080"
    />
  </svg>
)

const SunIcon = (props: any) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <g fill="#808080">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
)

const Sidebar = ({ closeSidebar }: sidebarProps) => {
  return (
    <div className='fixed z-10 top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-md transition-all duration-150 ease-in'>
      <div className='fixed top-0 right-0 dark:bg-[#100c0c] bg-white w-1/2 h-screen p-6'>
        <div className='flex flex-col gap-y-4'>
          <div className='flex justify-between items-center p-2'>
            <p className=' text-2xl font-bold text-black dark:text-white'>Menu</p>
            <IoClose className='hover:cursor-pointer' style={{ width: '24px', height: '24px' }} onClick={closeSidebar} />
          </div>
          <hr />
          {navbarItem.map((data, index) => (
            <Link key={index} href={data.href} className='p-2 hover:dark:bg-[#242323] hover:bg-[#dbdbdb] w-full h-full ease-in-out duration-100'>
              <p className='text-xl dark:text-white text-black'>{data.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  const [userTheme, setUserTheme] = useState<string | null>(null);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      setUserTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    // Theme check logic
    if (userTheme === 'dark' || (!userTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  }, [userTheme]);
 
  const themeSwitch = () => {
    // Ensure code runs only on the client side
    if (typeof window !== 'undefined') {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
  };


  return (
    <div className='sticky top-0 w-full h-[72px] flex justify-center z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-b-slate-800 border-b'>
      <div className='w-[1800px] h-full px-2 lg:px-0 xl:px-0 flex justify-between items-center'>
        <Link href={'/'}>
          <p className='select-none text-2xl tracking-tight antialiased hover:text-[#726f6f] hover:dark:text-[#d4d4d4]'>raizatriestocode</p>
        </Link>
        <div className='flex items-center gap-x-4'>
          <Switch
            defaultChecked
            color='success'
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )}
            onValueChange={() => themeSwitch()} />
          <div className='hidden lg:flex xl:flex gap-4 '>
            {navbarItem.map((data, index) => (
              <Link key={index} href={data.href} className='hover:text-[#726f6f] hover:dark:text-[#d4d4d4]'>
                <div className='duration-100 ease-in-out '>
                  <p className='font-thin text-xl antialiased '>{data.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className='block lg:hidden xl:hidden'>
            <FaBars className='hover:cursor-pointer' style={{ height: '32px', width: '32px' }} onClick={handleSidebar} />
          </div>
        </div>
      </div>
      {sidebar && (
        <Sidebar closeSidebar={handleSidebar} />
      )}
    </div>
  )
}
