'use client'
import { navbarItem } from '@/components/constants/navigation-bar-item/navbar-item'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { MdOutlineDarkMode } from "react-icons/md"

interface sidebarProps {
  closeSidebar: () => void
}

const Sidebar = ({ closeSidebar }: sidebarProps) => {
  return (
    <div className='fixed z-10 top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-md'>
      <div className='fixed top-0 right-0 bg-white w-1/2 h-screen p-6'>
        <div className='flex flex-col gap-y-4'>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-bold'>Menu</p>
            <IoClose style={{ width: '24px', height: '24px' }} onClick={closeSidebar} />
          </div>
          <hr />
          {navbarItem.map((data, index) => (
            <Link key={index} href={data.href}>
              <p className='text-xl'>{data.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function NavigationBar() {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  const userTheme = localStorage.getItem("theme")
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

  const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark')
      return
    }
  }

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', "light")
      return
    }

    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }

  useEffect(() => {
    themeCheck()
  }, [])

  return (
    <div className='sticky top-0 w-full h-[72px] flex justify-center z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-b-slate-800 border-b'>
      <div className='w-[1800px] h-full px-2 lg:px-0 xl:px-0 flex justify-between items-center'>
        <Link href={'/'}>
          <p className='font-bold text-2xl antialiased'>raizatriestocode</p>
        </Link>
        <div className='flex items-center gap-x-4'>
          <MdOutlineDarkMode style={{ height: '32px', width: '32px' }} onClick={() => themeSwitch()} />
          <div className='hidden lg:flex xl:flex gap-4 '>
            {navbarItem.map((data, index) => (
              <Link key={index} href={data.href}>
                <div className='p-1 hover:bg-slate-400 hover:rounded-md duration-100 ease-in-out'>
                  <p className='font-bold text-xl antialiased'>{data.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className='block lg:hidden xl:hidden'>
            <FaBars style={{ height: '32px', width: '32px' }} onClick={handleSidebar} />
          </div>
        </div>
      </div>
      {sidebar && (
        <Sidebar closeSidebar={handleSidebar} />
      )}
    </div>
  )
}
