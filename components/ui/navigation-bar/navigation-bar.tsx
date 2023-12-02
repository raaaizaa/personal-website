'use client'
import { navbarItem } from '@/components/constants/navigation-bar-item/navbar-item'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'

interface sidebarProps {
  closeSidebar: () => void
}

const Sidebar = ({closeSidebar}: sidebarProps) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black/70'>
      <div className='fixed top-0 right-0 bg-white w-1/2 h-screen p-6'>
        <div className='flex flex-col gap-y-4'>
          <div className='flex justify-between items-center'>
            <p className='text-2xl font-bold'>Menu</p>
            <IoClose style={{width:'24px', height:'24px'}} onClick={closeSidebar}/>
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

  return (
    <div className='w-full h-[72px] z-10 flex justify-between items-center'>
        <p className='font-bold text-2xl antialiased'>raizatriestocode</p>
        <div className='hidden lg:flex xl:flex gap-4 '>
            {navbarItem.map((data, index) => (
                <Link key={index} href={data.href}>
                <p className='font-bold text-xl antialiased'>{data.name}</p>
                </Link>
            ))}
        </div>
        <div className='block lg:hidden xl:hidden'>
            <FaBars style={{height: '32px', width: '32px'}} onClick={handleSidebar}/>
        </div>
        {sidebar && (
          <Sidebar closeSidebar={handleSidebar}/>
        )}
    </div>
  )
}
